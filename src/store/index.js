import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';

import user from './user';
import approach from './approach';
import category from './category';
import note from './note';
import profile from './profile';
import topic from './topic';
import accessTopicUser from './access-topic-user';
import favoriteApproachUser from './favorite-approach-user';
import occupationArea from './occupation-area';
import profileType from './profile-type';
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const Store = createStore({
    modules: {
      user,
      approach,
      category,
      note,
      profile,
      topic,
      accessTopicUser,
      favoriteApproachUser,
      occupationArea,
      profileType,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
