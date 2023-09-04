const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: { type: String, required: true, maxLength: 50 },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  text: { type: String, required: true },
  comments: [{ type: Schema.types.ObjectId, ref: "Comment" }],
  timestamp: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Blog", BlogSchema);
