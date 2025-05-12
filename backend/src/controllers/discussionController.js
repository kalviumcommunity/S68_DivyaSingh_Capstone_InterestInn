const Discussion = require('../models/Discussion');

exports.getAllDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find();
    res.json({ status: 'success', data: discussions });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

exports.createDiscussion = async (req, res) => {
  try {
    const discussion = await Discussion.create(req.body);
    res.status(201).json({ status: 'success', data: discussion });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.getDiscussion = async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);
    if (!discussion) {
      return res.status(404).json({ status: 'fail', error: 'Discussion not found' });
    }
    res.json({ status: 'success', data: discussion });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

// exports.updateDiscussion = async (req, res) => {
//   try {
//     const discussion = await Discussion.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });
//     if (!discussion) {
//       return res.status(404).json({ status: 'fail', error: 'Discussion not found' });
//     }
//     res.json({ status: 'success', data: discussion });
//   } catch (err) {
//     res.status(400).json({ status: 'fail', error: err.message });
//   }
// };

// exports.deleteDiscussion = async (req, res) => {
//   try {
//     const discussion = await Discussion.findByIdAndDelete(req.params.id);
//     if (!discussion) {
//       return res.status(404).json({ status: 'fail', error: 'Discussion not found' });
//     }
//     res.status(204).json({ status: 'success', data: null });
//   } catch (err) {
//     res.status(500).json({ status: 'error', error: err.message });
//   }
// };

// exports.addComment = async (req, res) => {
//   try {
//     const discussion = await Discussion.findByIdAndUpdate(
//       req.params.id,
//       { $push: { comments: req.body } },
//       { new: true }
//     );
//     res.json({ status: 'success', data: discussion.comments });
//   } catch (err) {
//     res.status(400).json({ status: 'fail', error: err.message });
//   }
// };