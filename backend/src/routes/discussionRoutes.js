const express = require('express');
const router = express.Router();
const {
  // getAllDiscussions,
  createDiscussion,
  // getDiscussion,
  // updateDiscussion,
  // deleteDiscussion,
  // addComment
} = require('../controllers/discussionController');

// router.get('/', getAllDiscussions);
router.post('/', createDiscussion);
// router.get('/:id', getDiscussion);
// router.put('/:id', updateDiscussion);
// router.delete('/:id', deleteDiscussion);
// router.post('/:id/comments', addComment);

module.exports = router;