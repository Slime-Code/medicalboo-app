<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-pa-sm">Tópicos</div>
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
          label="Nova tópico"
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
      title="Lista de Categorias"
      :rows="rows"
      :columns="columns"
      :visible-columns="['title', 'options']"
      row-key="title"
      :filter="filter"
      separator="cell"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="title" class="text-center" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="definition" :props="props">
            {{ props.row.definition }}
          </q-td>
          <q-td key="options" class="text-center" :props="props">
            <q-btn flat square icon="edit" @click="newDialog(props.row)" dense />
            <q-btn flat square icon="delete" @click="confirmDelete(props.row.id)" dense />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
  <div class="flex q-pt-xl flex-center">
    <q-dialog v-model="dialogCategory" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Novo tpico</div>
        </q-card-section>
        <q-form @submit="saveItem">
          <q-card-section>
            <q-select
              :rules="[(val) => !!val || 'Campo obrigatório']"
              dense
              outlined
              v-model="categoria"
              :options="optionsCategory"
              label="Categoria"
            />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input dense v-model.trim="formData.name" label="Tópico" autofocus />
            <q-checkbox
              class="q-ma-sm"
              dense
              v-model="formData.premium"
              label="Premium"
              autofocus
            />
          </q-card-section>

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
import useApi from "../../../composebles/useApi";

const columns = [
  {
    name: "title",
    required: true,
    label: "Titulo",
    align: "center",
    field: "title",
    sortable: true,
  },

  {
    name: "options",
    align: "center",
    label: "Acção",
    field: "options",
    sortable: true,
  },
];

export default defineComponent({
  setup() {
    const loading = ref(true);
    const $q = useQuasar();

    const { list, post, update, remove, getByField } = useApi();

    const rows = ref([]);

    const topics = ref([]);

    const optionsCategory = ref(null);

    const categoria = ref(null);

    const formData = reactive({
      name: "",
      id: null,
      premium: false,
      categoria_id: null,
    });

    const listAll = async () => {
      try {
        loading.value = true;
        rows.value = await list("topic");
        const auxCategory = await list("categoria");
        loading.value = false;
        optionsCategory.value = auxCategory.map((item) => ({
          label: item.name,
          id: item.id,
        }));
      } catch (error) {
        loading.value = false;
        alert(error);
      }
    };
    const deleteItem = async (id) => {
      try {
        loading.value = true;
        const approachId = await getByField("approach", "topic_id", id);
        approachId.forEach(async (elem) => {
          const exameId = await getByField("exameComplementar", "approach_id", elem.id);
          exameId.forEach(async (ment) => {
            await remove("exameComplementar", ment.id);
          });
          const definicaoId = await getByField("definicao", "approach_id", elem.id);
          definicaoId.forEach(async (ment) => {
            await remove("definicao", ment.id);
          });
          const contenteId = await getByField(
            "approach_contents",
            "id_approach",
            elem.id
          );
          contenteId.forEach(async (ment) => {
            await remove("approach_contents", ment.id);
          });
          const favritoId = await getByField(
            "favorite_approach_user",
            "approach_id",
            elem.id
          );
          favritoId.forEach(async (ment) => {
            await remove("favorite_approach_user", ment.id);
          });

          await remove("approach", elem.id);
        });
        const idAcessTopicUser = await getByField("access_topic_user", "topic_id", id);
        idAcessTopicUser.forEach(async (element) => {
          await remove("access_topic_user", element.id);
        });
        await remove("topic", id);
        listAll();
        loading.value = false;
      } catch (error) {
        loading.value = false;
        alert(JSON.stringify(error));
      }
    };

    const saveItem = async () => {
      try {
        loading.value = true;
        formData.categoria_id = categoria.value.id;

        if (!formData.id) {
          delete formData.id;

          await post("topic", formData);
        } else {
          await update("topic", formData);
        }
        listAll();
        loading.value = false;
      } catch (error) {
        loading.value = false;
        alert(JSON.stringify(error));
      }
    };

    onMounted(async () => {
      await listAll();
    });

    const onItemClick = async () => {};

    const dialogCategory = ref(false);
    const newDialog = (data) => {
      if (data) {
        categoria.value = optionsCategory.value.find((c) => c.id === data.categoria_id);

        Object.keys(data).forEach((key) => {
          formData[key] = data[key];
        });
      } else {
        formData.name = "";
        formData.categoria = null;
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

    return {
      categoria,
      optionsCategory,
      confirmDelete,
      newDialog,
      formData,
      loading,
      deleteItem,
      dialogCategory,
      saveItem,
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
