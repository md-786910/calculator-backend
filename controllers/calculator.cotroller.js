const { Calculations } = require("../models/calculator.model");

class CalculationServices {
  static addCalculation = async (req, res) => {
    try {
      const { email, expression } = req.body;
      if (!email || !expression) {
        return res.status(404).send({
          status: "failed",
          message: "adding Calculations error!",
        });
      }
      const calc = await Calculations.create(req.body);
      return res
        .status(201)
        .send({ status: "ok", data: calc, message: "added successfully" });
    } catch (error) {
      console.log(error);
      return res.status(401).send({
        status: "failed",
        message: "adding Calculation error!",
      });
    }
  };
  static deleteCalculation = async (req, res) => {
    try {
      console.log(req.params);

      const del = await Calculations.findOneAndDelete({
        email: req.params.email,
        _id: req.params.id,
      });
      return res
        .status(201)
        .send({ status: "ok", message: "deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(401).send({
        status: "failed",
        message: "adding Calculation error!",
      });
    }
  };

  // get all Calculations

  static getAllCalculations = async (req, res) => {
    try {
      const Calculation = await Calculations.find({
        email: req.params.email,
      }).sort({ createdAt: -1 });
      return res.status(201).send({ status: "ok", data: Calculation });
    } catch (error) {
      console.log(error);
      return res.status(401).send({
        status: "failed",
        message: "getting Calculation error!",
      });
    }
  };
}
module.exports = CalculationServices;
