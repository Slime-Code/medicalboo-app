<template>
  <a :href="link+id"
  class="q-link rounded-borders q-pa-md q-ma-md cursor-pointer column justify-center bg-grey-1">
    <div class="row no-wrap items-center">
      <q-avatar
        :color="color_icon"
        text-color="white"
        :icon="icon" />
        <div class="col q-pl-lg">
          <div class="text-uppercase">{{ title }}</div>
        <div class="text-weight-bold">{{ caption }}</div>
      </div>
    </div>
  </a>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopicButtom',
  props: {
    title: {
      type: String,
      required: 'Sem titulo',
    },

    caption: {
      type: String,
      default: '',
    },

    icon: {
      type: String,
      default: 'img:img/feto.png',
    },

    color_icon: {
      type: String,
      default: 'teal',
    },

    id: {
      type: Number,
    },

    link: {
      type: String,
      default: '/approach/',
    },
  },
});
</script>

<style lang="sass" scoped>
  .q-link
    text-decoration: none
    color: black
    border: 0.5px solid #f2f2f2
  .q-link:hover
    border: 0.5px solid #e0e0e0
</style>
