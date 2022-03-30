<template>
  <q-page class="flex flex-center">
    <q-form @submit="handleResetEmail">
      <div class="column" align="center">
        <div class="col item full-width" style="max-width: 500px">
          <q-input v-model="text" label="Senha Antiga" />
          <q-input v-model="email" label="Digite sua Nova Senha" />
          <q-input v-model="email2" label="Digite sua Nova Senha" />
          <div v-if="email === email2 && email !== ''" class=" q-pt-md q-gutter-y-md">
            <q-btn
              no-caps
              label="Enviar"
              class="full-width"
              color="primary"
              type="submit"
            />
         </div>
        </div>
     </div>
    </q-form>
  </q-page>
</template>

<script>
import {
  showSuccessNotification,
} from 'src/functions/functionShowNotifications';
import { defineComponent, ref, onMounted } from 'vue';
import useAuthUser from 'src/composebles/useAuthUser';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'EditarSenha',
  setup() {
    const router = useRouter();

    const { user } = useAuthUser();

    const aux = ref(user);

    const { password } = aux;

    const valid = ref(true);

    // alert(JSON.stringify(aux.value));

    const { sendPasswordRestEmail } = useAuthUser();

    const email = ref('');
    const email2 = ref('');
    const text = ref('');

    const handleResetEmail = async () => {
      try {
        await sendPasswordRestEmail(text.value);
        showSuccessNotification(`Senha Alterada com Sucesso: ${text.value}`);
        router.replace({ name: '' });
      } catch (error) {
        alert(error);
      }
    };

    onMounted(() => {
      if (email.value === email2.value) {
        valid.value = false;
      }
    });

    return {
      handleResetEmail,
      password,
      user,
      text,
      email,
      email2,
      valid,
    };
  },
});
</script>

<style lang="sass" scoped>
  .pic
    position: absolute
    top: 85px
    left: 80px
  .item
    margin-bottom: 20px
  .btn-profile
    min-width: 150px
    width: 95%
    margin-right: 10px
  .btn-prime
    background: #FFAF00
  .btn-prime .q-icon
    font-size: .4em
  .btn-opcao
    border-bottom: 1px solid #CCCCCC
    width: 90%
    text-align: left
    margin-bottom: 10px
  .btn-opcao.q-btn__content
    min-width: 100%
  .btn-opcao.q-btn__content.block
    flex-grow: 3
</style>
