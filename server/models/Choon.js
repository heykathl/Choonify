const mongoose = require('mongoose');

const choonSchema = new mongoose.Schema({
  choon: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
});

const Choon = mongoose.model("Choons, choonSchema")