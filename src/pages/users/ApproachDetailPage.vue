<template>
  <q-page class="column">
    <q-banner rounded class="bg-grey-3 q-mb-md">
      <div class="text-h4 col">
        {{ approach.title }}
      </div>
      <q-rating
        class="col q-ma-sm"
        size="1.9em"
        color="amber"
        icon="star_border"
        icon-selected="star"
      />

      <div class="q-ml-sm text-subtitle22 col">
        Atualizado em
        {{
          new Date(approach.created_at).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </div>
      <template v-slot:action>
        <q-btn color="primary" label="Assinar" />
      </template>
    </q-banner>

    <q-list  :class="{
      'q-mx-xl': $q.screen.width > 599
    }" flat bordered v-for="content in contents" :key="content.id">
      <q-expansion-item
        :label="content.title"
        header-class="bg-grey-3 text-body1 text-bold"
      >
        <q-card>
          <q-card-section class="text-justify" v-html="content.content"> 
            
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import useApi from "../../composebles/useApi";

import { useRoute } from "vue-router";
// import ApproachButtom from '../../components/ApproachButtom.vue';

export default defineComponent({
  name: "ProfilePage",
  setup() {
    const { getById, getByField } = useApi();

    const route = useRoute();
    const approach = ref({
      title: "",
      created_at: "",
    });

    const contents = ref([]);
    onMounted(async () => {
      approach.value = await getById("approach", route.params.id);
      contents.value = await getByField(
        "approach_contents",
        "id_approach",
        route.params.id
      );
    });

    return {
      approach,
      contents,
    };
  },
});
</script>

<style lang="sass" scoped>
.explore
  width: 90vw
</style>
