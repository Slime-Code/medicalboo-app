<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="flex flex-center q-px-md container">
      <div class="row">
        <div class="col-8 offset-2">
          <q-img
            src="img/logo-original.png"
            class="q-my-lg"
          />
        </div>

        <div class="login-content">
          <q-form
            @submit="handleLogin"
            class="q-gutter-md"
          >
            <div class="login-cab">
              <h5 class="login-title">Vamos começar?</h5>
              <span>Para iniciar a sua conta informe os dados</span>
            </div>

            <div class="login-text-area">
              <q-input
                dense
                v-model="form.email"
                rounded
                outlined
                label="Email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Campo não pode estar vazio']"
              />

              <q-input
                dense
                v-model="form.password"
                rounded
                outlined
                type="password"
                label="Password"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Campo não pode estar vazio'
                ]"
              />
            </div>

            <div class="login-btn-area">
              <PrimaryButtom label="acessar" type="submit" />
              <SecondaryButtom label="criar conta gratuita" link="/register"/>
            </div>
            <br>
            <q-spinner
              class="absolute-center"
              v-if="loading"
              size="xl"
              color="primary"
            />
          </q-form>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { mapActions } from 'vuex';
import useAuthUser from 'src/composebles/useAuthUser';
import { useRouter } from 'vue-router';
import PrimaryButtom from '../../components/PrimaryButtom.vue';
import SecondaryButtom from '../../components/SecondaryButtom.vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    PrimaryButtom,
    SecondaryButtom,
  },
  setup() {
    const form = ref({ email: '', password: '' });

    const loading = ref(false);

    const router = useRouter();

    const { login } = useAuthUser();

    const handleLogin = async () => {
      try {
        loading.value = true;
        await login(form.value);
        loading.value = false;
        router.replace({ name: 'home' });
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error.message);
      }
    };
    return {
      handleLogin,
      form,
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
</style>
