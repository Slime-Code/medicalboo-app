<template>
  <q-page padding class="constrain">
    <div class="column q-pa-sm q-gutter-y-md">
      <div class="text-h4">{{ topic.name }}</div>

      <div>
        <div class="text-h6 q-my-sm" v-for="type in typeApproches" :key="type.id">
          <div
            v-if="approachs.filter((ap) => type.id === ap.type_approach_id).length > 0"
          >
            {{ type.type_approach }}

            <q-list
              class="row justify-start q-gutter-sm q-mt-lg"
              :class="{ 'no-wrap': $q.screen.width > 599 }"
            >
              <div
                class="col-xs-12 col-sm-12 col-md-6 col-xl-3 col-lg-6"
                v-for="approach in approachs.filter(
                  (ap) => type.id === ap.type_approach_id
                )"
                :key="approach.id"
              >
                <ApproachButtom
                  class="rounded-borders full-width"
                  outline
                  align="left"
                  color="grey-8"
                  padding="md"
                  no-caps
                  :title="approach"
                  @click="go(approach.id)"
                />
              </div>
            </q-list>
          </div>
        </div>
      </div>
    </div>
    <q-spinner v-if="loading" size="xl" color="primary" />
  </q-page>
</template>

<script>
import { showErrorNotification } from "src/functions/functionShowNotifications";
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ApproachButtom from "../../components/ApproachButtom.vue";
import useApi from "../../composebles/useApi";
import useAuthUser from "../../composebles/useAuthUser";

export default defineComponent({
  name: "ProfilePage",
  components: {
    ApproachButtom,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const loading = ref(true);

    const loading1 = ref(true);

    const { list, getById, post, getByField } = useApi();
    const { user } = useAuthUser();

    const approachs = ref([]);

    const typeApproches = ref([]);

    const getTypeApproaches = async () => {
      try {
        typeApproches.value = await list("type_approach");
      } catch (error) {
        alert(error.message);
      }
    };

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        approachs.value = await getByField("approach", "topic_id", route.params.id);
        loading.value = false;
        loading1.value = false;
      } catch (error) {
        showErrorNotification(error);
      }
    };

    // ------------- Adicionar nos Mais Acessados---------------------------
    const addMoreAccesse = async () => {
      try {
        const data1 = {
          id: null,
          topic_id: null,
          access_date: null,
          times_access: 7,
          user_id: null,
        };
        data1.topic_id = route.params.id;
        data1.user_id = user.value.id;
        data1.id = route.params.id;
        data1.access_date = new Date();
        const data = await getById("access_topic_user", route.params.id);
        if (!data) {
          post("access_topic_user", data1);
        }
      } catch (error) {
        showErrorNotification(error);
      }
    };

    const go = async (id) => {
      router.push(`/approach-detail/${id}`);
    };

    const topic = ref({ name: "" });

    onMounted(async () => {
      topic.value = await getById("topic", route.params.id);
      await listTopicsAproachs();

      getTypeApproaches();

      await addMoreAccesse();
    });

    return {
      go,
      topic,
      loading,
      typeApproches,
      loading1,
      text: ref(""),
      approachs,
      slide: ref("style"),
      rota: "approach",
    };
  },
});
</script>

<style lang="sass" scoped>
.explore
  width: 90vw
</style>
