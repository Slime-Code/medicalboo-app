<template>
  <div>
    <q-header class="bg-primary" elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          Boas Vindas!
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page padding class="row justify-center q-gutter-sm" :class="{'items-center': $q.screen.width > 599}">
        <div class="explore" :class="{'col-4': $q.screen.width > 599}">
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
                mask="###########"
                :rules="[
                  val => val !== null && val !== '' || 'Campo não pode estar vazio',
                  val => TestaCPF(val) || 'CPF inválido'
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
              <div class="row q-mt-md">
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
    
    function TestaCPF(strCPF) {
      var Soma;
      var Resto;
      Soma = 0;
      if (strCPF == "00000000000") return false;

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;
      return true;
    }

    return {
      TestaCPF,
      formData,
      options,
      tipo,
      nextStep,
    };
  },
});
</script>

<style scoped>
</style>
