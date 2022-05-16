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

        <div class="full-width text-h7 text-center"><strong>Recomendamus-lhe uma senha forte <strong class="text-primary">MedicalBook</strong>, informe o seu E-mail.</strong></div>
        <br><br>

        <q-form @submit.prevent="handleRestEmail" class="full-width q-mt-lg constrain-4">
          <q-input
            dense
            v-model="email"
            rounded
            outlined
            label="E-mail"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo não pode estar vazio']"
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
import { useQuasar } from "quasar";
import useAuthUser from "src/composebles/useAuthUser";
import { useRouter } from "vue-router";
import PrimaryButtom from "../../components/PrimaryButtom.vue";
import SecondaryButtom from "../../components/SecondaryButtom.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    PrimaryButtom,
    SecondaryButtom,
  },
  setup() {
    const email = ref('');

    const loading = ref(false);

    const router = useRouter();

    const $q = useQuasar();

    const { sendPasswordRestEmail } = useAuthUser();

    const handleRestEmail = async () => {
      try {
        loading.value = true;
        await sendPasswordRestEmail(email.value);
        $q.notify({
          type: "positive",
          message: `foi enviada uma notificação para ${email.value}`,
        });
        router.push('login');
      } catch (error) {
        alert(error)
      } finally {
        loading.value = false;
      }
    };
    return {
      handleRestEmail,
      email,
      loading,
    };
  },
  /* methods: {
    ...mapActions('user', ['login']),
    onSubmit() {
      this.login(this.formData);
    },
  }, */
});
</script>

<style scoped></style>
