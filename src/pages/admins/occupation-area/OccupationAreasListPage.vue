<template>
<div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div>
        <h5>Áreas de oucupação</h5>
        <div class="row q-gutter-sm">
          <q-btn 
          @click="
           newDialog()
          " 
          icon="add"
          color="primary"
          >
          </q-btn>
          <q-btn 
          @click="
           listAll()
          " 
          icon="update"
          color="primary"
          >
          </q-btn>
        </div>
      </div>
    </div>
    <div class="col q-mt-md">
      <q-table
        flat
        square
        bordered
        title="Lista de ocupações"
        :rows="categories"
        :columns="columns"
        :visible-columns="['title', 'definition']"
        row-key="title"
      >
        <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props">
                {{ props.row.occupation_area }}
              </q-td>
              <q-td key="actions" :props="props">
                  <div class="row q-gutter-sm">
                    <q-btn flat square icon="edit" @click="newDialog(props.row)" dense/>
                    <q-btn flat square icon="delete" @click="confirmDelete(props.row.id)" class="q-ml-sm" dense/>
                  </div>
              </q-td>
            </q-tr>
          </template>
      </q-table>
      </div>
    </div>
     <q-dialog v-model="dialogCategory" persistent>
       <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Nova area de ocupação</div>
        </q-card-section>
        <q-form @submit="saveItem">
          <q-card-section class="q-pt-none">
            <q-input dense v-model.trim="formData.occupation_area"  autofocus />
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
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Titulo',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'actions',
    required: true,
    label: 'Acoes',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: false,
  },

];

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
];

import { useQuasar } from 'quasar'
import { defineComponent, ref, onMounted, reactive } from 'vue';
import useApi from '../../../composebles/useApi';

export default defineComponent({
  name: 'OccupationAreaListPage',

  components: {
  },

  setup() {
    const loading = ref(true);
    const $q = useQuasar()


    const { list, post, update, remove } = useApi();

    const topics = ref([]);
    const categories = ref([]);

    const formData = reactive({
      occupation_area: "",
      id: null
    })

    const listAll = async () => {
      try {
        loading.value = true;
        categories.value = await list('occupation_area');
        loading.value = false;
      } catch (error) {
        alert(JSON.stringify(error));
      }
    };
     const deleteItem = async (id) => {
      try {
        loading.value = true;
            await remove('occupation_area', id);
          listAll()
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

       const saveItem = async () => {
      try {
        loading.value = true;
          if(!formData.id) {
            delete formData.id
            await post('occupation_area', formData);
          }else{
            await update('occupation_area', formData);
          }
          listAll()
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

    const dialogCategory = ref(false)
    const newDialog = (data) => {
      if(data) {
        Object.keys(data).forEach(key => {
          formData[key]= data[key]
        })

      } else {
        formData.occupation_area=""
      }
      dialogCategory.value=true
    }

    function confirmDelete (id) {
      $q.dialog({
        title: 'Eliminar registro',
        message: 'Gostaria de apagar este registro?',
         persistent: true,
        cancel: "Cancelar"
      }).onOk(() => {
        deleteItem(id)
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
    
    return {
      confirmDelete,
      newDialog,
      formData,
      loading,
      deleteItem,
      dialogCategory,
      categories,
      saveItem,
      onItemClick,
      columns,
      rows,
      listAll,
      topics,
      varDialogPassword: ref(false),
    };
  },
  //  <q-btn class="gt-xs" size="12px" flat dense round icon="visibility" />
});
</script>

<style lang="sass" scoped>
  .q-header
    background-color: #0053ab
  .explore
    width: 80vw
</style>
