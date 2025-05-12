const Note = require('../models/Note');

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json({ status: 'success', data: notes });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json({ status: 'success', data: note });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ status: 'fail', error: 'Note not found' });
    }
    res.json({ status: 'success', data: note });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

// exports.updateNote = async (req, res) => {
//   try {
//     const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });
//     if (!note) {
//       return res.status(404).json({ status: 'fail', error: 'Note not found' });
//     }
//     res.json({ status: 'success', data: note });
//   } catch (err) {
//     res.status(400).json({ status: 'fail', error: err.message });
//   }
// };

// exports.deleteNote = async (req, res) => {
//   try {
//     const note = await Note.findByIdAndDelete(req.params.id);
//     if (!note) {
//       return res.status(404).json({ status: 'fail', error: 'Note not found' });
//     }
//     res.status(204).json({ status: 'success', data: null });
//   } catch (err) {
//     res.status(500).json({ status: 'error', error: err.message });
//   }
// };