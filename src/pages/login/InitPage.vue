<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="flex flex-center q-px-md container
    col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg"
    >
      <q-img src="img/BG.png" style="width: 350px; height: 530px;" loading="lazy">
        <div class="row login-btn-area absolute-bottom">
          <PrimaryButtom label="criar conta gratuita" :to="{name: 'register'}" />
          <q-btn rounded unelevated dense label="Já Tenho Conta" :to="{name: 'login'}"/>
        </div>
      </q-img>
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import PrimaryButtom from '../../components/PrimaryButtom.vue';

export default defineComponent({
  name: 'InitPage',
  components: {
    PrimaryButtom,
  },
  setup() {
    return {
    };
  },
});
</script>

<style scoped>
  .q-btn{
    min-width: 100%;
    border: 0.5px solid #49d166;
    color: #ffff;
    padding: 5px 30px;
    margin-top: 5px;
  }
</style>
