require("dotenv").config();
const express = require("express");
const cors = require("cors");

const regionRouter = require("./app/routes/regions.route");
const countryRouter = require("./app/routes/countries.route");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to Human Resource Application.",
  });
});

app.use("/regions", regionRouter);
app.use("/countries", countryRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running at Port :", process.env.PORT);
});
