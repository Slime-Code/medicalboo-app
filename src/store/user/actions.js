import { Loading, LocalStorage } from 'quasar';
import {
  showErrorNotification,
  showSuccessNotification,
} from 'src/functions/functionShowNotifications';
import axios from 'axios';
import { api } from 'boot/axios';

function login({ commit }, payload) {
  Loading.show();

  axios.get('http://127.0.0.1:8000/api/sanctum/csrf-cookie')
    .then(() => {
      axios
        .post('http://127.0.0.1:8000/api/login', {
          email: payload.email,
          password: payload.password,
        })
        .then((response1) => {
          commit('setLoggedIn', true);
          // console.log(response1.data.user);
          const userType = response1.data.user.type;

          api.defaults.headers.common.Authorization = `Bearer ${response1.data.token}`;

          axios
            .get('http://127.0.0.1:8000/api/user')
            .then((response) => {
              commit('setDetails', response.data);

              showSuccessNotification('Seja bem vindo!');

              if (userType === 'admin') {
                this.$router.push('/admin');
              } else {
                this.$router.push('/home');
              }
            })
            .catch(() => {
              showErrorNotification('Falha ao carregar detalhes do usuário!');

              commit('setLoggedIn', false);
            });
        })
        .catch(() => {
          showErrorNotification('Palavra-passe ou nome de usuário incorrectos');
        });
    })
    .catch(() => {
      showErrorNotification('Algo correu mal, tente novamente mais tarde');
    });

  return true;
}

function getState({ commit }) {
  const loggedIn = LocalStorage.getItem('user.loggedIn') || false;
  const details = LocalStorage.getItem('user.details') || {};

  commit('setLoggedIn', loggedIn);
  commit('setDetails', details);
}

/*
function register() {
  // -----------
}
*/

function setDataForm({ commit }, payload) {
  if (payload.name) {
    commit('setFormOne', payload);
  } else if (payload.email) {
    commit('setFormSecond', payload);
  } else if (payload.graduation_year) {
    commit('setFormThird', payload);
  }
}
export { login, getState, setDataForm };
