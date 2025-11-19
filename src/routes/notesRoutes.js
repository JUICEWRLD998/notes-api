const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/notes', notesController.createNote);
router.get('/notes', notesController.getNotes);
router.delete('/notes/:id', notesController.deleteNote);

module.exports = router;