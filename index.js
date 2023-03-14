require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "Hello Human",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running at Port :", process.env.PORT);
});
