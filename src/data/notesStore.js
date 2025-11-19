const notes = [];

const addNote = (note) => {
    notes.push(note);
    return note;
};

const getNotes = () => {
    return notes;
};

const deleteNote = (id) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        return notes.splice(index, 1)[0];
    }
    return null;
};

module.exports = {
    addNote,
    getNotes,
    deleteNote
};