const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookmarkSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  url: {
    type: String,
    required: true,
    max: 40
  },
  title: {
    type: String,
    required: true
  },
  shortdesc: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Bookmark = mongoose.model("bookmark", BookmarkSchema);
