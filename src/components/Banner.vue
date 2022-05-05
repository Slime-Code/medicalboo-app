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
            <img class="fit" :src="n.path"/>
          </q-item-section>
        </q-item>
      </q-banner>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const data = ref([
      {
        name: "prime",
        path: "img/banner-premium.png",
      },
      {
        name: "accesso-por-capitulo",
        path: "img/Grátis@2x.png",
      },
      {
        name: "accesso-por-capitulo",
        path: "img/Grátis-2@2x.png",
      },
    ]);
    return {
      data,
    };
  },
});
</script>
