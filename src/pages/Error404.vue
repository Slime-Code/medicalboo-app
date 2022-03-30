<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Rota Inválida, Não há nada nessa Página...!!!
      </div>
      <div class="text-h4" style="opacity:.4">
        Clique no Botão A baixo Para Voltar na Página Inicial:
      </div>

      <q-btn
        icon="arrow_back"
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Página Inicial"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error404',
});
</script>
