const Story = require('../models/Story');

// exports.getAllStories = async (req, res) => {
//   try {
//     const stories = await Story.find();
//     res.json({ status: 'success', data: stories });
//   } catch (err) {
//     res.status(500).json({ status: 'error', error: err.message });
//   }
// };

exports.createStory = async (req, res) => {
  try {
    const story = await Story.create(req.body);
    res.status(201).json({ status: 'success', data: story });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

// exports.getStory = async (req, res) => {
//   try {
//     const story = await Story.findById(req.params.id);
//     if (!story) {
//       return res.status(404).json({ status: 'fail', error: 'Story not found' });
//     }
//     res.json({ status: 'success', data: story });
//   } catch (err) {
//     res.status(500).json({ status: 'error', error: err.message });
//   }
// };

// exports.updateStory = async (req, res) => {
//   try {
//     const story = await Story.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });
//     if (!story) {
//       return res.status(404).json({ status: 'fail', error: 'Story not found' });
//     }
//     res.json({ status: 'success', data: story });
//   } catch (err) {
//     res.status(400).json({ status: 'fail', error: err.message });
//   }
// };

// exports.deleteStory = async (req, res) => {
//   try {
//     const story = await Story.findByIdAndDelete(req.params.id);
//     if (!story) {
//       return res.status(404).json({ status: 'fail', error: 'Story not found' });
//     }
//     res.status(204).json({ status: 'success', data: null });
//   } catch (err) {
//     res.status(500).json({ status: 'error', error: err.message });
//   }
// };

// exports.addComment = async (req, res) => {
//   try {
//     const story = await Story.findByIdAndUpdate(
//       req.params.id,
//       { $push: { comments: req.body } },
//       { new: true }
//     );
//     res.json({ status: 'success', data: story.comments });
//   } catch (err) {
//     res.status(400).json({ status: 'fail', error: err.message });
//   }
// };