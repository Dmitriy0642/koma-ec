import mongoose from "mongoose";
const { Schema } = mongoose;

const LinksSchema = new Schema({
  name: { type: String, required: true },
  href: { type: String, required: true },
});

const Links = mongoose.models.Links || mongoose.model("Links", LinksSchema);
export default Links;
