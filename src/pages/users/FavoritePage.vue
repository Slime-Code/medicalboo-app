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
          <ApproachButtom v-for="(option, index) in top" :title="option" :key="index"/>
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
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import {
  showErrorNotification,
} from 'src/functions/functionShowNotifications';
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

    const { list } = useApi();
    const { getById } = useApi();

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
        const i = ref(0);
        for (let index = 0; index < topic.value.length; index++) {
          if (user.value.id !== text.value[i.value]) {
            topic.value.splice(index, 1);
            --index;
          } i.value++;
        }
        topic.value.forEach(async (element) => {
          top.value.push(await getById('approach', element));
        });
      } catch (error) {
        showErrorNotification(JSON.stringify(error));
      }
    };

    return {
      top,
      loading,
      listTopics,
      text: ref(''),
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
