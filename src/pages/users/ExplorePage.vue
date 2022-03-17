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
          color="green"
          icon="time"/>
        </div>
      </div>
    </q-page>
</template>

<script>
import { Notify } from 'quasar';
import { defineComponent, ref } from 'vue';
import ApproachButtom from '../../components/ApproachButtom.vue';
import useApi from '../../composebles/useApi';

export default defineComponent({
  name: 'ProfilePage',
  components: {
    ApproachButtom,
  },
  setup() {
    const { list } = useApi();

    const topics = ref([]);

    const listTopics = async () => {
      try {
        const aux = await list('approach');
        topics.value = aux.map((elem) => elem.title);
      } catch (error) {
        Notify(error);
      }
    };
    return {
      listTopics,
      text: ref(''),
      topics,
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?',
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
