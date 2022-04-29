<template>
  <q-layout view="lHh Lpr lFf">
    <q-page padding>
      <div class="column bg-white q-gutter-md items-center" :class="{
        'login-size': ($q.screen.width) > 599,
        'absolute-center': ($q.screen.width) > 599
      }">
          <q-img class="q-mb-xl" src="img/logo-original.png" style="height:80%; width:80%"/>

        <q-form @submit="handleLogin" class="q-mt-lg">
             <q-input
              dense
              v-model="form.email"
              rounded
              outlined
              label="Email"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Campo não pode estar vazio']"
            />

            <q-input
              dense
              v-model="form.password"
              rounded
              outlined
              type="password"
              label="Senha"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'Campo não pode estar vazio',
              ]"
            />
            <PrimaryButtom class="full-width q-my-md" label="acessar" type="submit" />
            <SecondaryButtom :disable="$route.query.access==='admin'" label="criar conta gratuita" link="/register" />
          <br />
          <q-spinner class="absolute-center" v-if="loading" size="xl" color="primary" />
        </q-form>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { mapActions } from 'vuex';
import useAuthUser from 'src/composebles/useAuthUser';

import useApi from 'src/composebles/useApi';

import { useRouter, useRoute } from 'vue-router';
import PrimaryButtom from '../../components/PrimaryButtom.vue';
import SecondaryButtom from '../../components/SecondaryButtom.vue';
import { message } from '../../composebles/messageAPI';

<<<<<<< HEAD
import {useQuasar} from 'quasar'
import { useRouter, useRoute } from "vue-router";
import PrimaryButtom from "../../components/PrimaryButtom.vue";
import SecondaryButtom from "../../components/SecondaryButtom.vue";
import { message } from '../../composebles/messageAPI'
=======
>>>>>>> 5a23f6428200265cfad419b85cbed3ac6a2fee00
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
    const $route = useRoute();

    const { login } = useAuthUser();

    const handleLogin = async () => {
      try {
        // router.replace({ name: 'login', query: { access: 'admin' } });
        let profile = [];
        /*
        if ($route.query.access === 'admin') {
          const { getByField } = useApi();

<<<<<<< HEAD



        let profile = []

        if($route.query.access==='admin') {
          const { getByField } = useApi()

           try {
             profile = await getByField('perfil', 'email', form.value.email)
           } catch (error) {
             profile = [{profile_type_id: 0}]
             console.error(error)
           }
=======
          profile = await getByField('perfil', 'email', form.value.email);
>>>>>>> 5a23f6428200265cfad419b85cbed3ac6a2fee00
        }
        */
        const { getByField } = useApi();

        profile = await getByField('perfil', 'email', form.value.email);

        loading.value = true;
        await login(form.value);

<<<<<<< HEAD

        if(profile[0]?.profile_type_id === 3) {

        router.push({name: 'painel'});

        } else if(profile[0]?.profile_type_id === 0) {
          alert("Não é usuário do tipo admin")
        } else {
          router.push("/home");

        }



=======
        if (profile[0]?.profile_type_id === 3) {
          router.push({ name: 'painel' });
        } else {
          router.push('/home');
        }
>>>>>>> 5a23f6428200265cfad419b85cbed3ac6a2fee00
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(message(error.message));
      } finally {
        loading.value = false;
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
</style>
