const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Schema with all the components required for the assignment
const gBookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: String, 
  link: String, 
});

const gBooks = mongoose.model("gBooks", gBookSchema);

module.exports = gBooks;