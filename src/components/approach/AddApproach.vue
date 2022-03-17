<template>
  <q-card class="q-pa-md" style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Nova Abordagem</div>
    </q-card-section>

    <form @submit.prevent="formSubmit">
      <q-card-section class="q-pt-none">
        <div class="q-mb-md">
          <q-input
            label="Título"
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
          <q-input
            label="Definição"
            dense
            v-model="formData.definition"
            autofocus
            @keyup.enter="prompt = false"
            lazy-rules
            :rules="definitionRules"
            ref="definition"
          />
        </div>

        <div class="q-mb-md">
          <q-input
            label="Diagnóstico"
            dense
            v-model="formData.diagnosis"
            autofocus
            @keyup.enter="prompt = false"
            lazy-rules
            :rules="diagnosisRules"
            ref="diagnosis"
          />
        </div>

        <div class="q-mb-md">
          <q-input
            label="Exames complementares"
            dense
            v-model="formData.complentary_exams"
            autofocus
            @keyup.enter="prompt = false"
            lazy-rules
            :rules="complentary_examsRules"
            ref="complentary_exams"
          />
        </div>

        <div class="q-mb-md">
          <q-select
            v-model="formData.type_approach"
            :options="typeApproaches"
            label="Tipo de abordagens"
          />
        </div>

        <div class="q-mb-md">
          <q-select
            v-model="formData.topic_id"
            :options="topicId"
            label="Tópico"
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
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'AddApproach',
  data() {
    return {
      formData: {
        title: '',
        definition: '',
        diagnosis: '',
        complentary_exams: '',
        type_approach: '',
        topic_id: '',
      },
    };
  },
  setup() {
    return {
      typeApproaches: [
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
      topicId: [
        {
          label: 'Geral',
          value: 'Geral',
          description: 'Search engine',
          icon: 'mail',
        },
        {
          label: 'Oftamologista',
          value: 'Oftamologista',
          description: 'Social media',
          icon: 'bluetooth',
        },
      ],
      titleRules: [
        (val) => (val && val.length > 0) || 'Por favor digite alguma coisa',
      ],
      definitionRules: [
        (val) => (val && val.length > 0) || 'Por favor digite alguma coisa',
      ],
      diagnosisRules: [
        (val) => (val && val.length > 0) || 'Por favor digite alguma coisa',
      ],
      complentary_examsRules: [
        (val) => (val && val.length > 0) || 'Por favor digite alguma coisa',
      ],
    };
  },
  methods: {
    ...mapActions('approach', ['addApproach']),
    formSubmit() {
      this.$refs.title.validate();
      this.$refs.definition.validate();
      this.$refs.diagnosis.validate();
      this.$refs.complentary_exams.validate();
      if (this.$refs.title.hasError || this.$refs.definition.hasError
        || this.$refs.diagnosis.hasError || this.$refs.complentary_exams.hasError) {
        this.$q.notify({
          color: 'negative',
          message: 'Campos inseridos incorrectamente. Verifique',
        });
      } else {
        if (this.submitApproach()) {
          this.$q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Abordagem criada com sucesso!',
          });
        } else {
          this.$q.notify({
            color: 'negative',
            message: 'Ocorreu algum erro ao criar o abordagem',
          });
        }

        return true;
      }

      return true;
    },

    submitApproach() {
      return this.addApproach(this.formData);
    },
  },
});
</script>
