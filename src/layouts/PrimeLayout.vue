<template>
  <q-layout class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg">
    <div class="flex flex-center">
      <q-header elevated class="" style="background: #004A9D" height-hint="90">
        <q-toolbar class="q-py-xl q-px-md">
          <img
            src="img/premi.png"
            style="width: 300%; height: 150px"
          >

          <template v-slot:action>
          </template>
        </q-toolbar>
    </q-header>

    </div>
    <q-page-container style="padding-top: 0px; background-color: white">
      <router-view />
    </q-page-container>

    <div class="row login-btn-area absolute-bottom flex flex-center
      col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg">
      <div class="flex flex-center">
        <p style="color: #1C9BB2;"><strong>Clareza Quando Você Mais Precisa</strong></p>
        <p class="text-center">Fornecemos as evidências funadamentada
          na esperência clínica dos médicos mais notáveis do mundo</p>
          <q-btn rounded label="Expermente 7 Dias Grates" :to="{name: 'home'}"
            style="background-color: #49d166; color: #FFF;" />
        <q-btn style="margin-top: 10px" rounded unelevated dense
        label="agora Não" :to="{name: 'home'}"/>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { Notify } from 'quasar';
import { defineComponent, ref, onMounted } from 'vue';
import useApi from '../composebles/useApi';
import useAuthUser from '../composebles/useAuthUser';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const loading = ref(true);

    const { user } = useAuthUser();

    const { list } = useApi();

    const { getById } = useApi();

    const topics = ref(['covid-19']);

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux = await list('access_topic_user');
        const aux1 = ['covid-19'];
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < aux.length; index++) {
          if (aux.user_id === user.id) {
            aux1[index] = getById('topic', aux.id);
          }
        }
        topics.value = aux1.map((elem) => elem.name);

        loading.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });
    return {
      icon: ref(false),
      tab: ref('inicio'),
      topics,
    };
  },
});
</script>

<style lang="sass" scoped>
  .q-tabs
    color: #B2BBBB
    height: 80px
  .q-tab
    margin: 0
    padding: 0
  .q-tab--active
    color: #1A4B9A
  .q-tab__content
      flex-direction: column
      flex-wrap: nowrap
  .q-tab__content
    .q-tab__label
      font-size: .6em
  .q-header
    width: 100vw
    height: 229px
    z-index: 1
    background: url('../../public/img/BG-1.png') 0% 5% no-repeat padding-box
    background-color: #0053ab
    opacity: 1
  .q-page-container
    position: absolute /**Por enquanto */
    width: 100%
    height: auto
    top: 152px
    border-radius: 20px 0 0 0
    z-index: 100
    overflow: hidden
  .pic
    position: absolute
    top: 35px
    left: 30px
</style>

<style lang="scss" scoped>
  .q-btn{
    min-width: 80%;
    border: 0.5px solid #49d166;
    padding: 5px 30px;
    font-weight: normal;
    .q-btn__content {
      padding: 10px;
    }
  }
</style>
