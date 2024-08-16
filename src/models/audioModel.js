import mongoose from "mongoose";
import { type } from "os";

const audioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a email"],
  },
  audio: {
    type: String,
    required: [true, "Please provide a audio"],
  },
});

const Audio = mongoose.models.audio || mongoose.model("audio", noteSchema);

export default Audio;
