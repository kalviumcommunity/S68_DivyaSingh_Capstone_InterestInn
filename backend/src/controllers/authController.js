const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({ 
      username, 
      email, 
      password: hashedPassword 
    });

    const token = jwt.sign(
      { id: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
    );

    res.status(201).json({
      status: 'success',
      token,
      user
    });

  } catch (err) {
    res.status(400).json({ 
      status: 'fail',
      error: err.message 
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: 'fail',
        error: "Invalid credentials"
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        status: 'fail',
        error: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
    );

    res.status(200).json({
      status: 'success',
      token,
      user
    });

  } catch (err) {
    res.status(500).json({
      status: 'error',
      error: "Server error"
    });
  }
};