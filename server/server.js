const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const choonsRouter = require("./routes/choons")

dotenv.config()

// Port
const port = process.env.PORT || 5000;

// Create server
const app = express();

// Start server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`)
})

// URI
const uri = process.env.CHOONIFY_DB_URI

// Connect to MongoDB via Mongoose
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err.message));

// Routes
app.use("/choons", require('./routes/choons'))

// Middleware
app.use(cors());
app.use(express.json()); // Previous was bodyparser, server can read json

// Routes
app.use('/choons', choonsRouter)

