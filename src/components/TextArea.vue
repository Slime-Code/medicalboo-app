<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="textarea">
      <q-input
        v-model="text"
        type="textarea"
        label="digite a sua nota aqui"
        color="white"
        size="2px"
      />
      <div class="textarea-color"></div>
    </div>
    <div class="textarea-rodape">
      <span class="rodape-titulo">{{ title }}</span>
      <span>{{ date }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TextArea',
  props: {
    title: {
      type: String,
      required: 'Sem titulo',
    },

    date: {
      type: String,
      required: '00/00/0000',
    },

    color: {
      type: String,
      default: 'red',
    },
  },
  setup() {
    return {
      text: ref(''),
    };
  },
});
</script>

<style lang="sass" scoped>
.textarea
  border: 1px solid #ccc
  padding: 5px
  border-radius: 10px
.textarea-color
  max-width: 20%
  height: 5px
  background: red
  border-radius: 20px
</style>
