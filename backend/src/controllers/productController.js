const Product = require('../models/Product');

// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json({ status: 'success', data: products });
//   } catch (err) {
//     res.status(500).json({ status: 'error', error: err.message });
//   }
// };

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ status: 'success', data: product });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

// exports.getProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ status: 'fail', error: 'Product not found' });
//     }
//     res.json({ status: 'success', data: product });
//   } catch (err) {
//     res.status(500).json({ status: 'error', error: err.message });
//   }
// };

// exports.updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });
//     if (!product) {
//       return res.status(404).json({ status: 'fail', error: 'Product not found' });
//     }
//     res.json({ status: 'success', data: product });
//   } catch (err) {
//     res.status(400).json({ status: 'fail', error: err.message });
//   }
// };

// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) {
//       return res.status(404).json({ status: 'fail', error: 'Product not found' });
//     }
//     res.status(204).json({ status: 'success', data: null });
//   } catch (err) {
//     res.status(500).json({ status: 'error', error: err.message });
//   }
// };