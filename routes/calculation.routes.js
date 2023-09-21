const express = require("express");
const CalculationServices = require("../controllers/calculator.cotroller");

// Create a new router object
const calculationRouter = express.Router();

calculationRouter.post("/add", CalculationServices.addCalculation);
calculationRouter.delete(
  "/delete/:email/:id",
  CalculationServices.deleteCalculation
);
calculationRouter.get("/get/:email", CalculationServices.getAllCalculations);

module.exports = calculationRouter;
