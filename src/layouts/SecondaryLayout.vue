<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar>
          <q-btn to="/home" flat round dense icon="arrow_back" />

          <q-toolbar-title>
            MedicalBook
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container style="padding-top: 60px; background-color: white;">
        <router-view />
      </q-page-container>

      <q-footer
        style="background-color: #F6F6F6"
        bordered
      >

          <q-tabs
            v-model="tab"
            indicator-color="transparent"
            dense
            align="justify"
          >
          <q-route-tab
            to="/explore"
            dense no-caps
            name="explorar"
            icon="eva-search-outline"
            label="Explorar"/>
          <q-route-tab
            to="/favorite"
            dense no-caps
            name="favoritos"
            icon="eva-heart-outline"
            label="Favoritos" />
          <q-route-tab
            to="/home"
            dense no-caps
            name="inicio"
            icon="eva-home-outline"
            label="Inicio" />
          <q-route-tab
            to="/note"
            dense no-caps
            name="notas"
            icon="far fa-sticky-note"
            label="Notas" />
          <q-route-tab
            to="/profile"
            dense no-caps
            name="perfil"
            icon="far fa-user"
            label="Perfil" />
        </q-tabs>

    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SecondaryLayout',
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
