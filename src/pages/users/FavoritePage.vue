<template>
  <q-page padding>
    <div class="column">
      <div class="col">
        <div class="text-h5">Meus conteúdos favoritos</div>

        <q-list
          class="row justify-center q-pl-sm q-gutter-sm q-mt-lg"
          :class="{ 'no-wrap': $q.screen.width > 599 }"
        >
          <ApproachButtom
            class="col-xs-12 col-sm-12 col-md-6 col-xl-3 col-lg-6"
            v-for="(option, index) in top"
            :title="option"
            :key="index"
          />
        </q-list>
      </div>
      <br /><br />
      <q-spinner v-if="loading" class="absolute-center" size="xl" color="primary" />
    </div>
  </q-page>
</template>

<script>
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import { showErrorNotification } from "src/functions/functionShowNotifications";
import { defineComponent, ref } from "vue";
import ApproachButtom from "../../components/ApproachButtom.vue";
import useApi from "../../composebles/useApi";
import useAuthUser from "../../composebles/useAuthUser";

export default defineComponent({
  name: "ProfilePage",
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
        const aux = await list("favorite_approach_user");
        text.value = aux.map((elem) => elem.user_id);
        topic.value = aux.map((elem) => elem.approach_id);
        const i = ref(0);
        for (let index = 0; index < topic.value.length; index++) {
          if (user.value.id !== text.value[i.value]) {
            topic.value.splice(index, 1);
            --index;
          }
          i.value++;
        }
        topic.value.forEach(async (element) => {
          top.value.push(await getById("approach", element));
        });
      } catch (error) {
        showErrorNotification(JSON.stringify(error.message));
      } finally {
        loading.value = false;
      }
    };

    return {
      top,
      loading,
      listTopics,
      text: ref(""),
      slide: ref("style"),
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
