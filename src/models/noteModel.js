import mongoose from "mongoose";
import { type } from "os";

const noteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a email"],
  },
  note: {
    type: String,
    required: [true, "Please provide a note"],
  },
  date: {
    type: String,
    required: [true, "Please provide a date"],
  },
});

const Notes = mongoose.models.notes || mongoose.model("notes", noteSchema);

export default Notes;
