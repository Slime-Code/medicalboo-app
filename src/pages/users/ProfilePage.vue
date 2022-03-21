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
          <h6 style="margin:0">Henrique Silva</h6>
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

       <q-dialog v-model="dialogAvaliarApp" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Avalie o App</div>
          </q-card-section>
          <q-form>
            <q-card-section class="q-pt-none">
              <q-option-group
                v-model="cont"
                checked-icon="thumb_up" unchecked-icon="thumb_down"
                :options="type"
                color="primary"
                inline
              />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn label="Cancelar" color="primary" v-ripple no-caps v-close-popup />
            <q-btn  label="Salvar" color="primary"
             @click="updatClassification" v-ripple no-caps v-close-popup />
          </q-card-actions>
          </q-form>

        </q-card>
      </q-dialog>
    </q-page>
</template>

<script>
/* eslint-disable no-unused-expressions */
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

    const { update, list } = useApi();

    const { resetPassword } = useAuthUser();

    const route = useRoute();

    const { token } = route.query;

    const { logout, user } = useAuthUser();

    const dialogPassword = ref(false);

    const dialogAvaliarApp = ref(false);

    const loading = ref(true);

    const cont = ref(0);

    const formData = ref({
      password: '',
      password1: '',
      antigo: '',
    });

    const table = ref({
      id: 1,
      like: 0,
      dislike: 0,
      people: 0,
    });
    const type = ref([
      {
        label: 'Gosto',
        value: 1,
      },
      {
        label: 'Não Gosto',
        value: 2,
      },
    ]);

    const updatClassification = async () => {
      if (cont.value === 0) {
        try {
          if (cont.value === 1) {
            table.value.like += 1;
          } else if (cont.value === 2) {
            table.value.dislike += 1;
          }
          table.value.people += 1;
          loading.value = true;
          await update('classification', table.value);
          loading.value = false;
          showSuccessNotification('Classificado com sucesso!!');
        } catch (error) {
          showErrorNotification(`Classificação Não Foi Bem Sucedida Pelo Seguinte Erro: ${JSON.stringify(error)}`);
        }
      } else {
        showErrorNotification('Já Fizeste a Classificação do App!!!');
      }
    };

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
            showErrorNotification(`Alteração Não Foi Bem Sucedido Pelo Seguinte Erro: ${error}`);
          }
        });
      }
    };

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
          showErrorNotification(`A Sessão Não Pode Ser Terminada Pelo Seguinte Erro: ${error}`);
        }
      });
    };
    const listTable = async () => {
      loading.value = true;
      const tabela = await list('classification');
      table.value.like = tabela.value.like;
      table.value.dislike = tabela.value.dislike;
      table.value.people = tabela.value.people;
      loading.value = false;
    };
    onMounted(() => {
      listTable();
    });

    return {
      cont,
      table,
      type,
      dialogAvaliarApp,
      formData,
      loading,
      dialogPassword,
      updatPassword,
      handleLogout,
      updatClassification,
      slide: ref('style'),
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
