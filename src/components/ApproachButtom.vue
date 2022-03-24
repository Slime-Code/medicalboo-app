<template>
  <a :href="link" class="q-link cursor-pointer q-ma-xs">
    <q-banner rounded class="bg-white text-grey-6 q-approach">
      <div class="row">
        <div class="col q-py-xs">
          {{ title }}
        </div>
        <div class="col-grow-1 q-pa-xs">
          <q-icon v-if="accessCap" name="favorite" />
        </div>
        <div class="col-grow-1">
          <div class="q-approach-bar"></div>
        </div>
      </div>
    </q-banner>
  </a>
</template>

<script>
import { defineComponent } from 'vue';
import ApproachDetalhesLayout from '../layouts/ApproachDetalhesLayout.vue';

export default defineComponent({
  name: 'ApproachButtom',

  components: {
    ApproachDetalhesLayout,
  },

  props: {
    title: {
      type: String,
      required: 'Sem titulo',
    },

    icon: {
      type: String,
      default: 'img:img/feto.png',
    },

    color: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: 'http://localhost:8082/approach-detail/',
    },
    accessCap: {
      type: Boolean,
      default: true,
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
    border-radius: 20px
</style>
