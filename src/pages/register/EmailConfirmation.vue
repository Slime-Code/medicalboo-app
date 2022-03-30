<template>
  <div class="col-md-4 col-sm-6 col-xs-10">
    <q-page padding class="absolute-center">
    <br><br>
    <q-btn icon="logout" label="voltar" to="/"/>
    <q-btn flat size="20px"  label="MedicalBook"
     style="color: #414141; font-weight: bold; margin: 0 auto;
     padding: 5px 20px ; border-left: 5px solid #013b68;"/>
    <br><br>
    <div class="col-md-4 col-sm-6 col-xs-10">
      <q-btn icon="gmail" align="center" size="30px" class="justify-center"
        style="background: #1A4B9A; color: #ffff; padding: 40px 8px ;">
         Obrigado Por se Registar na nossa Plataforma
         Por favor enter no seu e-mail para confirmar e concluir o Registo... Link:
          <a style="color: #23A680" href="https://mail.google.com/mail/u/0/?tab=km#inbox"><strong>{{ $route.query.email }}</strong></a>
      </q-btn>
    </div>
  </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageEmailConfirmation',
});
</script>
