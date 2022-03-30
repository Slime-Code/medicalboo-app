<template>
  <div class="col-md-4 col-sm-6 col-xs-10">
    <q-layout >
    <q-header bordered class="bg-white" >
      <q-toolbar>
        <q-btn :to="{name: 'home'}" flat text-color="grey" icon="arrow_back" />
        <q-space />
          <div class="q-gutter-x-md">
            <q-icon color="grey" name="edit"/>
            <q-icon color="grey" name="message"/>
            <q-icon color="grey" name="share"/>
          </div>
      </q-toolbar>
    </q-header>

    <br><br><br>

    <div class="justify-center q-gutter-y-md"><br>
      <div class="q-row q-gutter-x-md"
      style="margin: 0 auto; padding: 3px 10px ;
        margin-left: 20px; border-left: 5px solid #1F60A9;">
          {{ approach.title }}
        <q-icon name="favorite" style="color: #ccc; font-size: 1.2em; margin-top-left: 10px" />
      </div><br>

      <div class="flex-center col q-gutter-y-md text-blue-9">
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          icon="settings"
          label="Definição"
        >
          <div class="tex-black-10" style="color: #1E1E1E">
            <q-card>
              <q-card-section>
                {{approach.definition}}
              </q-card-section>
            </q-card>
          </div>
        </q-expansion-item>

        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          icon="addchart"
          label="Diagnóstico"
        >
          <div class="tex-black-10" style="color: #1E1E1E">
            <q-card>
              <q-card-section>
                {{approach.diagnosis}}
              </q-card-section>
            </q-card>
          </div>
        </q-expansion-item>

        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          icon="vaccines"
          label="Exames Complementares"
        >
          <div class="tex-black-10" style="color: #1E1E1E">
            <q-card>
              <q-card-section>
                {{approach.complentary}}
              </q-card-section>
            </q-card>
          </div>
        </q-expansion-item>
        <q-spinner
        class="absolute-center"
        v-if="loading"
        size="xl"
        color="primary"
      />
      </div>
    </div>
  </q-layout>
  </div>
</template>

<script>
import {
  showErrorNotification,
} from 'src/functions/functionShowNotifications';
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useApi from '../composebles/useApi';

export default defineComponent({
  name: 'ApproachDetalhesLayout',

  setup() {
    const loading = ref(true);
    const { getById } = useApi();
    const route = useRoute();
    const approach = ref({});

    const getApproachById = async () => {
      try {
        loading.value = true;
        approach.value = await getById('approach', route.params.id);
        loading.value = false;
      } catch (error) {
        showErrorNotification(error);
      }
    };

    onMounted(() => {
      getApproachById();
    });

    return {
      approach,
      loading,
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
