import mongoose from "mongoose";
const { Schema } = mongoose;

const sizesSchema = new Schema({
  size: { type: String, required: true },
  value: { type: Number, required: true },
});

const cartItemSchema = new Schema({
  prodId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  sizes: { type: [sizesSchema], required: true },
  image: { type: [String], required: true },
});

const cartSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  items: [cartItemSchema],
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export default Cart;
