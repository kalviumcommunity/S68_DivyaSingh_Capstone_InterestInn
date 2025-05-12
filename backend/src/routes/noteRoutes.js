const express = require('express');
const router = express.Router();
const {
  getAllNotes,
  createNote,
  getNote,
  // updateNote,
  // deleteNote
} = require('../controllers/noteController');

router.get('/', getAllNotes);
router.post('/', createNote);
router.get('/:id', getNote);
// router.put('/:id', updateNote);
// router.delete('/:id', deleteNote);

module.exports = router;