<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn to="/second" flat round dense icon="arrow_back" />
        <q-toolbar-title class="text-center">
          Dados de acesso
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page class="flex flex-center container">
        <div class="column explore">
          <p>Aqui é onde você irá cadastrar a sua conte. É bem rápido.
          Para começar, informe para a gente os seus dados pessoais</p>
          <form>
              <q-select
                dense
                rounded
                outlined
                v-model="form.area_actuacao"
                :options="options"
                label="Área de actuação"
                class="q-mb-md"
              />
              <q-select
                dense
                rounded
                outlined
                v-model="form.ano_formatura"
                :options="options1"
                label="Ano de formatura"
              />
            <div class="login-btn-area">
              <PrimaryButtom label="próximo passo" @click="handleRegister" class="q-mb-md"/>
              <SecondaryButtom label="cancelar" link="/"/>
            </div>
          </form>
        </div>
    </q-page>
  </div>
</template>

<script>
import useAuthUser from 'src/composebles/useAuthUser';
import { useRouter } from 'vue-router';
import { defineComponent, ref } from 'vue';
import PrimaryButtom from '../../components/PrimaryButtom.vue';
import SecondaryButtom from '../../components/SecondaryButtom.vue';

export default defineComponent({
  name: 'ThirdStepPage',
  components: {
    PrimaryButtom,
    SecondaryButtom,
  },

  setup() {
    const router = useRouter();

    const { register } = useAuthUser();

    const form = ref({
      area_actuacao: '',
      ano_formatura: '',
    });

    const handleRegister = async () => {
      try {
        await register(form.value);
        router.replace({ name: 'email-confirmation', query: { email: form.value.email } });
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error.message);
      }
    };

    return {
      handleRegister,
      form,
      options: [
        'Medicina', 'Enfermagem', 'Psicologia', 'Ortopedia', 'Hodontologia',
      ],
      options1: [
        '2000', '2001', '2002', '2003', '2004',
      ],
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
