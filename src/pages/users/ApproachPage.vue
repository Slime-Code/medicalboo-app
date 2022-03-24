<template>
    <q-page :loading='loading' class="flex flex-center">
      <div class="column explore">
        <div class="col">
          <br>
          <br>
          <q-input
            outlined
            rounded
            bottom-slots
            v-model="text"
            label="Pesquise o seu tópico favorito"
            dense>

            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>

          </q-input>
        </div>
        <div class="col">
          <br>
          <strong style="color: blue;">Abordagem Geral</strong><hr>
          <q-spinner
            class="flex flex-center"
            v-if="loading"
            size="xl"
            color="primary"
          />
         <ApproachButtom v-for="(topic, index) in topics" :title="topic" :key="index" :rota='rota'/>
          <br>
          <strong style="color: blue;">Abordagem Terapeutica</strong><hr>
            <q-spinner
              class="flex flex-center"
              v-if="loading1"
              size="xl"
              color="primary"
            />
          <ApproachButtom v-for="(topic, index) in topics" :title="topic" :key="index"/>
        </div>
      </div>
    </q-page>
</template>

<script>
import { Notify } from 'quasar';
import { defineComponent, ref, onMounted } from 'vue';
import ApproachButtom from '../../components/ApproachButtom.vue';
import useApi from '../../composebles/useApi';
// import ApproachDetalhesLayout from './ApproachDetailPage.vue';

export default defineComponent({
  name: 'ProfilePage',
  components: {
    ApproachButtom,
    // ApproachDetalhesLayout,
  },
  setup() {
    const loading = ref(true);

    const loading1 = ref(true);

    const { list } = useApi();

    const topics = ref([]);

    const types = ref([]);

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        loading1.value = true;
        const aux = await list('approach');
        // const aux1 = await list('type_approach');
        topics.value = aux.map((elem) => elem.title);
        loading.value = false;
        types.value = aux.map((elem) => elem.name);
        loading1.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });
    return {
      loading,
      loading1,
      text: ref(''),
      topics,
      types,
      // topics: ['Covid-19', 'Malaria', 'Paludismo', 'Diabetes'],
      slide: ref('style'),
      rota: 'approach',
    };
  },
});
</script>

<style lang="sass" scoped>
  .explore
    width: 90vw
</style>
