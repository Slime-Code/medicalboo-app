import Note from '../../api/Note';

export function getApproaches({ commit }) {
  Note.all().then((response) => {
    commit('setNotes', response.data.data);
  }).catch((response) => {
    console.log(response);
  });
}

export function getNote({ commit }, noteId) {
  Note.show(noteId).then((response) => {
    commit('setNote', response.data);
  });
}

export function addNote({ commit }, note) {
  Note.store(note).then((response) => {
    commit('addNote', response.data);
  });
}

export function updateNote({ commit }, noteId, note) {
  Note.update(noteId, note).then((response) => {
    commit('updateNote', response.data);
  });
}

export function deleteNote({ commit }, noteId) {
  commit('deleteNote', noteId);

  Note.delete(noteId).then((response) => {
    console.log(response);
  });
}
