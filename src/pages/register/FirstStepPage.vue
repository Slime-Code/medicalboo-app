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
          <q-form @submit="nextStep">
              <q-input
                dense
                v-model="formData.name"
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
                v-model="formData.birthday"
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
                    v-model="formData.profile_type_id"
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
                v-model="formData.nationality"
                :options="options"
                label="Nacionalidade"
              />
            <div class="login-btn-area">
              <div class="row">
                <q-btn
                label="próximo passo" rounded color="primary"
                type="submit"
                class="q-mb-md full-width"
                />
              </div>

              <div class="row">
                <q-btn
                  label="cancelar" to="/" class="q-mb-md full-width" rounded color="secondary"
                />
              </div>
            </div>
          </q-form>
        </div>
    </q-page>
  </div>
</template>

<script>
import { Notify } from 'quasar';
import {
  defineComponent, ref, reactive, onMounted,
} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import useApi from '../../composebles/useApi';

export default defineComponent({
  name: 'FirstStepPage',

  setup() {
    const { list } = useApi();

    const loading = ref(true);

    const formData = reactive({
      name: '',
      birthday: '',
      cpf: '',
      nationality: '',
      profile_type_id: 1,
    });
    const options = ref([]);
    const tipo = ref([
      {
        label: 'Estudante',
        value: 1,
      },
      {
        label: 'Profissional',
        value: 2,
      },
    ]);

    const listTopicsAproachs = async () => {
      try {
        const aux = await list('nationality');
        options.value = aux.map((elem) => elem.name);
        loading.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });

    const store = useStore();
    const router = useRouter();

    const nextStep = () => {
      store.commit('user/setFormOne', formData);
      router.push('/second');
    };
    return {
      formData,
      options,
      tipo,
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
