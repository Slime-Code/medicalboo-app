<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-pa-sm">Minhas Imagens</div>
    <q-card class="q-mb-sm" flat bordered>
      <div class="row q-pa-md q-gutter-sm">
        <q-input
          class="col-7 col-sm-7 col-md-7 col-xs-12 col-lg-7 col-xl-7"
          v-model="filter"
          placeholder="Pesquisar abordagem"
          dense
          outlined
        />
        <q-space />
        <q-btn
          class="col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2"
          color="primary"
          label="Nova foto"
          @click="newDialog()"
          no-caps
          rounded
        >
        </q-btn>
        <q-btn
          class="col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2"
          color="primary"
          label="Atualizar"
          @click="listAll()"
          no-caps
          rounded
        >
        </q-btn>
      </div>
    </q-card>
    <q-table
      :dense="$q.screen.lt.md"
      flat
      square
      bordered
      :rows="rows"
      :columns="columns"
      :visible-columns="['title', 'definition' ,'options']"
      row-key="definition"
      :filter="filter"
      filter-method="getCellValue"
      separator="cell"
    >
      <template v-slot:body="props">
        <q-tr :props="props" class="text-center">
        <q-avatar class="q-ml-sm" size="60px">
          <q-img :src="props.row.img_url" />
        </q-avatar>
          <q-td key="definition" :props="props">
            {{ props.row.descricao }}
          </q-td>
          <q-td key="options" class="text-center" :props="props">
            <q-btn flat square icon="delete" @click="confirmDelete(props.row.id)" dense />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>

  <div class="column" style="min-width: 99.9%">
    <q-dialog v-model="dialogCategory" persistent>
      <q-card class="q-ml-ms" style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Nova Foto</div>
        </q-card-section>
        <q-form @submit="saveImg">
          <q-input class="q-ml-sm" dense v-model.trim="formData.descricao" label="Descrição" autofocus />
          <q-input
            label="Carregar Imagem"
            stack-label
            type="file"
            v-model="imgs"
            accept="image/*"
            class="q-ml-sm"
          />

          <q-card-actions align="right" class="text-primary">
            <q-btn label="Cancelar" color="primary" v-ripple no-caps v-close-popup />
            <q-btn
              label="Salvar"
              color="primary"
              type="submit"
              v-ripple
              no-caps
              v-close-popup
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>

    <q-inner-loading
      :showing="loading"
      label="Atualizando..."
      label-class="text-primary"
      color="primary"
      label-style="font-size: 1.1em"
    />
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useQuasar } from "quasar";
// import { approach } from "src/store/approach/getters";
import useApi from "src/composebles/useApi";
import useAuthUser from 'src/composebles/useAuthUser';

const columns = [
  {
    name: "title",
    required: true,
    label: "Imagem",
    align: "center",
    field: "title",
    sortable: true,
  },

  {
    name: "definition",
    required: true,
    label: "descrição",
    align: "center",
    field: "title",
    sortable: true,
  },

  {
    name: "options",
    align: "center",
    label: "Ação",
    field: "options",
    sortable: true,
  },
];

export default defineComponent({
  setup() {
    const loading = ref(true);
    const $q = useQuasar();

    const { user } = useAuthUser();

    const { update, post, uplodImg, remove, removeWhere, getByField } = useApi();

    const rows = ref([]);

    const imgs = ref([]);

    const topics = ref([]);

     const formData = ref({
      id: null,
      img_url: '',
      user_id: null,
      descricao: ''
    });

    const listAll = async () => {
      try {
        loading.value = true;
        rows.value = await getByField("img", 'user_id', user.value.id);
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };
  
    const deleteItem = async (id) => {
      try {
        loading.value = true;
        await remove("img", id);
      } catch (error) {
        alert(JSON.stringify(error));
      } finally {
        listAll();
        loading.value = false;
      }
    };

    const saveImg = async () => {
      try {
        loading.value = true;
        if (imgs.value.length > 0 && !formData.value.id) {
          formData.value.user_id = user.value.id;
          const imgUrl = await uplodImg(imgs.value[0], 'perfil');
          formData.value.img_url = imgUrl;
          const auxForm = formData;
          delete auxForm.value.id;
          await post('img', auxForm.value);
        } else {
          await update('img', formData.value); 
        }
        listAll();
      } catch (error) {
        alert(error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      // alert(imgs.value);
      listAll();
    });

    const onItemClick = async () => {};

    const dialogCategory = ref(false);
    const newDialog = (data) => {
      if (data) {
        formData.value.id = data.id;
        formData.value.descricao = data.descricao;
        formData.value.img_url = data.img_url;
        formData.value.user_id = data.id;
        // imgs.value = data.img_url;
        alert(JSON.stringify(formData.value))
      } else {
        formData.value.id = null;
        formData.value.descricao = "";
        formData.value.img_url = "";
        
      }
      dialogCategory.value = true;
    };

    function confirmDelete(id) {
      $q.dialog({
        title: "Eliminar registro",
        message: "Gostaria de apagar este registro?",
        persistent: true,
        cancel: "Cancelar",
      })
        .onOk(() => {
          deleteItem(id);
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    const filter = ref("");

    return {
      imgs,
      filter,
      confirmDelete,
      newDialog,
      formData,
      loading,
      deleteItem,
      dialogCategory,
      saveImg,
      onItemClick,
      columns,
      rows,
      listAll,
      topics,
      varDialogPassword: ref(false),
    };
  },
});
</script>

<style></style>
