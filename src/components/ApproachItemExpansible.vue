<template>
  <q-expansion-item
      :label="name"
      :key="key"
      :id="id"
    >
      <q-card>
        <q-card-section>
          {{ content }}
        </q-card-section>
      </q-card>
    </q-expansion-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ApproachItemExpansible',
  props: {
    name: {
      type: String,
      required: 'Sem titulo',
    },

    content: {
      type: String,
      default: 'Vazio',
    },

    key: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="sass" scoped>
  .q-approach
    border: 2px solid #f0f0f0
  .q-approach-bar
    width: 5px
    min-height: 10px
    height: 100%
    padding: 2px 0
    background: red
    margin: 0 5px
    margin-left: 10px
    border-radius: 2px
</style>
