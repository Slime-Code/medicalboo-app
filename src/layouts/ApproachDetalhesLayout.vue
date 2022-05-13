<template>
  <q-layout>
    <q-header bordered class="bg-white">
      <q-toolbar>
        <q-btn
          round
          dense
          :to="{ name: 'home' }"
          flat
          text-color="grey"
          icon="arrow_back"
        />
        <q-space />
        <div class="q-gutter-x-sm">
          <q-btn flat dense round color="grey" to="/note" icon="edit" />
          <q-btn flat dense round color="grey" icon="share" @click="show(false)" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { showErrorNotification } from "src/functions/functionShowNotifications";
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import useApi from "../composebles/useApi";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "ApproachDetalhesLayout",

  setup() {
    const loading = ref(true);
    const { getById } = useApi();
    const route = useRoute();
    const approach = ref({});

    const $q = useQuasar();

    function show(grid) {
      $q.bottomSheet({
        message: "Convidar seus amigos",
        actions: [
          {
            label: "Facebook",
            icon: "mdi-facebook",
            color: "blue",
            id: "facebook",
          },
          {
            label: "Telegram",
            icon: "mdi-telegram",
            color: "primary",
            id: "telegram",
          },
          {
            label: "Linkedin",
            icon: "mdi-linkedin",
            color: "blue-6",
            id: "linkedin",
          },
          {
            label: "Whatsapp",
            icon: "mdi-whatsapp",
            color: "green",
            id: "whatsapp",
          },
        ],
      })
        .onOk((action) => {
          let link = "";

          const register = `medicalbook.surge.sh`;

          switch (action.id) {
            case "facebook":
              link = `https://www.facebook.com/sharer/sharer.php?u=${register}`;
              break;
            case "linkedin":
              link = `https://www.linkedin.com/sharing/share-offsite/?url=${register}`;
              break;
            case "telegram":
              link = `https://telegram.me/share/?url=${register}`;
            case "whatsapp":
              link = `https://telegram.me/share/?url=${register}`;
              break;
            default:
              break;
          }

          window.open(link, "_blank").focus();
        })
        .onCancel(() => {
          // console.log('Dismissed')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK andtitle Cancel')
        });
    }

    const getApproachById = async () => {
      try {
        loading.value = true;
        approach.value = await getById("approach", route.params.id);
        loading.value = false;
      } catch (error) {
        showErrorNotification(error);
      }
    };

    onMounted(() => {
      getApproachById();
    });

    return {
      show,
      approach,
      loading,
    };
  },
});
</script>

<style lang="sass" scoped></style>
