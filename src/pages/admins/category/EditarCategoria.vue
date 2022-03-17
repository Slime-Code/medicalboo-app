<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Standard" />
    </div>
    <div>
      <q-btn label="Enviar" v-model="title" icon="send"
        size="md" text-color="" style="background-color:"
        @click="listTopicsAproachs" />
      <q-btn label="Cancel" to="/admin/categories" color="red" flat class="q-ml-sm"
       style="align: right" v-close-popup />
    </div>
  </div>
</template>

<script>/* eslint-disable linebreak-style */
import { Notify } from 'quasar';
import { ref } from 'vue';
import useApi from '../../../composebles/useApi';

export default {
  name: 'EditarCategoria',
  props: {
    aux: {
      type: Object,
      required: 'Sem titulo',
    },
    title: {
      type: String,
      required: 'Sem titulo',
    },
  },

  setup() {
    const loading = ref(true);

    const { update } = useApi();

    const topics = ref([]);

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux = await update('categoria');
        topics.value = aux.map((elem) => elem.name);
        loading.value = false;
      } catch (error) {
        Notify(error);
      }
    };
    return {
      listTopicsAproachs,
      text: ref(''),
    };
  },
};
</script>
