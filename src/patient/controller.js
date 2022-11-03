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

router.get("/patientlist", (req, res) => {
  patient
    .findAll()
    .then((patients) => {
      res.status(200).send(patients);
    })
    .catch((error) => {
      res.status(404).json({ error: "Ainda não há pacientes para mostrar." });
    });
});

router.get("/patientlist:id", (req, res) => {
  let { id } = req.params;

  patient
    .findAll({
      where: {
        id,
      },
    })
    .then((patient) => {
      res.status(200).send(patient);
    })
    .catch((error) => {
      res.status(404).json({ error: "Paciente náo cadastrado." });
    });
});

router.put("/putpatient/:id", (req, res) => {
  let {
    id,
    name,
    telephone,
    smartphone,
    email,
    responsibleName,
    responsiblePhone,
  } = req.body;

  patient
    .update(
      {
        name,
        telephone,
        smartphone,
        email,
        responsibleName,
        responsiblePhone,
      },
      {
        where: id,
      }
    )
    .then(() =>
      res.status(200).json({ message: "Dados de paciente editados." })
    )
    .catch((error) => {
      res.status(500).json({ error: "Não foi possível editar dados." });
    });
});

router.delete("/deletepatient/:id", (req, res) => {
  let { id } = req.params;

  patient
    .destroy({
      where: {
        id,
      },
    })
    .then(() =>
      res.status(200).json({ message: "Paciente deletado com sucesso." })
    )
    .catch((error) => {
      res.status(500).json({ error: "Não foi possível deletar." });
    });
});

module.exports = router;
