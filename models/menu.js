const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  price: {
    type: Number,
    require: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour", "other"],
    require: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

//create model--
const menu = mongoose.model("menu", menuSchema);
module.exports = menu;
