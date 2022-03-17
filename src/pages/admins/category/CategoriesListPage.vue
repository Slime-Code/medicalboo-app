<template>
<div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div class="row">
        <h5 class="col-12 title" style="margin: 20px 0;">Categorias</h5>
        <div class="col-12" style="margin: auto 0;">
          <q-btn size="12px">Adicionar</q-btn>
        </div>
      </div>
    </div>
    <div class="col q-mt-md">
      <q-list bordered class="rounded-borders"
        style="min-width: 160px; width:100%;">
          <q-item-label header><strong>Lista de categorias</strong></q-item-label>

            <q-separator/>

          <q-item v-for="(topic, index) in topics" :key="index">
            <q-item-section>
              <q-item-label class="q-mt-sm">{{ topic }}</q-item-label>
            </q-item-section>

            <q-item-section top side class="medium-screen-only">
              <div class="text-grey-8 q-gutter-xs">
                <q-btn size="12px" flat dense round icon="edit" @click="varDialogPassword = true" />
                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
              </div>
            </q-item-section>

            <q-item-section top side class="non-medium-screen-only">
              <q-btn-dropdown flat round dense icon="more_vert">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Ver</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-btn >
                    <q-item clickable v-close-popup >
                      <q-item-section>
                        <q-item-label>Editar</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-btn>

                  <q-item clickable v-close-popup @click="onItemClick">
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
    <q-dialog v-model="varDialogPassword" persistent>
      <q-card style="width: 500px; max-width: 70vw; height: 500px; max-height: 70vh;">
          <q-card-section class="absolute-center"
            style="width: 450px; max-width: 70vw; height: auto; max-height: auto;">
            <EditarCategoria :title="topics" :aux='aux'/>
          </q-card-section>
        </q-card>
      </q-dialog>
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

import { Notify } from 'quasar';
import { defineComponent, ref, onMounted } from 'vue';
import useApi from '../../../composebles/useApi';
import EditarCategoria from './EditarCategoria.vue';

export default defineComponent({
  name: 'CategoriesListPage',

  components: {
    EditarCategoria,
  },

  setup() {
    const loading = ref(true);

    const { list } = useApi();

    const topics = ref([]);
    const aux = ref([]);

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        aux.value = await list('categoria');
        topics.value = aux.value.map((elem) => elem.name);
        loading.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });

    const onItemClick = async () => {

    };
    return {
      aux,
      onItemClick,
      columns,
      rows,
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
