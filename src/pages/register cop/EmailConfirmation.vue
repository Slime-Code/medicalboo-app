<template>
  <q-page padding>
    <p class="text-bory1"> Obrigado Por se Registar na nossa Plataforma</p>
    <p class="text-bory1"> Por favor confirma o seu Email para terminar o Registo:
      <strong>{{ $route.query.email }}</strong>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageEmailConfirmation',
});
</script>
