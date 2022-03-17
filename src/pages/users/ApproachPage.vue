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
          <ApproachButtom v-for="(topic, index) in topics" :title="topic" :key="index"/>
          <br>
          <strong style="color: blue;">Abordagem Terapeutica</strong><hr>
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

export default defineComponent({
  name: 'ProfilePage',
  components: {
    ApproachButtom,
  },
  setup() {
    const loading = ref(true);

    const { list } = useApi();

    const topics = ref([]);

    const types = ref([]);

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux = await list('approach');
        // const aux1 = await list('type_approach');
        topics.value = aux.map((elem) => elem.title);
        types.value = aux.map((elem) => elem.name);
        loading.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });
    return {
      loading,
      text: ref(''),
      topics,
      types,
      // topics: ['Covid-19', 'Malaria', 'Paludismo', 'Diabetes'],
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?',
    };
  },
});
</script>

<style lang="sass" scoped>
  .explore
    width: 90vw
</style>
