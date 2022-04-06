<template>
  <div class="flex q-pt-xl">
  <div class="column" style="min-width: 99.9%">
    <div class="col q-ma-xs">
      <div>
        <h5 class="col-12 title" style="margin: 20px 0;">Abordagem</h5>
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
          @click="getAproaches()"
          >
          </q-btn>
        </div>
      </div>
      <div class="q-mt-md">
        <q-table

          color="amber"
          :dense="$q.screen.lt.sm"
          flat
          square
          bordered
          title="Lista de abordagens"
          :rows="rows"
          :columns="columns"
          :visible-columns="['title', 'options', 'categoria', 'criado']"
          row-key="title"
          separator="vertical"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="title" :props="props">
                {{ props.row.title }}
              </q-td>
              <q-td class="text-left" key="categoria" :props="props">
                {{ props.row.categoria }}
              </q-td>
              <q-td class="text-left" key="criado" :props="props">
                  Yuri Rego aos: {{ props.row.created_at }}
              </q-td>
              <q-td key="options" class="text-left" :props="props">
                    <q-btn flat square icon="edit" @click="newDialog(props.row)" dense/>
                    <q-btn flat square icon="delete" @click="confirmDelete(props.row.id)" dense/>
              </q-td>
            </q-tr>
          </template>
        </q-table>

      </div>
    </div>
    </div>

    <q-dialog v-model="showAddApproach" persistent>

      <q-card class="full-width">
        <q-card-section>
          <div class="text-h6">Nova Abordagem</div>
        </q-card-section>
        <q-form @submit="saveItem">

            <q-card-section class="q-pt-none q-gutter-y-sm">

              <q-input :rules="[val => !!val || 'Campo obrigatório']" outlined label='Titulo' dense v-model.trim="formData.title"  autofocus />
              <q-select :rules="[val => !!val || 'Campo obrigatório']" dense outlined v-model="formData.topic_id" :options="optionsTopic" label="Topico" />
              <q-select :rules="[val => !!val || 'Campo obrigatório']" dense outlined v-model="formData.type_approach_id" :options="optionsAproach" label="Tipo de Abordagem" />

              <q-input :rules="[val => !!val || 'Campo obrigatório']" outlined label='Definicao' dense v-model ="formData.definition" type="textarea"  />
              <q-input :rules="[val => !!val || 'Campo obrigatório']" outlined label='Diagnostico' dense v-model ="formData.diagnosis"   type="textarea"/>
              <q-input :rules="[val => !!val || 'Campo obrigatório']" outlined label='Complementar' dense v-model ="formData.complentary"  type="textarea" />

            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn  label="Cancelar " @click="loading=false" color="primary" v-ripple no-caps v-close-popup/>

              <q-btn  label="Salvar"  color="primary"  type="submit" v-ripple no-caps />
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
    label: 'Nome do Artigo',
    align: 'left',
    field: 'title',
    sortable: true,
  },

  {
    name: 'categoria', align: 'left', label: 'Categoria', field: 'categoria', sortable: true,
  },

  {
    name: 'criado', align: 'left', label: 'Criado Por', field: 'criado Por', sortable: true,
  },

  {
    name: 'options', align: 'left', label: 'Ação', field: 'options', sortable: true,
  },

];

export default defineComponent({

  setup() {
    const $q = useQuasar();

    const loading = ref(false);

    const {
      list, post, update, remove, getById,
    } = useApi();
    const rows = ref([]);
    const optionsAproach = ref(null);
    const optionsTopic = ref(null);

    const showAddApproach = ref(false);
    const formData = reactive({
      id: null,
      title: '',
      definition: '',
      diagnosis: '',
      complentary: '',
      topic_id: null,
      type_approach_id: null,
    });
    const getLists = async () => {
      const auxAproach = await list('type_approach');
      const auxTopic = await list('topic');
      optionsAproach.value = auxAproach.map((item) => ({
        label: item.type_approach,
        value: item.id,
      }));
      optionsTopic.value = auxTopic.map((item) => ({
        label: item.name,
        value: item.id,
      }));
    };
    const cat = [];
    const getAproaches = async () => {
      try {
        loading.value = true;
        const aux = await list('approach');

        rows.value = aux.map((item) => ({
          id: item.id,
          title: item.title,
          definition: item.definition,
          diagnosis: item.diagnosis,
          complentary: item.complentary,
          type_approach_id: item.type_approach_id,
          topic_id: item.topic_id,
          created_at: item.created_at,
          categoria: item.categoria,
        }));

        loading.value = false;
      } catch (error) {
        loading.value = false;
        alert(error);
      }
    };

    const deleteItem = async (id) => {
      await remove('favorite_approach_user', id);
      await remove('approach', id);
      getAproaches();
    };

    onMounted(

      () => {
        getAproaches();
        getLists();
      },

    );

    const newDialog = async (data) => {
      if (data) {
        loading.value = true;
        Object.keys(data).forEach((key) => {
          formData[key] = data[key];
        });

        const result = await getById('type_approach', data.type_approach_id);
        const resultTopic = await getById('topic', data.topic_id);

        loading.value = true;

        formData.type_approach_id = {
          label: result.type_approach,
          value: result.id,
        };

        formData.topic_id = {
          label: resultTopic.name,
          value: resultTopic.id,
        };
      } else {
        formData.title = '';
        formData.definition = '';
        formData.diagnosis = '';
        formData.complentary = '';
        formData.topic_id = null;
        formData.type_approach_id = null;
      }
      showAddApproach.value = true;
    };

    const saveItem = async () => {
      try {
        showAddApproach.value = false;
        loading.value = true;
        if (!formData.id) {
          delete formData.id;
          formData.topic_id = formData.topic_id.value;
          formData.type_approach_id = formData.type_approach_id.value;

          await post('approach', formData);
        } else {
          formData.topic_id = formData.topic_id.value;
          formData.type_approach_id = formData.type_approach_id.value;
          await update('approach', formData);
        }
        getAproaches();
        loading.value = false;
      } catch (error) {
        alert(error);
      }
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
      newDialog,
      showAddApproach,
      formData,
      optionsAproach,
      optionsTopic,
      saveItem,
      deleteItem,
      confirmDelete,
      columns,
      rows,
      loading,
      getAproaches,
    };
  },
});
</script>

<style>

</style>

<!--
<template>
  <div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div>
        <h5 class="col-12 title" style="margin: 20px 0;">Abordagem</h5>
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

          >
          </q-btn>
        </div>
      </div>
    </div>
    <div class="col q-mt-md">
      <q-list bordered class="rounded-borders"
        style="min-width: 160px; width:100%;">
          <q-item-label header><strong>Lista de abordagens</strong></q-item-label>
            <q-separator/>
            <div
              v-for="(approach,index) in approaches"
              :key="index"
            >
              <approach-list-item
                :key="approach.id"
                :approach="approach"
              />
              <q-separator/>
            </div>
        </q-list>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[48, 48]">
      <q-btn
        fab
        icon="add"
        round
        color="primary"
        size="lg"
        @click="showAddApproach = true"
      />
    </q-page-sticky>

    <q-dialog v-model="showAddApproach" persistent>
      <add-approach />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import ApproachListItem from '../../../components/approach/ApproachListItem.vue';
import AddApproach from '../../../components/approach/AddApproach.vue';

export default defineComponent({
  name: 'ApproachesListPage',
  components: {
    ApproachListItem,
    AddApproach,
  },
  setup(){
    const showAddApproach = ref(false)
    const loading = ref(false)
    const formData = reactive({
      title: "",
      definition: "",
      diagnosis: "",
      complentary: "",
      topic_id: null,
      type_approach: null
    })

    const newDialog = ()=> {
      if(data) {
        Object.keys(data).forEach(key => {
          formData[key]= data[key]
        })

      } else {
        formData.title= ""
      formData.definition= ""
      formData.diagnosis= ""
      formData.complentary= ""
      formData.topic_id= null
      formData.type_approach= null
      }
      showAddApproach.value=true
    }

    return {
      newDialog,
      showAddApproach,
      loading
    }
  },
  methods: {
    ...mapActions('approach', ['getApproaches']),
  },
  mounted() {
    this.getApproaches();
  },
  computed: {
    ...mapGetters('approach', ['approaches']),
  },
});
</script>

<style lang="sass" scoped>
  .q-header
    background-color: #0053ab
  .explore
    width: 80vw
</style>
-->
