<template>

 <q-page class="q-pa-md">
    <div class="text-h5 q-pa-sm">Tipos de Abordagem</div>
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
          label="Nova tipo"
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
          title="Lista de tipos de abordagem"
          :rows="rows"
          :columns="columns"
          :visible-columns="['title', 'options']"
          row-key="title"
          :filter="filter"
          separator="cell"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="title" :props="props">
                {{ props.row.type_approach }}
              </q-td>
              <q-td key="definition" :props="props">
                  {{ props.row.definition }}
              </q-td>
               <q-td key="options" class="text-center" :props="props">
                <q-btn flat square icon="edit" @click="newDialog(props.row)" dense/>
                <q-btn flat square icon="delete" @click="confirmDelete(props.row.id)" dense/>

              </q-td>
            
            </q-tr>
          </template>
        </q-table>
  </q-page>

  <div>

    <q-dialog v-model="dialogCategory" persistent>
       <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Novo Tipo de abordagem</div>
        </q-card-section>
        <q-form @submit="saveItem">
          <q-card-section class="q-pt-none">
          <q-input dense v-model.trim="formData.type_approach"  autofocus />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="Cancelar" color="primary" v-ripple no-caps v-close-popup />
          <q-btn  label="Salvar" color="primary"  type="submit" v-ripple no-caps v-close-popup />
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
import {
  defineComponent, onMounted, reactive, ref,
} from 'vue';
import { useQuasar } from 'quasar';
import useApi from '../../../composebles/useApi';

const columns = [
  {
    name: 'title',
    required: true,
    label: 'Nome do tipo',
    align: 'left',
    field: 'title',
    sortable: true,
  },

  {
    name: 'options', align: 'center', label: 'Ação', field: 'options', sortable: true,
  },

];

export default defineComponent({

  setup() {
    const loading = ref(true);
    const $q = useQuasar();

    const {
      list, post, update, remove,
    } = useApi();

    const rows = ref([]);

    const topics = ref([]);

    const formData = reactive({
      type_approach: '',
      id: null,
    });

    const listAll = async () => {
      try {
        loading.value = true;
        rows.value = await list('type_approach');
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };
    const deleteItem = async (id) => {
      try {
        loading.value = true;
        await remove('type_approach', id);
        listAll();
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const saveItem = async () => {
      try {
        loading.value = true;
        if (!formData.id) {
          delete formData.id;

          await post('type_approach', formData);
        } else {
          alert(JSON.stringify(formData.id));
          await update('type_approach', formData);
        }
        listAll();
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    onMounted(() => {
      listAll();
    });

    const onItemClick = async () => {

    };

    const dialogCategory = ref(false);
    const newDialog = (data) => {
      if (data) {
        Object.keys(data).forEach((key) => {
          formData[key] = data[key];
        });
      } else {
        formData.type_approach = '';
      }
      dialogCategory.value = true;
    };

    function confirmDelete(id) {
      $q.dialog({
        title: 'Eliminar registro',
        message: 'Gostaria de apagar este registro?',
        persistent: true,
        cancel: 'Cancelar',
      }).onOk(() => {
        deleteItem(id);
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
        .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        });
    }

    const filter = ref('')

    return {
      filter,
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

<style>

</style>
