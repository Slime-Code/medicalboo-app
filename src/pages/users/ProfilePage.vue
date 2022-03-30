<template>
    <q-page class="flex flex-center">
      <div class="column" align="center">
        <div class="col item">
            <q-btn style="background: #1A4B9A; color: #1378B3" round icon="fas fa-user" size="40px">
              <q-badge class="pic" style="background: #49D16B" rounded>
                <q-icon dense name="eva-camera-outline" color="white" size="30px"/>
              </q-badge>
            </q-btn>
        </div>
        <div class="col item">
          <h6 style="margin:0"> {{user.user_metadata.name}} </h6>
          <span>Assinatura Gratis</span>
        </div>
        <div class="col item q-ma-md">
          <div class="row">
            <div class="col">
              <q-btn
                to="meus-dados"
                no-caps
                outline
                unelevated
                rounded
                label="Meus dados"
                class="btn-profile btn-sec"
                />
            </div>
            <div class="col">
              <q-btn
                :to="{name: 'prime'}"
                no-caps
                no-wrap
                unelevated
                rounded
                text-color="black"
                icon="fas fa-crown"
                label="Quero ser Prime"
                class="btn-profile btn-prime"
                />
            </div>
          </div>
        </div>

        <q-spinner
          class="absolute-center"
          v-if="loading"
          size="xl"
          color="primary"
        />

        <div class="col item">
          <div class="column q-ma-md">
            <div class="col">
              <q-btn
                @click="dialogPassword=true"
                align="left"
                flat
                no-caps
                style="color: black"
                label="Editar Senha"
                icon-right="eva-arrow-ios-forward-outline"
                class="btn-opcao"/>
              <q-btn
                @click="dialogAvaliarApp=true"
                align="left"
                flat
                no-caps
                style="color: black"
                label="Avalie o app"
                icon-right="eva-arrow-ios-forward-outline"
                class="btn-opcao"/>
              <q-btn
                align="left"
                flat
                no-caps
                style="color: black"
                label="Convide amigos"
                icon-right="eva-arrow-ios-forward-outline"
                class="btn-opcao"/>
              <q-btn
                to="/codigo-acesso"
                align="left"
                flat
                no-caps
                style="color: black"
                label="Código de acesso"
                icon-right="eva-arrow-ios-forward-outline"
                class="btn-opcao"/>
              <q-btn
                align="left"
                flat
                no-caps
                style="color: black"
                label="Suporte"
                icon-right="eva-arrow-ios-forward-outline"
                class="btn-opcao"/>
              <q-btn
                align="left"
                flat
                no-caps
                style="color: black"
                label="Sobre o app"
                icon-right="eva-arrow-ios-forward-outline"
                class="btn-opcao"/>
              <q-btn
                @click="handleLogout"
                align="left"
                flat
                no-caps
                style="color: black"
                label="Sair"
                class="btn-opcao"/>
            </div>
          </div>
        </div>
      </div>
      <q-dialog v-model="dialogPassword" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Alterar Senha</div>
          </q-card-section>
          <q-form>
            <q-card-section class="q-pt-none">
              <q-input label="Antiga Senha"
                dense v-model.trim="formData.antigo"  autofocus />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input label="Nova Senha"
                dense v-model.trim="formData.password"  autofocus />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input label="Confirme a Nova Senha" dense
                v-model.trim="formData.password1"  autofocus />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn label="Cancelar" color="primary" v-ripple no-caps v-close-popup />
            <q-btn  label="Salvar" color="primary"
             @click="updatPassword" v-ripple no-caps v-close-popup />
          </q-card-actions>
          </q-form>

        </q-card>
      </q-dialog>

       <q-dialog v-model="dialogAvaliarApp">
        <q-card style="min-width: 350px">
          <q-card-section class="q-pb-none">
            <div class="text-h6 row items-center q-pb-none">
              <div>Avalie o App</div>
              <q-space/>
              <q-btn icon="close" flat round dense v-close-popup />
            </div>
          </q-card-section>
            <div class="q-pa-md">
              <q-form @submit="onSubmit" class="q-gutter-md">
                <q-rating
                  name="Qualidade"
                  v-model="quality"
                  max="5"
                  size="3.5em"
                  color="yellow"
                  icon="star_border"
                  icon-selected="star"
                  no-dimming
                />

                <div>
                  <q-btn label="Classificar" type="submit" color="primary"/>
                </div>
              </q-form>

              <q-card v-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
                <q-card-section>Obrigado pela sua classificação, ajudar-nos-a a melhorar o App:
                </q-card-section>
                <q-separator />
                <q-card-section class="row q-gutter-sm items-center">
                  <div
                    v-for="(item, index) in submitResult"
                    :key="index"
                    class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders
                     text-center text-no-wrap"
                  >{{ item.name }} = {{ item.value * 20}}{{porcento}}</div>
                </q-card-section>
              </q-card>
            </div>
        </q-card>
      </q-dialog>
    </q-page>
</template>

<script>
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import {
  showErrorNotification,
  showSuccessNotification,
} from 'src/functions/functionShowNotifications';
import { defineComponent, ref, onMounted } from 'vue';
import useAuthUser from 'src/composebles/useAuthUser';
import useApi from 'src/composebles/useApi';
import { useRouter, useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ProfilePage',
  setup() {
    const $q = useQuasar();

    const router = useRouter();

    const { post, getByField, update } = useApi();

    const route = useRoute();

    const { token } = route.query;

    const { logout, user, resetPassword } = useAuthUser();

    const dialogPassword = ref(false);

    const dialogAvaliarApp = ref(false);

    const loading = ref(false);

    const quality = ref(0);

    const submitResult = ref([]);

    const formData = ref({
      password: '',
      password1: '',
      antigo: '',
    });

    // ---- Classificação do APP -----------------
    const table = ref({
      id: null,
      valor: 0,
      user_id: '',
    });

    const updatClassification = async () => {
      try {
        if (table.value.id === null) {
          const tabela = table.value;
          delete tabela.id;
          table.value.user_id = user.value.id;
          loading.value = true;
          await post('classification', tabela);
          loading.value = false;
        } else {
          table.value.user_id = user.value.id;
          table.value.valor = quality.value;
          loading.value = true;
          await update('classification', table.value);
          loading.value = false;
        }
      } catch (error) {
        loading.value = false;
        showErrorNotification(`Classificação Não Foi Bem Sucedida Pelo Seguinte Erro: ${JSON.stringify(error)}`);
      }
    };
    // ---- Fim Classificação do APP -----------------

    // ---- Alterar a PASSword -----------------------

    const updatPassword = async () => {
      // eslint-disable-next-line max-len
      if (formData.value.password !== formData.value.password1) {
        // alert(JSON.stringify(user.value));
        $q.dialog({
          title: 'Falhou!',
          message: 'Senha Errada... Pretendes Repetir ?',
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          dialogPassword.value = true;
        });
      } else {
        $q.dialog({
          title: 'Alterar Senha:',
          message: 'Tens a certeza que queres alterar a Senha ?',
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          try {
            loading.value = true;
            user.value.password = formData.value.password1;

            await resetPassword(token, formData.value.password);
            loading.value = false;
            showSuccessNotification(`Alteração Feita Com sucesso : ${formData.value.password1}`);
          } catch (error) {
            loading.value = false;
            showErrorNotification(`Alteração Não Foi Bem Sucedido Pelo Seguinte Erro: ${JSON.stringify(error)}`);
          }
        });
      }
    };
    // ---- Fim Alterar a PASSword --------------------------

    // ---- Terminar sessão ----------------------------------

    const handleLogout = async () => {
      $q.dialog({
        title: 'Logout',
        message: 'Tens a certeza que queres Sair ?',
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        try {
          loading.value = true;
          await logout();
          loading.value = false;
          router.replace({ name: 'login' });
        } catch (error) {
          loading.value = false;
          showErrorNotification(`A Sessão Não Pode Ser Terminada Pelo Seguinte Erro: ${JSON.stringify(error)}`);
        }
      });
    };
    // ---- Fim Terminar sessão -----------------------

    // ---- Será Alterado...... -----------------------
    const listTable = async () => {
      // loading.value = true;
      try {
        const valor = 0;
        const aux = await getByField('classification', table.value.user_id, valor);
        if (aux.length > 0) {
          const qualquer = aux.map((e) => e.id);
          // eslint-disable-next-line prefer-destructuring
          table.value.id = qualquer[0];
          quality.value = aux.map((e) => e.valor);
        } else {
          quality.value = 0;
        }
      } catch (error) {
        showErrorNotification(`A Sessão Não Pode Ser Terminada Pelo Seguinte Erro: ${JSON.stringify(error)}`);
      }
      /// loading.value = false;
    };
    onMounted(async () => {
      listTable();
    });

    return {
      porcento: '%',
      user,
      table,
      dialogAvaliarApp,
      formData,
      loading,
      dialogPassword,
      updatPassword,
      handleLogout,
      updatClassification,
      slide: ref('style'),

      quality,
      submitResult,

      onSubmit(evt) {
        const form = new FormData(evt.target);
        const data = [];

        for (const [name, value] of form.entries()) {
          data.push({
            name,
            value,
          });
          table.value.valor = value;
        }

        submitResult.value = data;
        updatClassification();
      },
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
