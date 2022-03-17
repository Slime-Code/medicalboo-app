<template>
  <q-card class="q-pa-md" style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Editar Tipo de Perfil</div>
    </q-card-section>

    <form @submit.prevent="formSubmit">
      <q-card-section class="q-pt-none">
        <div class="q-mb-md">
          <q-input
            label="Tipo de perfil"
            dense
            v-model="formData.description"
            autofocus
            @keyup.enter="prompt = false"
            lazy-rules
            rules="required"
            ref="description"
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
  name: 'EditProfileType',
  data() {
    return {
      formData: {
        description: '',
      },
    };
  },
  methods: {
    formSubmit() {
      console.log('Clicou');
    },
  },
});
</script>
