<template>
  <q-layout view="lHh Lpr lFf">
    <q-page padding>
      <div
        class="column bg-white q-gutter-y-md items-center"
        :class="{
          'login-size': $q.screen.width > 599,
          'absolute-center': $q.screen.width > 599,
        }"
      >

        <div class="full-width text-h7"><strong>Recomendamus-lhe uma senha forte Para maior segurança. <strong class="text-primary">MedicalBook</strong></strong></div>
        <br><br>

        <q-form @submit="handleResetPassword" class="full-width q-mt-lg constrain-4">
          <q-input
            dense
            v-model="password"
            rounded
            outlined
            type="password"
            label="Nova Senha"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Campo não pode estar vazio',
              (val) => (val.length > 5) || 'O número de dígitos deve ser maior que 5'
            ]"
          />

          <q-input
            dense
            v-model="password1"
            rounded
            outlined
            type="password"
            label="Confirmar Senha"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Campo não pode estar vazio',
              (val) =>
                val.trim() === password.trim() || 'Senha não correspondente',
            ]"
          />

          <PrimaryButtom class="full-width q-my-ms" label="acessar" type="submit" />
          <q-btn :to="{ name: 'login' }" label="Cancelar" class="full-width q-my-md text-primary text-center text-h9" flat/>
          <br />
          <q-spinner class="absolute-center" v-if="loading" size="xl" color="primary" />
        </q-form>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composebles/useAuthUser";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";
import PrimaryButtom from "../../components/PrimaryButtom.vue";
import SecondaryButtom from "../../components/SecondaryButtom.vue";
import { message } from "../../composebles/messageAPI";

export default defineComponent({
  name: "LoginPage",
  components: {
    PrimaryButtom,
    SecondaryButtom,
  },
  setup() {
    const password = ref('');

    const loading = ref(false);

    const router = useRouter();
    const $route = useRoute();

    const $q = useQuasar();

    const token = $route.query.token;

    const { resetPassword } = useAuthUser();

    const handleResetPassword = async () => {
      try {

        loading.value = true;
        await resetPassword(token, password.value);
        $q.notify({
          type: "positive",
          message: 'senha Alterada com sucesso!!',
        });
        router.replace({ name: 'login'});
      } catch (error) {
        alert(message(error.message));
      } finally {
        loading.value = false;
      }
    };
    return {
      handleResetPassword,
      password,
      loading,
      password1: ref(''),
    };
  },
});
</script>

<style scoped></style>
