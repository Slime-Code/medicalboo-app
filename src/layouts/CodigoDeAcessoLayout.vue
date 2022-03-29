<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar>
          <q-btn :to="{name: 'profile'}" flat round dense icon="arrow_back" />

          <q-toolbar-title>
            Código De Acesso
          </q-toolbar-title>
        </q-toolbar>
    </q-header>
    <q-page-container style="padding-top: 90px; background-color: white;">
      <div class="col flex flex-center q-gutter-x-md col-md-4 col-sm-6 col-xs-10">
        <h7>
        <div class="row items-start q-gutter-x-md col-md-4 col-sm-6 col-xs-10">
          <q-icon style="color: #FFC300" name="fas fa-crown" size="21px"/>
          <p style="color: #0053AB">MedicalBook <strong>Prime</strong></p>
        </div></h7><br>
      </div><br>
      <div class="q-gutter-y-lg" style="margin-left: 35px">
        Se você Possui um Cupom, Insira O Código Abaixo.
        <br> <p> <strong>Código do Cupom:</strong></p><br><br>
      </div>
      <div class="col flex flex-center">
        <q-btn
          :to="{name: 'prime'}"
          no-caps
          no-wrap
          unelevated
          rounded
          text-color="black"
          label="Validar Cupom"
          class="btn-profile btn-prime"
          style="background-color: #FFC300; width: 70%;"
        />
      </div>
      </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CodigoDeAcessoLayout',
  setup() {
    return {
      tab: ref('inicio'),
    };
  },
});
</script>

<style lang="sass" scoped>
  .q-header
    background-color: #0053ab
  .q-tabs
    color: #B2BBBB
    height: 80px
  .q-tab
    margin: 0
    padding: 0
  .q-tab--active
    color: #1A4B9A
  .q-tab__content
      flex-direction: column
      flex-wrap: nowrap
  .q-tab__content
    .q-tab__label
      font-size: .6em
  .q-toolbar__title
    text-align: center
</style>
