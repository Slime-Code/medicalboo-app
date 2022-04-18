<template>
  <q-layout view="lHr LpR lFr" class="bg-grey-1">
    <div class="col-md-4 col-sm-6 col-xs-10">
      <q-header elevated class="bg-white text-grey-8" height-hint="64">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="toggleLeftDrawer"
            aria-label="Menu"
            icon="menu"
            class="q-mx-md"
          />

          <q-btn flat dense color="grey-8" no-caps label="Início" class="q-ml-sm q-px-md"/>

          <q-btn flat dense color="grey-8" no-caps label="Suporte" class="q-ml-sm q-px-md" />

          <q-space/>

          <q-btn
            @click="dilogPremi = true"
            size="13px"
            no-caps
            no-wrap
            unelevated
            text-color="black"
            icon="fas fa-crown"
            label="Premium"
            class="btn-profile btn-prime q-ml-sm q-px-md"
            style="background-color: #FFC300;"
          />
        </q-toolbar>
      </q-header>

      <q-footer class="bg-white text-grey-8">
        <q-toolbar bordered class="q-pa-md">
          <q-toolbar-title class="text-body1">
  <p> <strong> copyright 2022-2023 </strong>
          <strong style="color: #007BCE"> MedicalBook</strong>. Todos os direitos reservados. </p>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      >
        <q-list>
          <div class="flex flex-center">
            <div class="column" align="center">
              <div class="col item q-pt-lg">
                  <q-btn style="background: #1A4B9A; color: #1378B3"
                    round icon="fas fa-user"
                    size="40px">
                    <q-badge class="pic" style="background: #49D16B" rounded>
                      <q-icon dense name="camera" color="white" size="30px"/>
                    </q-badge>
                  </q-btn>
              </div>
            </div>
          </div>
          <div class="text-center">
            <q-item
              clickable
            >
              <q-item-section>
                <q-item-label
                  header
                >
                  <strong>{{user.user_metadata.name}}</strong><br>
                  <span>Administrador</span>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <q-separator />
          <q-separator />
          <ItemMenuSideBar
            v-for="link in principaisLinks"
            :key="link.title"
            v-bind="link"
          />

          <q-list class="rounded-borders">
            <q-expansion-item
              dense
              dense-toggle
              expand-separator
              icon="person"
              label="Usuários"
            >
              <q-expansion-item :to="{name: 'admin'}" switch-toggle-side dense-toggle label="Admin"/>

              <q-expansion-item  :to="{name: 'users'}" switch-toggle-side dense-toggle label="Normal"/>
            </q-expansion-item><br>
          </q-list><br>
          <q-btn flat icon="logout" label="Sair" @click="handleLogout"/>
          <br>
        </q-list>
      </q-drawer>

      <q-page-container class="GPL__page-container">
        <router-view />
        <q-dialog v-model="dilogPremi" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6 row item-start">
                <q-icon name="fas fa-crown" style="margin-right: 10px"/> Alterar valor do pacote Premium
                <q-space/>
                <q-btn icon="close" flat round dense v-close-popup />
              </div>
              <q-separator />
            </q-card-section><br>
            <q-form @submit="updatValuePremium">
              <q-card-actions align="left" class="text-primary">
                <q-input filled v-model="money" type="number" label="valor" style="max-width: 150px; width: 150px;" suffix="R$ "/>
                <q-btn  label="Salvar Valor" size="19px" no-caps no-wrap unelevated style="background-color: #FFC300; margin-left: 10px; max-width: 150px; width: 150px" text-color="black"  type="submit" v-ripple v-close-popup />
              </q-card-actions><br>
            </q-form>
          </q-card>

        </q-dialog>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import ItemMenuSideBar from 'components/ItemMenuSideBar.vue';
// import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const linksList = [
  {
    title: 'Dashboard',
    icon: 'event',
    link: '/admin/',
  },
  {
    title: 'Categorias',
    icon: 'school',
    link: '/admin/categories',
  },
  {
    title: 'Tópicos',
    icon: 'chat_bubble',
    link: '/admin/topics',
  },
  {
    title: 'Abordagens',
    icon: 'receipt',
    link: '/admin/approaches',
  },
  {
    title: 'Áreas de oucupação',
    icon: 'work',
    link: '/admin/occupation-areas',
  },
  {
    title: 'Tipos de abordagens',
    icon: 'folder',
    link: '/admin/tipos-De-Abordagens',
  },
];

import { ref, onMounted } from 'vue';
import {
  showErrorNotification,
} from 'src/functions/functionShowNotifications';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import useAuthUser from 'src/composebles/useAuthUser';
import useApi from 'src/composebles/useApi';

export default {
  name: 'AdminLayout',
  components: {
    ItemMenuSideBar,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref('');
    const storage = ref(0.26);

    const $q = useQuasar();

    const router = useRouter();

    const loading = ref(false);

    const dilogPremi = ref(false);

    const money = ref(297.90);

    const form = { valor: 0.0, id: 1 };

    const { logout, user } = useAuthUser();

    const { list, update } = useApi();

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

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

    const getValuePremium = async () => {
      const aux = await list('valorPremium');
      money.value = aux.map((e) => e.valor);
    };

    const updatValuePremium = async () => {
      form.valor = money.value;
      await update('valorPremium', form);
    };

    onMounted(() => {
      getValuePremium();
    });

    return {
      user,
      updatValuePremium,
      dilogPremi,
      leftDrawerOpen,
      search,
      storage,
      principaisLinks: linksList,

      toggleLeftDrawer,
      miniState: ref(true),
      handleLogout,
      money,
    };

  },
};
</script>
