const express = require("express");

const app = express();

app.use(express.json());

const controller = require("./src/patient/controller");

app.use("/", controller);

app.listen(3000, () => {
  console.log("Running application at http://localhost:3000");
});
