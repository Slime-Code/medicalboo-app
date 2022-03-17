<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="flex flex-center q-px-md container
    col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg"
    >
      <q-form @submit="nextStep">
        <q-img src="img/concluido.png" style="width: 300px; height: 530px;" loading="lazy">
          <div class="row login-btn-area absolute-bottom">
            <q-btn
              label="Entrar" rounded color="green" class="q-mb-md full-width"
              type="submit"
            />
          </div>
        </q-img>
      </q-form>
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import useAuthUser from 'src/composebles/useAuthUser';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ConcluidoPage',

  setup() {
    const router = useRouter();

    const { user } = useAuthUser();

    const nextStep = async () => {
      try {
        router.replace({ name: 'email-confirmation', query: { email: user.email } });
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

  .q-btn{
    min-width: 100%;
    border: 0.5px solid #49d166;
    color: #ffff;
    padding: 5px 30px;
    margin-top: 5px;
  }
</style>
