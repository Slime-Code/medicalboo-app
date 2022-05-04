/* eslint-disable semi */
<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn to="/register" flat round dense icon="arrow_back" />
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
          <q-input
            dense
            v-model="formData.email"
            rounded
            outlined
            type="email"
            label="Email"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Campo não pode estar vazio',
              (val) => checarEmail(val) || 'Email inválido',
            ]"
          />
          <q-input
            dense
            class="q-mb-sm"
            v-model="formData.confirm_email"
            rounded
            outlined
            type="email"
            label="Confirme o email"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Campo não pode estar vazio',
              (val) => val.trim() === formData.email.trim() || 'Email não correspondente',
            ]"
          />
          <q-input
            dense
            v-model="formData.password"
            rounded
            outlined
            type="password"
            label="Senha"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Campo não pode estar vazio',
            ]"
          />
          <q-input
            dense
            v-model="formData.confirm_password"
            rounded
            outlined
            type="password"
            label="Confirme a senha"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Campo não pode estar vazio',
              (val) =>
                val.trim() === formData.password.trim() || 'Senha não correspondente',
            ]"
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
  </div>
</template>

<script>
import { defineComponent, computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "SecondStepPage",

  setup() {
    const formData = reactive({
      email: "",
      password: "",
      confirm_email: "",
      confirm_password: "",
    });
    const store = useStore();

    const router = useRouter();

    const teste = computed(() => store.getters["user/getData"]);

    const nextStep = () => {
      // store.dispatch('user/setDataForm', formData)
      store.commit("user/setFormSecond", formData);
      // alert(JSON.stringify(store.state.user.formData));
      router.push("/third");
    };
    function checarEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    return {
      checarEmail,
      teste,
      formData,
      nextStep,
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
