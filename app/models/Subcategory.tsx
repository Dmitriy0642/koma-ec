import mongoose from "mongoose";
const { Schema } = mongoose;

const SubcategorySchema = new Schema({
  name: { type: String, required: true },
});

const Subcategory =
  mongoose.models.Subcategory ||
  mongoose.model("Subcategory", SubcategorySchema);
export default Subcategory;
