/* eslint-disable */
import { LocalStorage } from 'quasar';

function setLoggedIn(state, value) {
  state.loggedIn = value;

  LocalStorage.set('user.loggedIn', value);
}

function setDetails(state, payload) {
  state.details = payload;

  LocalStorage.set('user.details', payload);
}
function setFormOne(state, payload) {
  state.formData.name = payload.name
  state.formData.birthday = payload.birthday
  state.formData.cpf = payload.cpf
  state.formData.nationality = payload.nationality
  state.formData.profile_type_id = payload.profile_type_id
  state.formData.phone = payload.phone
}
function setFormSecond(state, payload) {
  state.formData.email = payload.email
  state.formData.password = payload.password
}
function setFormThird(state, payload) {
  state.formData.occupation_area = payload.occupation_area
  state.formData.graduation_year = payload.graduation_year
}
export { setLoggedIn, setDetails, setFormOne, setFormSecond, setFormThird };