<template>
    <q-page class="flex flex-center">
      <div class="column explore">
        <div class="col">
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
        <hr>
        <br>
          <ApproachButtom v-for="(t, index) in topic" :title="t" :key="index"/>
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
/* eslint-disable no-plusplus */
import { Notify } from 'quasar';
import { defineComponent, ref } from 'vue';
import ApproachButtom from '../../components/ApproachButtom.vue';
import useApi from '../../composebles/useApi';
import useAuthUser from '../../composebles/useAuthUser';

export default defineComponent({
  name: 'ProfilePage',
  components: {
    ApproachButtom,
  },
  setup() {
    const { user } = useAuthUser();

    const loading = ref(true);

    const aux1 = ref(user);

    const { id } = aux1.value;

    const { list } = useApi();
    const { getById } = useApi();

    const topics = ref([]);
    const topic = ref([]);
    const top = ref([]);
    const text = ref([]);

    const listTopics = async () => {
      try {
        loading.value = true;
        const aux = await list('favorite_approach_user');
        text.value = aux.map((elem) => elem.user_id);
        topic.value = aux.map((elem) => elem.approach_id);
        loading.value = false;
        for (let index = 0; index < topic.value.length; index++) {
          if (id !== text[index].value) {
            topic[index] = '';
          }
        }
        for (let index = 0; index < topic.value.length; index++) {
          // eslint-disable-next-line no-await-in-loop
          top.value = await getById('approach', topic[index]);
        }
        topics.value = top.value.map((elem) => elem.title);
      } catch (error) {
        Notify(error);
      }
    };

    return {
      loading,
      listTopics,
      text: ref(''),
      topic,
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
