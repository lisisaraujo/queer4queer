import { SourceCode } from "eslint";
import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
  date: { type: String },
  location: { type: Schema.Types.ObjectId, ref: "Locations" },
  comment: { type: String, required: true },
  age: { type: String },
  sexual_orientation: [{ type: String }],
  gender: [{ type: String }],
  bipoc: { type: String },
  name: { type: String },
});

// connecting through mongoose to location collection in the database.
// it's not case sensitive

const Comment =
  mongoose.models.Comments || mongoose.model("Comments", commentSchema);
export default Comment;
