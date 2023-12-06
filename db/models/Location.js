import { SourceCode } from "eslint";
import mongoose from "mongoose";
const { Schema } = mongoose;

const locationSchema = new Schema({
  name: { type: String, required: true },
  lngLat: { type: Array, required: true },
  type: { type: String, required: true },
  color: { type: String },
  address: { type: String },
  city: { type: String },
  postcode: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

// connecting through mongoose to location collection in the database.
// it's not case sensitive

const Location =
  mongoose.models.Locations || mongoose.model("Locations", locationSchema);
export default Location;
