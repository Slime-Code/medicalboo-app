<template>
  <div class="col-md-4 col-sm-6 col-xs-10">
    <q-layout >
    <q-header bordered class="bg-white" >
      <q-toolbar>
        <q-btn :to="{name: 'approach'}"  icon="arrow_back" color="grey" />
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
      <div class=" explore q-row q-gutter-x-lg"
      style="margin: 0 auto; padding: 3px 10px ;
        margin-left: 20px; border-left: 5px solid #013b68;">
          {{ topics[0] }}
        <q-icon name="favorite" style="color: #ccc; font-size: 1.2em; margin-top-left: 10px" />
      </div><br>

      <div class="flex-center col q-gutter-y-md">
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          icon="settings"
          label="Definição"
        >
          <q-card>
            <q-card-section>
              {{definicao}}
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          icon="addchart"
          label="Diagnóstico"
        >
          <q-card>
            <q-card-section>
              {{diagnostico}}
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          icon="vaccines"
          label="Exames Complementares"
        >
          <q-card>
            <q-card-section>
              {{exComplementar}}
            </q-card-section>
          </q-card>
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
import useApi from '../composebles/useApi';

export default defineComponent({
  name: 'SecondaryLayout',
  setup() {
    const loading = ref(true);

    const { list } = useApi();

    const topics = ref([]);
    const definicao = ref([]);
    const diagnostico = ref([]);
    const exComplementar = ref([]);

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux = await list('approach');
        topics.value = aux.map((elem) => elem.title);
        definicao.value = aux.map((elem) => elem.definition);
        diagnostico.value = aux.map((elem) => elem.diagnosis);
        exComplementar.value = aux.map((elem) => elem.complentary);
        loading.value = false;
      } catch (error) {
        loading.value = false;
        showErrorNotification(error);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });
    return {
      exComplementar,
      diagnostico,
      definicao,
      topics,
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
