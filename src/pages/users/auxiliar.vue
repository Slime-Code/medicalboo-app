<template>
  <q-page class="flex flex-center">
    <div class="column" align="center">
      <div class="col item">
          <q-btn style="background: #1A4B9A; color: #1378B3" round icon="fas fa-user" size="40px">
            <q-badge class="pic" style="background: #49D16B" rounded>
              <q-icon dense name="eva-camera-outline" color="white" size="30px"/>
            </q-badge>
          </q-btn>
      </div>
      <div class="col item">
        <h6 style="margin:0">Henrique Silva</h6>
        <span>Assinatura Gratis</span>
      </div>
      <div class="col item q-ma-md">
        <div class="row">
          <div class="col">
            <q-btn
              no-caps
              outline
              unelevated
              rounded
              label="Meus dados"
              class="btn-profile btn-sec"
              />
          </div>
          <div class="col">
            <q-btn
              no-caps
              no-wrap
              unelevated
              rounded
              text-color="black"
              icon="fas fa-crown"
              label="Quero ser Prime"
              class="btn-profile btn-prime"
              />
          </div>
        </div>
      </div>
      <div class="col item">
        <div class="column q-ma-md">
          <div class="col">
            <q-btn
              align="left"
              flat
              no-caps
              style="color: black"
              label="Avalie o app"
              icon-right="eva-arrow-ios-forward-outline"
              class="btn-opcao"/>
            <q-btn
              align="left"
              flat
              no-caps
              style="color: black"
              label="Convide amigos"
              icon-right="eva-arrow-ios-forward-outline"
              class="btn-opcao"/>
            <q-btn
              align="left"
              flat
              no-caps
              style="color: black"
              label="Código de acesso"
              icon-right="eva-arrow-ios-forward-outline"
              class="btn-opcao"/>
            <q-btn
              align="left"
              flat
              no-caps
              style="color: black"
              label="Suporte"
              icon-right="eva-arrow-ios-forward-outline"
              class="btn-opcao"/>
            <q-btn
              align="left"
              flat
              no-caps
              style="color: black"
              label="Sobre o app"
              icon-right="eva-arrow-ios-forward-outline"
              class="btn-opcao"/>
            <q-btn
              @click="handleLogout"
              align="left"
              flat
              no-caps
              style="color: black"
              label="Sair"
              class="btn-opcao"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
/* eslint-disable linebreak-style */
import { defineComponent, ref } from 'vue';
import useAuthUser from 'src/composebles/useAuthUser';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ProfilePage',
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
