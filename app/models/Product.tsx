import mongoose from "mongoose";
const { Schema } = mongoose;

const sizesSchema = new Schema(
  {
    sizes: { type: String, required: true },
    value: { type: Number, required: true },
  },
  { _id: true }
);

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
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
