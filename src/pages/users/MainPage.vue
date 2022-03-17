<template>
    <q-page class="flex flex-center ">
      <div class="column">
        <div class="col">
          <q-tabs
            v-model="tab"
            inline-label
            dense
            mobile-arrows
            class="category"
          >
            <q-tab
            v-for="(category, index) in categorys" :key="index"
            :name="category"
            :label="category"
            />
            <div class=" flex flex-center ">
              <q-spinner v-if="loadingCategory"
                color="primary"
                size="3em"
              />
            </div>
          </q-tabs>
        </div>

        <div class="col column col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg">
          <q-scroll-area style="height: 45vh; margin-top: 40px">
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              vertical
              transition-prev="jump-up"
              transition-next="jump-up"
            >

              <q-tab-panel v-for="(category, index) in categorys" :key="index" :name="category">

                <div class="text-h4 q-mb-md">
                  {{ category }}
                </div>
                  <div class="row">
                    <q-spinner-cube
                    class="absolute-center"
                      v-if="loadingTopic"
                      size="xl"
                      color="primary"
                    />
                    <div class="col-6" v-for="(topic, index) in topics" :key="index">
                      <a href="/approach"
                      class="q-link rounded-borders q-pa-md q-ma-md
                      cursor-pointer column justify-center bg-grey-1">
                        <div class="row no-wrap items-center">
                          <q-avatar
                            :color="color_icon"
                            text-color="white"
                            :icon="icon" />
                            <div class="col q-pl-lg">
                              <div class="text-uppercase">{{ topic }}</div>
                            <div class="text-weight-bold">{{ caption }}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-scroll-area>
        </div>
      </div>
    <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-50">
        <q-img src="img/banner-premium.png">
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-6">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-top text-center">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-6">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom-right text-subtitle2">
            Caption
          </div>
        </q-img>
      </div>

    </div>
  </div>
    </q-page>
</template>

<script>
import { Notify } from 'quasar';
import { defineComponent, ref } from 'vue';
// import { mapActions } from 'vuex';
// import TopicButtom from '../../components/TopicButtom.vue';
/* eslint-disable no-alert */
import useApi from '../../composebles/useApi';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const { list } = useApi();

    const topics = ref([]);

    const categorys = ref([]);

    const loadingCategory = ref(true);

    const loadingTopic = ref(true);

    const listTopics = async () => {
      try {
        // alert(JSON.stringify(topics));
        loadingCategory.value = true;
        const aux1 = await list('categoria');
        categorys.value = aux1.map((elem) => elem.name);
        loadingCategory.value = false;

        loadingTopic.value = true;
        const aux = await list('topic');
        topics.value = aux.map((elem) => elem.name);
        loadingTopic.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    return {
      loadingTopic,
      loadingCategory,
      listTopics,
      tab: ref('Geral'),
      topics,
      categorys,
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?',

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
