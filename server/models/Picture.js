import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
});

const Picture = mongoose.model("Picture", PictureSchema);

export default Picture;
