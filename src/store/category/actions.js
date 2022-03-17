import Category from '../../api/Category';

export function getCategories({ commit }) {
  Category.all().then((response) => {
    commit('setCategories', response.data.data);
  }).catch((response) => {
    console.log(response);
  });
}

export function getCategory({ commit }, categoryId) {
  Category.show(categoryId).then((response) => {
    commit('setCategory', response.data);
  });
}

export function addCategory({ commit }, category) {
  Category.store(category).then((response) => {
    commit('addCategory', response.data);
  });
}

export function updateCategory({ commit }, categoryId, category) {
  Category.update(categoryId, category).then((response) => {
    commit('updateCategory', response.data);
  });
}

export function deleteCategory({ commit }, categoryId) {
  commit('deleteCategory', categoryId);

  Category.delete(categoryId).then((response) => {
    console.log(response);
  });
}
