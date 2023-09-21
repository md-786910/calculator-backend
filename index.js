const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const calculationRouter = require("./routes/calculation.routes");
const app = express();

dotenv.config({});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
// cors
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json("Server is Running ");
});

// add student
app.use("/api/calculation", calculationRouter);

// listem
const runDb = async () => {
  try {
    const DB = process.env.MONGO_URI;

    mongoose.set("strictQuery", false);
    await mongoose.connect(DB, { useUnifiedTopology: false });
    console.log("connected to MongoDB");

    app.listen(PORT, async () => {
      console.log("app is running on port " + PORT);
    });
  } catch (error) {
    console.log("connection error " + error);
  }
};
runDb();
