import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // admin: { type: Boolean, default: false },
});

// connecting through mongoose to location collection in the database.
// it's not case sensitive

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
