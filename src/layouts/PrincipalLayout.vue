<template>
  <q-layout view="lHh lpr lFf">
    <q-header
      v-if="$q.screen.width <= 599"
      flat
      bordered
      class="small-screen-only ground bg-primary"
    >
      <q-toolbar
        v-if="$router.currentRoute.value.fullPath === '/home'"
        class="constrain-2"
      >
        <q-toolbar-title>
          <q-btn flat dense :to="{ name: 'meus-dados' }">
            <q-avatar size="80px">
              <img :src="img.img_url" />
            </q-avatar>
          </q-btn>
        </q-toolbar-title>

        <!-- <q-btn
          v-for="tab in tabsLink"
          :to="tab.to"
          dense
          :color="$router.currentRoute.value.fullPath === tab.to ? 'primary' : 'grey-8'"
          no-caps
          round
          flat
          :name="tab.name"
          :icon="tab.icon"
        /> -->
        <q-space />

        <q-btn
          no-caps
          unelevated
          rounded
          label="Mais acessados"
          @click="icon = true"
          icon="widgets"
          text-color="primary"
          color="white"
        >
        </q-btn>
      </q-toolbar>
      <q-toolbar v-if="$router.currentRoute.value.fullPath === '/home'" class="detail">
        <q-toolbar-title class="text-caption">
          Olá {{ user.user_metadata.name }}, bom te ver por aqui
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar v-else class="detail">
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-header v-else reveal flat bordered class="bg-white large-screen-only">
      <q-toolbar class="constrain-2">
        <q-toolbar-title class="row jusitfy-between items-center">
          <q-img
            class="q-my-sm"
            src="icone.png"
            style="width: 20%; height: 20%; max-height: 50px"
          >
          </q-img>
          <span class="text-primary"> Medicalbook </span>
          <q-input
            v-model="generalSearch"
            class="col-4 absolute-center"
            debounce="600"
            @update:model-value="showingGeneralSearch = true"
            placeholder="Pesquisar categoria, tópico, abordagem..."
            outlined
            dense
            rounded
          >
            <template v-slot:prepend>
              <q-icon size="xs" name="eva-search-outline" />
            </template>

            <template v-slot:append>
              <q-btn
                v-if="generalSearch"
                icon="cancel"
                size="sm"
                round
                flat
                @click="generalSearch = ''"
                dense
              />
            </template>
            <q-menu v-if="showingGeneralSearch" v-model="showingGeneralSearch">
              <q-list style="min-width: 365px">
                <q-item clickable v-close-popup>
                  <q-item-section>New tab</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>New incognito tab</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Recent tabs</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>History</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Downloads</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Help &amp; Feedback</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-input>
        </q-toolbar-title>

        <!-- <q-btn
          v-for="tab in tabsLink"
          :to="tab.to"
          dense
          :color="$router.currentRoute.value.fullPath === tab.to ? 'primary' : 'grey-8'"
          no-caps
          round
          flat
          :name="tab.name"
          :icon="tab.icon"
        /> -->

        <q-btn
          no-caps
          unelevated
          rounded
          label="Mais acessados"
          @click="icon = true"
          icon="widgets"
          color="primary"
        >
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer style="background-color: #f6f6f6; width: 100vw" bordered>
      <q-tabs
        v-model="tab"
        indicator-color="transparent"
        dense
        active-color="primary"
        align="justify"
        class="constrain-4 q-pa-sm text-grey-8"
      >
        <q-route-tab
          v-for="tab in tabsLink"
          :key="tab.name"
          :to="tab.to"
          dense
          no-caps
          :name="tab.name"
          :icon="tab.icon"
          :label="tab.label"
        />
      </q-tabs>
    </q-footer>

    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Mais acessados</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup close-personal />
        </q-card-section>

        <q-card-section>
          <div class="row">
            <div class="col-6" v-for="(topic, index) in topics" :key="index">
              <TopicButtom :title="topic.name" :id="topic.id" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { showErrorNotification } from "src/functions/functionShowNotifications";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import TopicButtom from "../components/TopicButtom.vue";
import useApi from "../composebles/useApi";
import useAuthUser from "../composebles/useAuthUser";

export default defineComponent({
  name: "PrincipalLayout",
  components: {
    TopicButtom,
  },
  setup() {
    const tabsLink = [
      {
        to: "/explore",

        name: "explore",
        icon: "search",
        label: "Explorar",
      },

      {
        to: "/favorite",

        name: "favoritos",
        icon: "eva-heart-outline",
        label: "Favoritos",
      },

      {
        to: "/home",

        name: "inicio",
        icon: "eva-home-outline",
        label: "Inicio",
      },

      {
        to: "/note",
        name: "notas",
        icon: "far fa-sticky-note",
        label: "Notas",
      },
      {
        to: "/profile",

        name: "perfil",
        icon: "far fa-user",
        label: "Perfil",
      },
    ];

    const img = ref({});

    const loading = ref(true);

    const router = useRouter();

    const { user } = useAuthUser();

    const { list, getById, getByField } = useApi();

    const topics = ref([]);

    // Para Listar Os Tópicos Mais Accessados....................
    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux = await list("access_topic_user");
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < aux.length; index++) {
          if (aux[index].user_id === user.value.id) {
            // eslint-disable-next-line no-await-in-loop
            topics.value.push(await getById("topic", aux[index].topic_id));
          }
        }

        loading.value = false;
      } catch (error) {
        loading.value = false;
        showErrorNotification(
          `A Resposta do banco Não Foi Bem Sucedida Pelo Seguinte Erro: ${error}`
        );
      }
    };

    const go = async (id) => {
      router.push(`/approach/${id}`);
    };

    const showingGeneralSearch = ref(false);
    const generalSearch = ref("");

    const title = computed(() => {
      const current = router.currentRoute.value.fullPath;

      if (current === "/home") return "Página Inicial";
      else if (current === "/favorite") return "Favoritos";
      else if (current === "/note") return "Minhas notas";
      else if (current === "/profile") return "Perfil";
      else if (current === "/explore") return "Exporar";
      else return "Sobre";
    });

    const getImg = async () => {
      const auxImg = await getByField("perfil", "user_id", user.value.id);
      img.value = auxImg[0];
      loading.value = false;
    };

    onMounted(() => {
      getImg();
      listTopicsAproachs();
    });
    return {
      img,
      title,
      generalSearch,
      showingGeneralSearch,
      tabsLink,
      icon: ref(false),
      tab: ref("inicio"),
      topics,
      user,
      go,
    };
  },
});
</script>

<style lang="sass" scoped></style>
