<template>
    <q-layout >
    <q-header bordered class="bg-white" >
      <q-toolbar>
        <q-btn :to="{name: 'home'}" flat text-color="grey" icon="arrow_back" />
        <q-space />
          <div class="q-gutter-x-sm">
            <q-btn flat dense round color="grey" icon="edit"/>
            <q-btn flat dense round color="grey" icon="message"/>
            <q-btn flat dense  round color="grey" icon="share"/>
          </div>
      </q-toolbar>
    </q-header>

     <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
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
  
</style>
