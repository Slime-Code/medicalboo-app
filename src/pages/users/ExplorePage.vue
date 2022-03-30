<template>
  <div class="q-pa-xs">
    <q-table
      :rows="rows"
      :columns="columns"
      :filter="filter"
      no-data-label="Nenhuma abordagem encontrada"
      no-results-label="Nenhuma Resultado encontrada"
      color="blue"
      row-key="title"
      hide-header
      @row-click="go"
      class="col-md full-width"
    >
      <template v-slot:top-right>
        <div class="column explore">
            <q-input
              placeholder="Search"
              outlined
              rounded
              bottom-slots
              v-model="filter"
              label="Pesquise aqui um tópico"
              dense
            >
              <template v-slot:append>
                <q-icon v-if="filter !== ''" name="close"
                class="cursor-pointer" />
                <q-icon name="search" />
              </template>
            </q-input>
        </div>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span>
            ... {{ message }}
          </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import {
  showErrorNotification,
} from 'src/functions/functionShowNotifications';
import { useRouter } from 'vue-router';
import useApi from '../../composebles/useApi';

export default {
  setup() {
    const rows = ref([]);
    const { list } = useApi();

    const router = useRouter();

    const loading = ref(true);

    const go = async (evt, row) => {
      router.push(`/approach-detail/${row.id}`);
    };

    const listTopics = async () => {
      try {
        loading.value = true;
        const aux = await list('approach');
        rows.value = aux;
        // rows.value.sort();
        loading.value = false;
      } catch (error) {
        showErrorNotification(`verifique antes a conecção de rede... especificação do Erro: ${JSON.stringify(error)}`);
      }
    };
    return {
      listTopics,
      filter: ref(''),
      rows,
      loading,
      go,
      explore: 'explore',

      columns: [
        {
          name: 'title',
          required: true,
          align: 'left',
          field: (row) => row.title,
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    this.listTopics();
  },
};
</script>
