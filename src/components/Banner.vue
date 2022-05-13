<template>
  <q-card flat bordered square>
    <q-card-section class="text-h6"> Outras versões Medicalbook </q-card-section>
    <q-card-section class="row q-col-gutter-xs">
      <q-banner
        v-for="(n, index) in data"
        :key="index"
        rounded
        class="col-sm-12 col-xs-12 col-md-6 col-lg-4"
      >
        <q-item clickable :to="{ name: n.name }">
          <q-item-section>
            <q-img class="fit" :src="n.img_url" />
          </q-item-section>
        </q-item>
      </q-banner>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";

import useApi from "../composebles/useApi";

export default defineComponent({
  setup() {
    const { list } = useApi();

    const data = ref([]);

    onMounted(async () => {
      data.value = await list("img");
    });

    return {
      data,
    };
  },
});
</script>
