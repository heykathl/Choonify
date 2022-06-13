import app from './server.js';
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const port = process.env.PORT || 8000
const URI = process.env.CHOONIFY_DB_URI

// Connect to MongoDB via Mongoose
mongoose
  .connect()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err.message));


app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`)
})
