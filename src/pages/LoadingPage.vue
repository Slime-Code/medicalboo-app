<template>
    <div class="q-pa-md">
      <q-table
        class="col full-width"
        :grid="$q.screen.xs"
        :rows="rows"
        :filter="filter"
        hide-header
      >
        <template v-slot:top-right>
          <div class="column explore">
            <div class="col full-width">
              <q-input
                placeholder="Search"
                outlined
                rounded
                bottom-slots
                v-model="filter"
                label="Pesquise aqui um tópico"
                dense>
                <template v-slot:append>
                  <q-icon v-if="filter !== ''" name="close"
                  @click="filter = ''" class="cursor-pointer" />
                  <q-icon name="search" />
                </template>

              </q-input>
            </div>
          </div>
        </template>
        <template v-slot:body="props" class="col full-width">
          <a href="/">
            <q-tr :props="props">
            <q-td :props="rows">
              {{ props.name }}
            </q-td>
          </q-tr>
          </a>
        </template>
      </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';

const rows = [
  {
    name: 'Frozen Yogurt',
  },
  {
    name: 'Ice cream sandwich',
  },
  {
    name: 'Eclair',
    calories: 262,
  },
  {
    name: 'Cupcake',
  },
];

export default {
  setup() {
    return {
      filter: ref(''),
      rows,
    };
  },
};
</script>
