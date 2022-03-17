<template>
  <q-btn
    unelevated
    :to="link"
    rounded
    :label="label"
    :id="id"
    :type="type"
    dense/>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrimaryButtom',
  props: {
    label: {
      type: String,
      required: 'Botão',
    },

    id: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
  .q-btn{
    min-width: 100%;
    border: 0.5px solid #49d166;
    background-color: #49d166;
    color: #FFF;
    padding: 5px 30px;
    font-weight: normal;
    .q-btn__content {
      padding: 10px;
    }
  }
</style>
