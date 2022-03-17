<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn to="/register" flat round dense icon="arrow_back" />
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
              <q-input
                dense
                v-model="formData.email"
                rounded
                outlined
                type="email"
                label="Email"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Campo não pode estar vazio'
                ]"
              />
              <q-input
                dense
                v-model="formData.confirm_email"
                rounded
                outlined
                type="email"
                label="Confirme o email"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Campo não pode estar vazio'
                ]"
              />
              <q-input
                dense
                v-model="formData.senha"
                rounded
                outlined
                type="password"
                label="Senha"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Campo não pode estar vazio'
                ]"
              />
              <q-input
                dense
                v-model="formData.confirm_senha"
                rounded
                outlined
                type="password"
                label="Confirme a senha"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Campo não pode estar vazio'
                ]"
              />
            <div class="login-btn-area">
              <PrimaryButtom label="próximo passo" link="/third" class="q-mb-md"/>
              <SecondaryButtom label="cancelar" link="/"/>
            </div>
          </form>
        </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PrimaryButtom from '../../components/PrimaryButtom.vue';
import SecondaryButtom from '../../components/SecondaryButtom.vue';

export default defineComponent({
  name: 'SecondStepPage',
  components: {
    PrimaryButtom,
    SecondaryButtom,
  },
  data() {
    return {
      formData: {
        email: '',
        confirm_email: '',
        senha: '',
        confirm_senha: '',
      },
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
