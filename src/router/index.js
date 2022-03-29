import { route } from 'quasar/wrappers';
import {
  createRouter, createMemoryHistory, createWebHistory, createWebHashHistory,
} from 'vue-router';
import useAuthUser from 'src/composebles/useAuthUser';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route((/* { store, ssrContext } */) => {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE),
  });

  // eslint-disable-next-line consistent-return
  Router.beforeEach((to) => {
    const { user } = useAuthUser();
<<<<<<< HEAD
    if (
      to.hash.includes('type=recovery')
      && to.name !== 'profile'
    ) {
      const accessToken = to.hash.split('&')[0];
      const token = accessToken.replace('#acess_token=', '');
      return { name: 'profile', query: { token } };
    }

    const isLoggedIn = !!user.value;

    if (
      !isLoggedIn
      && to.meta.requaresAuth
=======
       if (
         to.hash.includes('type=recovery')
         && to.name !== 'reset-password'
       ) {
         const accessToken = to.hash.split('&')[0];
         const token = accessToken.replace('#acess_token=', '');
         return { name: 'reset-password', query: { token } };
       }

    const isLoggedIn = !!user.value

    if (
     !isLoggedIn
      && to.meta.requiresAuth
>>>>>>> 4e649f28a28b85ba588b150d2f7731d655e95b48
      && !Object.keys(to.query).includes('fromEmail')
    ) {
      return { name: 'login' };
    }

   
  });

  return Router;
});
