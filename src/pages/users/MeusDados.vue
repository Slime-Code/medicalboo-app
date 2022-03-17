<template>
    <q-page class="flex flex-center">
      <div class="column" align="center">
        <div class="col item">
          <br>
          <br>
          <q-btn to="/register" style="color: #1378B3; margin: 2px #004A9D;"
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
    </q-page>
</template>

<script>
/* eslint-disable camelcase */
import { Notify } from 'quasar';
import { defineComponent, ref, onMounted } from 'vue';
import useAuthUser from 'src/composebles/useAuthUser';
import useApi from '../../composebles/useApi';

export default defineComponent({
  name: 'MeusDados',
  setup() {
    const loading = ref(true);

    const { getById } = useApi();

    const { user } = useAuthUser();

    const aux = ref(user);
    const { profile_type_id } = aux.value.user_metadata;
    const { email, phone } = aux.value;
    const { name, cpf, birthday } = aux.value.user_metadata;
    const profile_type = ref('');

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        // alert(JSON.stringify(user.value));
        const aux1 = await getById('profile_type', profile_type_id);
        profile_type.value = aux1.map((elem) => elem.name);
        loading.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });
    return {
      phone,
      profile_type,
      birthday,
      name,
      cpf,
      email,
      slide: ref('style'),
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
