import mongoose from "mongoose";
const { Schema } = mongoose;

const firmSchema = new Schema({
  name: { type: String, required: true },
  href: { type: String, required: true },
});

const Firms = mongoose.models.Firms || mongoose.model("Firms", firmSchema);
export default Firms;
