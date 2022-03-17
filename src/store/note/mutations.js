export function setNotes(state, notes) {
  state.notes = notes;
}

export function setNote(state, note) {
  state.note = note;
}

export function addNote(state, note) {
  state.notes.push(note);
}

export function updateNote(state, note) {
  let noteInState = state.notes.find((item) => item.id === note.id);

  if (noteInState) {
    noteInState = note;
    return;
  }

  state.notes.push(note);
}

export function deleteNote(state, approachId) {
  state.notes = state.notes.filter((item) => item.id !== approachId);
}
