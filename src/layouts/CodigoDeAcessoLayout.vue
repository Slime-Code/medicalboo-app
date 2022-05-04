<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-btn :to="{ name: 'profile' }" flat round dense icon="arrow_back" />

        <q-toolbar-title> Código De Acesso </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="q-pa-md row flex justify-center">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-xs-10 column">
          <div class="col row flex justify-center">
            <p class="flex flex-center text-bold text-primary" style="font-size: 1rem">
              <q-icon
                class="q-mr-sm"
                style="color: #ffc300"
                name="fas fa-crown"
                size="21px"
              />
              MedicalBook Prime
            </p>
          </div>
          <div class="col column flex">
            <div class="col text-body5">
              Se você possui um cupom, insira o código abaixo.
            </div>

            <q-form class="col q-mt-md">
              <div class="full-width">
                <q-input rounded outlined label="Código do cupom" />
              </div>
              <div class="full-width q-mt-md">
                <q-btn
                  class="full-width"
                  no-caps
                  unelevated
                  color="yellow-7"
                  rounded
                  label="Validar Cupom"
                />
              </div>
            </q-form>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
// <q-icon class="col" style="color: #ffc300" name="fas fa-crown" size="21px" />
export default defineComponent({
  name: "CodigoDeAcessoLayout",
  setup() {
    return {
      tab: ref("inicio"),
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
