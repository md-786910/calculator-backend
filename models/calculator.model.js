const mongoose = require("mongoose");
const calculationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: ["email is required", true],
    },
    name: {
      type: String,
    },
    expression: {
      type: String,
    },
    result: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Calculations = new mongoose.model("Calculations", calculationSchema);

module.exports = { Calculations };
