const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Added bcrypt import

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true, 
    required: [true, "Username is required"],
    trim: true,
    minlength: [3, "Username must be at least 3 characters"]
  },
  email: { 
    type: String, 
    unique: true, 
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
  },
  password: {
    type: String, 
    required: function() {
      return !this.googleId;
    },
    minlength: [8, "Password must be at least 8 characters"]
  },
  role: { 
    type: String, 
    enum: ["member", "creator"], 
    default: "member" 
  },
  googleId: String,
  products: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Product",
    default: [] 
  }],
  stories: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Story",
    default: [] 
  }],
  notes: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Note",
    default: [] 
  }],
  discussions: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Discussion",
    default: [] 
  }]
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);