<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          Boas Vindas!
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
                v-model="formData.nome"
                rounded
                outlined
                type="text"
                label="Nome completo"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Campo não pode estar vazio'
                ]"
              />
              <q-input
                dense
                v-model="formData.data_nascimento"
                rounded
                outlined
                type="date"
                label="Data de nascimento"
                stack-label
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Campo não pode estar vazio'
                ]"
              />
              <q-input
                dense
                v-model="formData.cpf"
                rounded
                outlined
                type="text"
                label="CPF"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Campo não pode estar vazio'
                ]"
              />
              <div>
                <div class="q-pa-xs">
                  <q-option-group
                    v-model="formData.tipo"
                    :options="tipo"
                    color="primary"
                    inline
                  />
                </div>
              </div>
              <q-select
                dense
                rounded
                outlined
                v-model="formData.nacionalidade"
                :options="options"
                label="Nacionalidade"
              />
            <div class="login-btn-area">
              <PrimaryButtom label="próximo passo" link="/second" class="q-mb-md"/>
              <SecondaryButtom label="cancelar"  link="/"/>
            </div>
          </form>
        </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import PrimaryButtom from '../../components/PrimaryButtom.vue';
import SecondaryButtom from '../../components/SecondaryButtom.vue';

export default defineComponent({
  name: 'FirstStepPage',
  components: {
    PrimaryButtom,
    SecondaryButtom,
  },

  setup() {
    const formData = ref({
      nome: '',
      data_nascimento: '',
      cpf: '',
      tipo: ref('estudante'),
      nacionalidade: '',
    });
    return {
      formData,
      options: [
        'Brasileira', 'Portuguesa', 'Angolana', 'Moçambicana', 'Americana',
      ],
      tipo: [
        {
          label: 'Estudante',
          value: 'estudante',
        },
        {
          label: 'Profissional',
          value: 'profissional',
        },
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
