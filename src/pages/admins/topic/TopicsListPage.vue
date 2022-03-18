<template>
<div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div class="row q-gutter-sm">
        <h5 class="col-12 title" style="margin: 20px 0;">Tópicos</h5>
        <div class="col-12" style="margin: auto 0;">
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
      <q-list v-if="!loading" bordered class="rounded-borders"
        style="min-width: 160px; width:100%;">
          <q-item-label header><strong>Lista de tópicos</strong></q-item-label>

            <q-separator/>

          <q-item v-for="(category, index) in categories" :key="index">
            <q-item-section>
              <q-item-label class="q-mt-sm">{{ category.name }}</q-item-label>
            </q-item-section>

            <q-item-section top side class="medium-screen-only">
              <div class="text-grey-8 q-gutter-xs">
                <q-btn size="12px" flat dense round icon="edit" @click="varDialogPassword = true" />
                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
              </div>
            </q-item-section>

            <q-item-section top side class="non-medium-screen-only">
              <q-btn-dropdown flat round dense icon="more_vert">
                <q-list separator>
               
                   <q-item clickable dense v-close-popup @click="newDialog(category)">
                    <q-item-section>
                      <q-item-label>Editar</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable dense v-close-popup @click="confirmDelete(category.id)">
                    <q-item-section>
                      <q-item-label>Eliminar</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>

          <q-separator/>
        </q-list>
      </div>
    </div>
     <q-dialog v-model="dialogCategory" persistent>
       <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Nova topic</div>
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
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true,
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
  name: 'TopicListPage',

  components: {
  },

  setup() {
    const loading = ref(true);
    const $q = useQuasar()


    const { list, post, update, remove } = useApi();

    const topics = ref([]);
    const categories = ref([]);

    const formData = reactive({
      name: "",
      id: null
    })

    const listAll = async () => {
      try {
        loading.value = true;
        categories.value = await list('topic');
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };
     const deleteItem = async (id) => {
      try {
        loading.value = true;
            await remove('topic', id);
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

             await post('topic', formData);
          }else{

            await update('topic', formData);
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
        formData.name=""
      }
      dialogCategory.value=true
    }

    function confirmDelete (id) {
      $q.dialog({
        title: 'Eliminar registro',
        message: 'Gostaria de apagar este registro?',
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
