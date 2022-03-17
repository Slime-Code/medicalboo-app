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
              <q-field label="Standard" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">Field content</div>
                </template>
              </q-field>
              <q-field label="Standard" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">Field content</div>
                </template>
              </q-field>
              <q-field label="Standard" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">Field content</div>
                </template>
              </q-field>
              <q-field label="Standard" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">Field content</div>
                </template>
              </q-field>
              <q-field label="Standard" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">Field content</div>
                </template>
              </q-field>
              <q-field label="Standard" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">Field content</div>
                </template>
              </q-field>
            </div>
          </div>
        </div>
      </div>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import useAuthUser from 'src/composebles/useAuthUser';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'MeusDados',
  setup() {
    const $q = useQuasar();

    const router = useRouter();

    const { logout } = useAuthUser();

    const handleLogout = async () => {
      $q.dialog({
        title: 'Logout',
        message: 'Do you really want to leave ?',
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        await logout();
        router.replace({ name: 'login' });
      });
    };
    return {
      handleLogout,
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
