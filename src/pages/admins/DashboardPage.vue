<template>
  <q-page class="flex flex-center">
    <div class="row" style="min-width: 100%">
      <div class="col-6 col-sm-3">
        <CardDashboard
        titulo="Clientes"
        percentagem="12"
        quantidade="97"
        icon="fas fa-users"/>
      </div>
      <div class="col-6 col-sm-3">
        <CardDashboard
        titulo="Clientes"
        percentagem="12"
        quantidade="97"
        icon="fas fa-users"/>
      </div>
      <div class="col-6 col-sm-3">
        <CardDashboard
        titulo="Clientes"
        percentagem="12"
        quantidade="97"
        icon="fas fa-users"/>
      </div>
      <div class="col-6 col-sm-3">
        <CardDashboard
        titulo="Clientes"
        percentagem="12"
        quantidade="97"
        icon="fas fa-users"/>
      </div>
    </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue';
import CardDashboard from '../../components/CardDashboard.vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    CardDashboard,
  },
});
</script>
