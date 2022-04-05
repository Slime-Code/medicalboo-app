<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <span class="medium-screen-only">MedicalBook</span>
          <span class="non-medium-screen-only" style="font-size: .8em;">MedicalBook</span>
        </q-toolbar-title>

        <div class="medium-screen-only">
          <q-btn no-caps icon="perm_identity" flat label="Yuri José Rego"/>
          <q-btn to="/" icon="logout" flat label="sair"/>
        </div>
        <div class="non-medium-screen-only">
          <q-btn no-caps icon="perm_identity" flat round dense/>
          <q-btn icon="logout" flat round dense @click="handleLogout()"/>
        </div>
      </q-toolbar>
    </q-header>

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
                <strong>Yuri José Rego</strong><br>
                <span>Administrador</span>
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <ItemMenuSideBar
          v-for="link in principaisLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ItemMenuSideBar from 'components/ItemMenuSideBar.vue';

const linksList = [
  {
    title: 'Dashboard',
    icon: 'event',
    link: '/admin',
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
  // {
  //   title: 'Tipos de perfis',
  //   icon: 'perm_identity',
  //   link: '/admin/profile-types',
  // },
  // {
  //   title: 'Usuarios',
  //   icon: 'group',
  //   link: '/admin/users',
  // },
];
import { defineComponent, ref } from 'vue';

import {useQuasar } from 'quasar'

import useAuthUser from "../composebles/useAuthUser"
import {useRouter} from "vue-router"
export default defineComponent({
  name: 'AdminLayout',
  components: {
    ItemMenuSideBar,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const { logout } = useAuthUser()
    const $q = useQuasar()
    const router = useRouter()

     const handleLogout = async () => {
      $q.dialog({
        title: 'Logout',
        message: 'Quer realmente sair?',
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        await logout();
        router.replace({ name: 'login' });
      });
    };

    return {
      handleLogout,
      principaisLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="sass" scoped>
  .q-header
    background-color: #0053ab
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
</style>
