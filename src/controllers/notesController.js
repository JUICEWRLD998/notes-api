const notesStore = require('../data/notesStore');

const createNote = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    const newNote = notesStore.addNote({ title, content });
    res.status(201).json(newNote);
};

const getNotes = (req, res) => {
    const notes = notesStore.getNotes();
    res.status(200).json(notes);
};

const deleteNote = (req, res) => {
    const { id } = req.params;
    const deleted = notesStore.deleteNote(id);
    if (!deleted) {
        return res.status(404).json({ message: 'Note not found' });
    }
    res.status(204).send();
};

module.exports = {
    createNote,
    getNotes,
    deleteNote,
};