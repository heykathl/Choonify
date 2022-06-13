import express from "express";
import cors from "cors";
import choonify from "./routes/choonify"

// Create server
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Previous was bodyparser, server can read json

// Routes
app.use("/", choonify)
app.use("*", (req, res) => {
  res.status(404).json({error: "Not Found"})
});

export default app

