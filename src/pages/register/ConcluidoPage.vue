<template>
  <q-layout view="lHh Lpr lFf">
    <q-page padding class="bg-white">
      <div
        class="column items-center"
        :class="{ 'absolute-center': $q.screen.width > 599 }"
      >
        <div class="col">
          <q-icon name="check_circle" class="text-white" size="300px" color="green" />
        </div>
        <div class="q-my-lg text-body1 text-center">
          O seu cadastro foi concluído com sucesso, foi enviado um email de confirmaçāo, por favor acesse o seu email para acessar o
          <span class="text-bold q-pa-md text-primary">MedicalBook</span> :)
        </div>
        <q-btn class="col" href="https://mail.google.com/mail/u/0/?tab=km#inbox" label="Ok" rounded color="green" type="submit" />
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import useAuthUser from "src/composebles/useAuthUser";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ConcluidoPage",

  setup() {
    const router = useRouter();


    const { user } = useAuthUser();

    const nextStep = async () => {
      try {
        router.replace({ name: "email-confirmation", query: { email: user.email } });
      } catch (error) {
        alert(error.message);
      }
    };
    return {
      nextStep,
    };
  },
});
</script>

<style scoped>
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

.q-btn {
  min-width: 100%;
  border: 0.5px solid #49d166;
  color: #ffff;
  padding: 5px 30px;
  margin-top: 5px;
}
</style>
