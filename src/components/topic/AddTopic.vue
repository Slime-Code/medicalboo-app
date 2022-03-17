<template>
  <q-card class="q-pa-md" style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Novo Tópico</div>
    </q-card-section>

    <form @submit.prevent="formSubmit">
      <q-card-section class="q-pt-none">
        <div class="q-mb-md">
          <q-input
            label="Nome do tópico"
            dense
            v-model="formData.title"
            autofocus
            @keyup.enter="prompt = false"
            lazy-rules
            :rules="titleRules"
            ref="title"
          />
        </div>

        <div class="q-mb-md">
          <q-select
            v-model="formData.category_id"
            :options="categories"
            label="Categoria do tópico"
          />
        </div>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn type="submit" flat label="Adicionar" v-close-popup />
      </q-card-actions>
    </form>
  </q-card>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddTopic',
  data() {
    return {
      formData: {
        title: '',
        category_id: '',
      },
    };
  },
  setup() {
    return {
      categories: [
        {
          label: 'Google',
          value: 'Google',
          description: 'Search engine',
          icon: 'mail',
        },
        {
          label: 'Facebook',
          value: 'Facebook',
          description: 'Social media',
          icon: 'bluetooth',
        },
      ],
    };
  },
  methods: {
    formSubmit() {
      console.log('Clicou');
    },
  },
});
</script>
