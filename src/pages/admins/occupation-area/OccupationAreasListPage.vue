<template>

 <q-page class="q-pa-md">
    <div class="text-h5 q-pa-sm">Áreas de oucupação</div>
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
          label="Novo tipo"
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
        title="Lista de ocupações"
        :rows="categories"
        :columns="columns"
        :visible-columns="['title', 'definition']"
        :filter="filter"
        separator="cell"
        row-key="title"
      >
        <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props" class="text-center">
                {{ props.row.occupation_area }}
              </q-td>
              <q-td key="actions" class="text-center" :props="props">
                <q-btn flat square icon="edit" @click="newDialog(props.row)" dense/>
                <q-btn flat square icon="delete" @click="confirmDelete(props.row.id)" class="q-ml-sm" dense/>
              </q-td>
            </q-tr>
          </template>
      </q-table>
  </q-page>

<div class="flex q-pt-xl flex-center">

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
    align: 'center',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: 'actions',
    required: true,
    label: 'Acoes',
    align: 'center',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },

];

const rows = [];

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
            formData.id = null;
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

    const filter = ref('')
    
    return {
      filter,
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
