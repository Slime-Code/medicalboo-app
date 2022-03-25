<template>
    <q-page class="flex flex-center">
      <div class="column explore">
        <div class="col">
          <q-input
            outlined
            rounded
            bottom-slots
            v-model="text"
            label="Pesquise aqui um tópico"
            dense>

            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>

          </q-input>
        </div>
        <div class="col">
        <hr>
        <br>
          <ApproachButtom v-for="(topic, index) in topics"
          :title="topic"
          :key="index"
          :accessCap="false"
          color="green"
          icon="time"/>
        </div><br><br>
        <q-spinner
          v-if="loading"
          class="absolute-center"
          size="xl"
          color="primary"
        />
      </div>
    </q-page>
</template>

<script>
import { Notify } from 'quasar';
import { defineComponent, ref } from 'vue';
import ApproachButtom from '../../components/ApproachButtom.vue';
import useApi from '../../composebles/useApi';

export default defineComponent({
  name: 'AccessoPorCapituloPage',
  components: {
    ApproachButtom,
  },
  setup() {
    const { list } = useApi();

    const topics = ref([]);

    const loading = ref(true);

    const listTopics = async () => {
      try {
        loading.value = true;
        topics.value = await list('approach');
        // topics.value = aux.map((elem) => elem.title);
        loading.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    return {
      loading,
      listTopics,
      text: ref(''),
      topics,
      slide: ref('style'),
    };
  },
  mounted() {
    this.listTopics();
  },
});
</script>

<style lang="sass" scoped>
  .explore
    width: 90vw
</style>
