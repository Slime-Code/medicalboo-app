<template>
  <q-page class="q-pa-md constrain">
    <q-tabs
      v-model="tab"
      inline-label
      mobile-arrows
      active-color="primary"
      outline
      indicator-color="transparent"
    >
      <q-tab
        v-for="(category, index) in categorys"
        :key="index"
        :name="category"
        :label="category.name"
        @click="getTopicByCategory(category.id)"
      />
      <div>
        <q-spinner v-if="loadingCategory" color="primary" size="3em" />
      </div>
    </q-tabs>
    <q-separator v-if="!loadingTopic" />

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
        :name="category"
      >

        <q-card
          v-for="(topic, index) in topics"
          :key="index"
          style="background-color: #f6f6f6"
          flat
          bordered
          class="q-my-sm col-sm-12 col-xs-12 col-md-6 col-lg-4"
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
        <span v-if="!topics.length && !loadingTopic" class="text-center text-body1 ">
           Nenhum tópico para esta categória
        </span>
      </q-tab-panel>
    </q-tab-panels>

    <q-space vertical>

    </q-space>
 <q-toolbar-title class="text-caption q-pa-sm">

        Outras versões Medicalbook

      </q-toolbar-title>
<<<<<<< HEAD
    <q-card flat bordered v-if="!loadingTopic" class="col q-mb-md row justify-center items-start">

=======
    <q-card flat bordered v-if="!loadingTopic" class=" q-mb-md row justify-center items-start">
     
>>>>>>> 4e649f28a28b85ba588b150d2f7731d655e95b48
        <q-banner rounded class="col-sm-12 col-xs-12 col-md-6 col-lg-4">
          <template v-slot:avatar>
            <q-btn flat :to="{ name: 'prime' }">
              <img class="full-width" src="img/banner-premium.png" style="height: 100%" />
            </q-btn>
          </template>

          <template v-slot:action> </template>
        </q-banner>
        <q-banner class="col-sm-12 col-xs-12 col-md-6 col-lg-4" rounded>
          <template v-slot:avatar>
            <q-btn flat :to="{ name: 'accesso-por-capitulo' }">
              <img src="img/Grátis@2x.png" style="width: 100%; height: 100%" />
            </q-btn>
          </template>

          <template v-slot:action> </template>
        </q-banner>
        <q-banner class="col-sm-12 col-xs-12 col-md-6 col-lg-4" rounded>
          <template v-slot:avatar>
            <q-btn flat :to="{ name: 'accesso-por-capitulo' }">
              <img src="img/Grátis-2.png" style="width: 100%; height: 100%" />
            </q-btn>
          </template>

          <template v-slot:action> </template>
        </q-banner>
    </q-card>
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
import { showErrorNotification } from 'src/functions/functionShowNotifications';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
// import TopicButtom from '../../components/TopicButtom.vue';
/* eslint-disable no-alert */
import useApi from '../../composebles/useApi';

export default defineComponent({
  name: 'MainPage',
  setup() {
    const { list, getByField } = useApi();

    const router = useRouter();

    const topics = ref([]);

    const categorys = ref([]);

    const topicos = ref([]);

    const tab = ref('');

    const loadingCategory = ref(true);

    const loadingTopic = ref(true);

    const todos = ref([[]]);

    const getTopicByCategory = async (id) => {
      loadingTopic.value = true;

      topics.value = await getByField('topic', 'categoria_id', id);
      loadingTopic.value = false;
    };

    const listTopics = async () => {
      try {
        loadingCategory.value = true;
        categorys.value = await list('categoria');
        categorys.value.sort();
        loadingCategory.value = false;
        // eslint-disable-next-line prefer-destructuring
        tab.value = categorys.value[0];

        await getTopicByCategory(tab.value.id);
      } catch (error) {
        showErrorNotification(`A Resposta do banco Não Foi Bem Sucedida Pelo Seguinte Erro: ${JSON.stringify(error)}`);
      }
    };

    const go = async (id) => {
      router.push(`/approach/${id}`);
    };

    const topicAcessado = ref({
      chave: null,
      valo: null,
    });
    const foi = async () => {
      console.log(topicAcessado.value);
    };
    return {
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

      caption: ref(''),

      icon: 'img:img/feto.png',

      color_icon: 'teal',
    };
  },
  /*
  methods: {
    ...mapActions('approach', ['getApproaches']),
  },
  */
  mounted() {
    this.listTopics();
  },
});
</script>

<style lang="sass" scoped>
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
