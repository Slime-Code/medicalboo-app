<template>
    <q-page class="flex flex-center">
      <div class="column" align="center">
        <div class="col item">
          <br>
          <br>
          <q-btn @click="showAdPerfil=true" style="color: #1378B3; margin: 2px #004A9D;"
            label="Editar Informações" icon="edit"/> <br> <br>
          <hr>
        </div>
        <div class="col item">
          <q-btn size="9px" style="color: #E8A40F;" flat icon="fas fa-crown" />
          <q-btn
            style="padding: 0px"
            size="12px"
            flat
            label="Parabens! você Já é um usuário prime"
          >
          </q-btn>
        </div>

        <div class="col item">
          <div class="column q-ma-md">
            <div class="col">
              <q-field label="Nome Completo" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">{{ name }}</div>
                </template>
              </q-field>
              <q-field label="Dta de Nascimento" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">{{ birthday }}</div>
                </template>
              </q-field>
              <q-field label="E-mail" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">{{ email }}</div>
                </template>
              </q-field>
              <q-field label="Celular" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">{{ phone }}</div>
                </template>
              </q-field>
              <q-field label="UF" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">{{ cpf }}</div>
                </template>
              </q-field>
              <q-field label="Perfil" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    {{ profile_type }}</div>
                </template>
              </q-field>
            </div>
          </div>
        </div>
      </div>

      <q-dialog v-model="showAdPerfil" persistent>
         <q-card class="q-pa-md" style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Novo Perfil</div>
    </q-card-section>

    <form @submit.prevent="updatePerfile">
      <q-card-section class="q-pt-none">
        <div class="q-mb-md">
          <q-input
            label="Nome"
            dense
            v-model="formData.name"
            autofocus
            @keyup.enter="prompt = false"
            lazy-rules
            :rules="titleRules"
            ref="title"
          />
        </div>

        <div class="q-mb-md">
          <q-input
            dense
            v-model="formData.birthday"
            type="date"
            label="Data de nascimento"
            @keyup.enter="prompt = false"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Campo não pode estar vazio'
            ]"
          />
        </div>

        <div class="q-mb-md">
          <q-input
            label="E-mail"
            dense
            v-model="formData.email"
            autofocus
            @keyup.enter="prompt = false"
            lazy-rules
            :rules="diagnosisRules"
            ref="diagnosis"
          />
        </div>

        <div class="q-mb-md">
          <q-input
            label="Telefone"
            dense
            v-model="formData.phone"
            autofocus
            @keyup.enter="prompt = false"
            lazy-rules
            :rules="complentary_examsRules"
            ref="complentary_exams"
          />
        </div>

        <div class="q-mb-md">
          <q-input
            label="CPF"
            dense
            v-model="formData.cpf"
            autofocus
            @keyup.enter="prompt = false"
            lazy-rules
            :rules="complentary_examsRules"
            ref="complentary_exams"
          />
        </div>

        <div class="q-mb-md">
          <q-option-group
            v-model="formData.profile_type_id"
            :options="type"
            color="primary"
            inline
          />
        </div>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn type="submit" flat label="Adicionar" v-close-popup />
      </q-card-actions>
    </form>
  </q-card>
      </q-dialog>
    </q-page>
</template>

<script>
/* eslint-disable camelcase */
import { Notify } from 'quasar';
import { defineComponent, ref, onMounted } from 'vue';
import useAuthUser from 'src/composebles/useAuthUser';
import {
  showErrorNotification,
  showSuccessNotification,
} from 'src/functions/functionShowNotifications';
import useApi from '../../composebles/useApi';

export default defineComponent({
  name: 'MeusDados',

  setup() {
    const loading = ref(true);

    const formData = ref({
      phone: '',
      profile_type_id: '',
      birthday: '',
      name: '',
      cpf: '',
      email: '',
    });

    const { getById } = useApi();

    const { update } = useApi();

    const { user } = useAuthUser();

    const aux = ref(user);
    const { profile_type_id } = aux.value.user_metadata;
    const { email, phone } = aux.value;
    const { name, cpf, birthday } = aux.value.user_metadata;
    const profile_type = ref('');

    const type = ref([
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
        loading.value = true;
        const aux1 = await getById('profile_type', profile_type_id);
        profile_type.value = aux1.map((elem) => elem.name);
        loading.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    const updatePerfile = async () => {
      try {
        loading.value = true;
        await update('profile', formData);
        loading.value = false;
        showSuccessNotification('Atualizado com sucesso!!');
      } catch (error) {
        showErrorNotification(`A Atualização Não Foi Bem Sucedida Pelo Seguinte Erro: ${error}`);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });
    return {
      type,
      updatePerfile,
      formData,
      phone,
      profile_type,
      birthday,
      name,
      cpf,
      email,
      slide: ref('style'),
      showAdPerfil: ref(false),
      titleRules: [
        (val) => (val && val.length > 0) || 'Por favor digite alguma coisa',
      ],
      definitionRules: [
        (val) => (val && val.length > 0) || 'Por favor digite alguma coisa',
      ],
      diagnosisRules: [
        (val) => (val && val.length > 0) || 'Por favor digite alguma coisa',
      ],
      complentary_examsRules: [
        (val) => (val && val.length > 0) || 'Por favor digite alguma coisa',
      ],
    };
  },
});
</script>

<style lang="sass" scoped>
  .pic
    position: absolute
    top: 85px
    left: 80px
  .item
    margin-bottom: 20px
  .btn-profile
    min-width: 150px
    width: 95%
    margin-right: 10px
  .btn-prime
    background: #FFAF00
  .btn-prime .q-icon
    font-size: .4em
  .btn-opcao
    border-bottom: 1px solid #CCCCCC
    width: 90%
    text-align: left
    margin-bottom: 10px
  .btn-opcao.q-btn__content
    min-width: 100%
  .btn-opcao.q-btn__content.block
    flex-grow: 3
</style>
