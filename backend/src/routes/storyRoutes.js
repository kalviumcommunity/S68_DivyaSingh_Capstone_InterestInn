const express = require('express');
const router = express.Router();
const {
  getAllStories,
  createStory,
  getStory,
  // updateStory,
  // deleteStory,
  // addComment
} = require('../controllers/storyController');

router.get('/', getAllStories);
router.post('/', createStory);
router.get('/:id', getStory);
// router.put('/:id', updateStory);
// router.delete('/:id', deleteStory);
// router.post('/:id/comments', addComment);

module.exports = router;