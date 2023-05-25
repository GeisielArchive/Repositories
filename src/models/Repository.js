import mongoose from "mongoose";

const repositorySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    url :  { type: String, required: true, unique: true },
    userID: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", repositorySchema);