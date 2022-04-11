<template>
  <div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div>
        <h5 class="col-12 title" style="margin: 20px 0;">Colaborador</h5>
        <div style="width: 100px;" class="row q-gutter-sm">
          <q-btn
            icon="add"
            color="primary"
            class="col"
            @click="
            newDialog()
            "
          >
          </q-btn>
          <q-btn
          icon="update"
          color="primary"
          class="col"
          @click="listAll()"
          >
          </q-btn>
        </div>
      </div>
      <div class="q-mt-md">
        <q-table
          :dense="$q.screen.lt.md"
          flat
          square
          bordered
          title="Lista de Colaboradores"
          :rows="rows"
          :columns="columns"
          :visible-columns="['title', 'options']"
          row-key="title"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="title" :props="props">
                {{ props.row.name }}
              </q-td>
              <q-td key="definition" :props="props">
                  {{ props.row.definition }}
              </q-td>
              <q-td key="options" class="text-right" :props="props">
                    <q-btn flat square icon="edit" @click="newDialog(props.row)" dense/>
                    <q-btn flat square icon="delete" @click="confirmDelete(props.row.id)" dense/>
              </q-td>
            </q-tr>
          </template>
        </q-table>

      </div>
    </div>
    </div>

    <q-dialog v-model="dialogCategory" persistent>
       <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Novo Colaborador</div>
        </q-card-section>
        <q-form @submit="saveItem">
          <q-card-section class="q-pt-none">
          <q-input dense v-model.trim="formData.name"  autofocus />
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
    label: 'Nome',
    align: 'left',
    field: 'title',
    sortable: true,
  },

  {
    name: 'options', align: 'right', label: 'Ação', field: 'options', sortable: true,
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
      name: '',
      id: null,
    });

    const users = ref([]);
    const getAllUsers = async () => {
      users.value = await list('users');
    };

    const listAll = async () => {
      try {
        loading.value = true;
        rows.value = await list('categoria');
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };
    const deleteItem = async (id) => {
      try {
        loading.value = true;
        await remove('categoria', id);
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

          await post('categoria', formData);
        } else {
          await update('categoria', formData);
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
        formData.name = '';
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

    return {
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
