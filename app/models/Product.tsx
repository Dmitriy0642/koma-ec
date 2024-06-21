import mongoose from "mongoose";
const { Schema } = mongoose;

const sizesSchema = new Schema({
  size: { type: String, required: true },
  value: { type: Number, required: true },
});

const ProductSchema = new Schema({
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
  color: { type: String, required: true },
  sizes: { type: [sizesSchema], required: true },
  firm: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: [String], required: true },
  productCode: { type: String, required: true },
  countryManyfacture: { type: String, required: true },
  gender: { type: String, required: true },
  composition: { type: String, required: true },
  features: { type: String, required: true },
  description: { type: String, required: true },
  priceUsd: { type: Number, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
