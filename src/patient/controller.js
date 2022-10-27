const express = require("express");

const patient = require("./model");

const router = express.Router();

router.post("/patientregistry", (req, res) => {
  let {
    name,
    telephone,
    smartphone,
    email,
    responsibleName,
    responsiblePhone,
  } = req.body;

  patient
    .create({
      name,
      telephone,
      smartphone,
      email,
      responsibleName,
      responsiblePhone,
    })
    .then(() => {
      res.status(201).json({ success: "Paciente inserido." });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

router.get("/patientlist", (res) => {
  patient
    .findAll()
    .then((patients) => {
      res.status(200).send(patients);
    })
    .catch((error) => res.status(404).json({ error: error }));
});

module.exports = router;
