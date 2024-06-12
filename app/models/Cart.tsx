import mongoose from "mongoose";
const { Schema } = mongoose;

const sizesSchema = new Schema({
  sizes: { type: String, required: true },
  value: { type: Number, required: true },
});

const CartSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  items: [
    {
      prodId: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      sizes: { type: [sizesSchema], required: true },
      image: { type: [String], required: true },
    },
  ],
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
export default Cart;
