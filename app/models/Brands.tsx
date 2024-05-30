import mongoose from "mongoose";
const { Schema } = mongoose;

const BrandsSchema = new Schema({
  name: { type: String, required: true },
});

const Brands = mongoose.models.Brands || mongoose.model("Brands", BrandsSchema);
export default Brands;
