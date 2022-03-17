export function setCategories(state, categories) {
  state.categories = categories;
}

export function setCategory(state, category) {
  state.category = category;
}

export function addCategory(state, category) {
  state.categories.push(category);
}

export function updateCategory(state, category) {
  let categoryInState = state.categories.find((item) => item.id === category.id);

  if (categoryInState) {
    categoryInState = category;
    return;
  }

  state.categories.push(category);
}

export function deleteCategory(state, categoryId) {
  state.categories = state.categories.filter((item) => item.id !== categoryId);
}
