<template>
    <div class="q-pa-md">
      <q-table
        @row-click="go"
        class="col full-width"
        :grid="$q.screen.xs"
        :rows="rows"
        :filter="filter"
        visible-columns="['title:']"
        hide-header
        hide-bottom
        color="blue"
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
        <template v-slot:body="props" class="col full-width">
          <q-btn>
            <q-tr :props="props">
              <q-td :props="rows">
                <approach-detalhes-layout :rota='explore' :approach='this.rows' />
                <div class="tex-black-10" style="color: #1E1E1E">
                  {{ props }}
                </div>
              </q-td>
            </q-tr>
          </q-btn>
        </template>
      </q-table>
      <q-spinner
          v-if="loading"
          class="absolute-center"
          size="xl"
          color="primary"
      />
  </div>
</template>

<script>
/* eslint-disable no-plusplus */
import {
  showErrorNotification,
} from 'src/functions/functionShowNotifications';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useApi from '../../composebles/useApi';
import ApproachDetalhesLayout from './ApproachDetailPage.vue';

export default {
  name: 'ExplorePage',

  components: {
    ApproachDetalhesLayout,
  },

  setup() {
    const rows = ref([]);

    const { list } = useApi();

    const router = useRouter();

    const loading = ref(true);

    const go = async (evt, row) => {
      router.push(`approach-detail/${row.id}`);
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
    };
  },
  mounted() {
    this.listTopics();
  },
};
</script>
