import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 50,
    },
    price: {
      type: String,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = model("Product", productsSchema);

export default Product;
