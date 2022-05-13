<template>
  <q-page class="q-pa-md constrain-2">
    <q-card flat>
      <q-card-section class="q-pa-sm">
        <q-tabs
          class="text-grey-6"
          v-model="tab"
          inline-label
          active-color="white"
          active-bg-color="primary"
          dense
          no-caps
          indicator-color="transparent"
        >
          <div v-for="(category, index) in categorys" :key="index">
            <q-tab
              class="custom-border q-mx-xs"
              :name="category.name"
              :label="category.name"
              @click="getTopicByCategory(category.id)"
              v-if="category.premium === false || (category.premium && perfil)"
            />
          </div>

          <div>
            <q-spinner v-if="loadingCategory" color="primary" size="3em" />
          </div>
        </q-tabs>
      </q-card-section>
    </q-card>

    <div class="column justify-around" style="height: 100%">
      <q-tab-panels
        class="col"
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel
          class="row justify-center q-gutter-sm items-center"
          v-for="(category, index) in categorys"
          :key="index"
          :name="category.name"
        >
          <template v-for="(topic, index) in topics" :key="index">
            <q-card
              style="background-color: #f6f6f6"
              flat
              bordered
              v-if="topic.premium === false || (topic.premium && perfil)"
              class="q-my-sm col-sm-12 col-xs-12 col-md-4 col-lg-3"
            >
              <q-item clickable v-ripple @click="go(topic.id)">
                <q-item-section side>
                  <q-avatar :color="color_icon" text-color="white" :icon="icon" />
                </q-item-section>

                <q-item-section>
                  {{ topic.name }}
                </q-item-section>
              </q-item>
            </q-card>
          </template>

          <span v-if="!topics.length && !loadingTopic" class="text-center text-body1">
            Nenhum tópico para esta categória
          </span>
        </q-tab-panel>
      </q-tab-panels>

      <div v-if="!loadingTopic">
        <Banner />
      </div>
    </div>

    <q-inner-loading
      :showing="loadingTopic"
      label="Carregando tópicos"
      label-class="text-primary"
      color="primary"
      label-style="font-size: 1.1em"
    />
  </q-page>
</template>

<script>
import { post } from "@supabase/gotrue-js/dist/module/lib/fetch";
import useAuthUser from "src/composebles/useAuthUser";
import { showErrorNotification } from "src/functions/functionShowNotifications";
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import Banner from "../../components/Banner.vue";

// import TopicButtom from '../../components/TopicButtom.vue';
/* eslint-disable no-alert */
import useApi from "../../composebles/useApi";
export default defineComponent({
  name: "MainPage",
  components: { Banner },
  setup() {
    const { list, getByField, update } = useApi();
    const { user } = useAuthUser();

    const router = useRouter();

    const topics = ref([]);

    const categorys = ref([]);

    const topicos = ref([]);

    const tab = ref("");

    const loadingCategory = ref(false);

    const loadingTopic = ref(false);

    const todos = ref([[]]);

    const getTopicByCategory = async (id) => {
      try {
        loadingTopic.value = true;

        topics.value = await getByField("topic", "categoria_id", id);
      } catch (error) {
        alert(error.message);
      } finally {
        loadingTopic.value = false;
      }
    };

    const listTopics = async () => {
      try {
        loadingTopic.value = true;
        categorys.value = await list("categoria");

        categorys.value.sort();
        loadingCategory.value = false;
        // // eslint-disable-next-line prefer-destructuring
        tab.value = categorys.value.find((c) => c.premium === false).name;

        await getTopicByCategory(categorys.value[0].id);
      } catch (error) {
        showErrorNotification(
          `A Resposta do banco Não Foi Bem Sucedida Pelo Seguinte Erro: ${JSON.stringify(
            error
          )}`
        );
      } finally {
        loadingTopic.value = false;
      }
    };

    const go = async (id) => {
      router.push(`/approach/${id}`);
    };

    const topicAcessado = ref({
      chave: null,
      valo: null,
    });
    const perfil = ref();

    const foi = async () => {
      try {
        const pegarPerfil = await getByField("perfil", "user_id", user.value.id)
        const prazoPremium = await getByField('prazo_premium', 'user_id', user.value.id);
        if (!((!prazoPremium[0].expirou && ((new Date()) - (prazoPremium[0].created_at)) > prazoPremium[0].dias) || prazoPremium[0].dias === 0)) {
          prazoPremium[0].expirou = true;
          prazoPremium[0].dias = 0;
          pegarPerfil[0].premium = false;
          await update('perfil', pegarPerfil[0]);
          await update('prazo_premium', prazoPremium[0]);
        }
        perfil.value = pegarPerfil[0].premium;        
      } catch (error) {
        alert(error.message)
      }
      
    };

    onMounted(async () => {
      foi();
      listTopics();
    });
    return {
      perfil,
      go,
      getTopicByCategory,
      todos,
      foi,
      topicAcessado,
      loadingTopic,
      loadingCategory,
      listTopics,
      tab,
      topics,
      topicos,
      categorys,

      caption: ref(""),

      icon: "img:img/feto.png",

      color_icon: "teal",
    };
  },
});
</script>

<style lang="sass" scoped>
.custom-border
  border-style: solid
  border-width: 1px
  border-radius: 4px
  border-color: $primary
.category
  width: 90vw
.category .q-tabs__arrows
  color: #f4f4f4
  background: #f4f4f4
.category .q-tab
  color: #c6cfe1
  margin: 0 10px
  border: 2px solid #c6cfe1
  border-radius: 4px
.category .q-tab--active
  background: #0053ab
  color: white
  border: none

  .q-link
  text-decoration: none
  color: black
  border: 0.5px solid #f2f2f2
.q-link:hover
  border: 0.5px solid #e0e0e0
</style>
