<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn to="/second" flat round dense icon="arrow_back" />
        <q-toolbar-title class="text-center"> Dados de acesso </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page
      padding
      class="row justify-center q-gutter-sm"
      :class="{ 'items-center': $q.screen.width > 599 }"
    >
      <div :class="{ 'col-4': $q.screen.width > 599 }">
        <p>
          Aqui é onde você irá cadastrar a sua conte. É bem rápido. Para começar, informe
          para a gente os seus dados pessoais
        </p>
        <q-form @submit="nextStep">
          <q-select
            dense
            rounded
            outlined
            :loading="loading"
            v-model="formData.occupation_area"
            :options="options"
            label="Área de actuação"
            class="q-mb-md"
            :rules="[(val) => !!val || 'Campo obrigatório']"
          />
          <q-select
            :loading="loading"
            dense
            rounded
            outlined
            v-model="formData.graduation_year"
            :options="options1"
            label="Ano de formatura"
            :rules="[(val) => !!val || 'Campo obrigatório']"
          />
          <div class="login-btn-area">
            <div class="row">
              <q-btn
                label="próximo passo"
                rounded
                color="primary"
                class="q-mb-md full-width"
                type="submit"
              />
            </div>

            <div class="row">
              <q-btn
                label="cancelar"
                to="/"
                class="q-mb-md full-width"
                rounded
                color="secondary"
              />
            </div>
          </div>
        </q-form>
      </div>
    </q-page>
    <div class="flex flex-top">
      <q-spinner class="absolute-center" v-if="loading1" size="xl" color="primary" />
    </div>
  </div>
</template>

<script>
import {
  showErrorNotification,
  // showSuccessNotification,
} from "src/functions/functionShowNotifications";
import { defineComponent, reactive, ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import useAuthUser from "src/composebles/useAuthUser";
import useApi from "../../composebles/useApi";
import { message } from "../../composebles/messageAPI";
// import user from '../../api/User';
/* eslint-disable no-alert */

export default defineComponent({
  name: "ThirdStepPage",

  setup() {
    const { register } = useAuthUser();

    const loading = ref(true);

    const loading1 = ref(false);

    const { list } = useApi();

    const { post } = useApi();

    const store = useStore();

    const router = useRouter();

    const teste = computed(() => store.getters["user/getData"]);

    const formData = reactive({
      occupation_area: "",
      graduation_year: "",
    });

    const options = ref([]);
    const options1 = ref([]);

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux1 = await list("occupation_area");
        options.value = aux1.map((elem) => elem.occupation_area);
        const aux = await list("graduation_year");

        for (let index = 1922; index <= new Date().getFullYear(); index++) {
          options1.value.push(index);
        }

        loading.value = false;
      } catch (error) {
        showErrorNotification(
          `houve uma falha ao carregar os dados do banco: ${JSON.stringify(error)}`
        );
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });

    const $q = useQuasar();
    const nextStep = async () => {
      try {
        loading1.value = true;
        store.commit("user/setFormThird", formData);
        const form = {
          ...store.state.user.formData,
          month: new Date(Date.now()).getMonth(),
          year: new Date(Date.now()).getFullYear(),
        };
        const user = await register(form);
        // delete form.email;
        // delete form.password;
        form.user_id = user.id;
        await post("perfil", form);
        router.replace({ name: "concluido" });
        loading1.value = false;
      } catch (error) {
        loading1.value = false;
        showErrorNotification(message(error.message));
      }
    };

    onMounted(() => {
      if (!teste.value.email.length) {
        router.push("/register");
      }
    });

    return {
      loading,
      loading1,
      formData,
      options,
      options1,
      nextStep,
      teste,
    };
  },
});
</script>

<style scoped>
.q-header {
  background-color: #0053ab;
}
.explore {
  width: 80vw;
}
.login-content {
  margin-top: 40px;
  margin-bottom: auto;
  height: 100%;
}

.login-cab {
  padding: 0 10px;
  margin-bottom: 30px;
}

.login-title {
  font-weight: bold;
  margin: 0;
  padding: 0;
}

.login-text-area .q-field {
  margin-top: 0;
  margin-bottom: 0;
}

.login-btn-area {
  margin-top: 40px;
}

.login-content .q-btn {
  margin: 5px 0;
}
</style>
