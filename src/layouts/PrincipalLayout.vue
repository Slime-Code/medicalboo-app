<template>
  <q-layout view="lHh lpr lFf">
     <q-header reveal elevated>
        <q-toolbar class="q-pa-md">
            <q-btn
              to="/profile"
              style="background: #FFFFFF; color: #1A4B9A"
              round icon="fas fa-user"
              size="20px">
              <q-badge class="pic" style="background: #49D16B" rounded>
                <q-icon dense name="eva-camera-outline" color="white"/>
              </q-badge>
            </q-btn>

          <q-toolbar-title>{{ user.user_metadata.name }}</q-toolbar-title>
          <q-space/>
           <q-btn
              no-caps
              unelevated
              rounded
              @click="icon = true"
              style="background: #FFFFFF; color: #1A4B9A">
              <div class="row">
                <div class="col-2">
                  <q-icon left name="widgets" />
                </div>
                <div class="col-10 large-screen-only">
                  <div>Mais acessados</div>
                </div>
               </div>
            </q-btn>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer
        style="background-color: #F6F6F6"
        bordered

      
      >
          <q-tabs
            v-model="tab"
            indicator-color="transparent"
            dense
            align="justify"
            class="constrain-2"
          >
          <q-route-tab
            to="/explore"
            dense no-caps
            name="explorar"
            icon="eva-search-outline"
            label="Explorar"/>
          <q-route-tab
            to="/favorite"
            dense no-caps
            name="favoritos"
            icon="eva-heart-outline"
            label="Favoritos" />
          <q-route-tab
            to="/home"
            dense no-caps
            name="inicio"
            icon="eva-home-outline"
            label="Inicio" />
          <q-route-tab
            to="/note"
            dense no-caps
            name="notas"
            icon="far fa-sticky-note"
            label="Notas" />
          <q-route-tab
            to="/profile"
            dense no-caps
            name="perfil"
            icon="far fa-user"
            label="Perfil" />
        </q-tabs>
    </q-footer>

    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Mais acessados</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup close-personal/>
        </q-card-section>

        <q-card-section>
          <div class="row">
            <div class="col-6" v-for="(topic, index) in topics" :key="index">
              <TopicButtom :title="topic"/>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import {
  showErrorNotification,
} from 'src/functions/functionShowNotifications';
import { defineComponent, ref, onMounted } from 'vue';
import TopicButtom from '../components/TopicButtom.vue';
import useApi from '../composebles/useApi';
import useAuthUser from '../composebles/useAuthUser';

export default defineComponent({
  name: 'MainLayout',
  components: {
    TopicButtom,
  },
  setup() {
    const loading = ref(true);

    const { user } = useAuthUser();

    const { list, getById } = useApi();

    const topics = ref([]);

    // Para Listar Os Tópicos Mais Accessados....................
    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux = await list('access_topic_user');
        const aux1 = [];
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < aux.length; index++) {
          if (aux[index].user_id === user.value.id) {
            // eslint-disable-next-line no-await-in-loop
            aux1.push(await getById('topic', aux[index].topic_id));
          }
        }
        topics.value = aux1.map((elem) => elem.name);

        loading.value = false;
      } catch (error) {
        loading.value = false;
        showErrorNotification(`A Resposta do banco Não Foi Bem Sucedida Pelo Seguinte Erro: ${error}`);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });
    return {
      icon: ref(false),
      tab: ref('inicio'),
      topics,
      user,
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
 
  .pic
    position: absolute
    top: 35px
    left: 30px
</style>
