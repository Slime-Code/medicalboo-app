<template>
  <q-page padding class="constrain-2">
    <div class="text-h5 q-pa-sm">Explorar</div>
    <q-input
      class="full-width"
      outlined
      rounded
      dense
      debounce="300"
      v-model="filter"
      placeholder="Pesquise uma abordagem"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-table
      :rows="rows"
      :columns="columns"
      flat
      bordered
      :filter="filter"
      no-data-label="Nenhuma abordagem encontrada"
      no-results-label="Nenhuma Resultado encontrada"
      row-key="id"
      hide-header
      hide-bottom
      grid
      @row-click="go"
      separator="cell"
      :pagination="{
        rowsPerPage: 40
      }"
    >
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> ... {{ message }} </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>

    <q-inner-loading :showing="loading" color="primary" />
  </q-page>
</template>

<script>
import { ref } from "vue";
import { showErrorNotification } from "src/functions/functionShowNotifications";
import { useRouter } from "vue-router";
import useApi from "../../composebles/useApi";

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
        const aux = await list("approach");
        rows.value = aux;
        // rows.value.sort();
        loading.value = false;
      } catch (error) {
        showErrorNotification(
          `verifique antes a conecção de rede... especificação do Erro: ${JSON.stringify(
            error
          )}`
        );
      }
    };
    return {
      listTopics,
      filter: ref(""),
      rows,
      loading,
      go,
      explore: "explore",

      columns: [
        {
          name: "title",
          required: true,
          align: "left",
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
