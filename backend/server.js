const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");
const uploadRoutes = require('./src/routes/uploadRoutes');
const noteRoutes = require('./src/routes/noteRoutes');
const storyRoutes = require('./src/routes/storyRoutes');
const discussionRoutes = require('./src/routes/discussionRoutes');
const productRoutes = require('./src/routes/productRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));
  
app.use("/api/auth",authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/stories', storyRoutes); 
app.use('/api/discussions', discussionRoutes);
app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));