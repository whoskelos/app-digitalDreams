const Equipo = require("../models/equipo");
const mongoose = require("mongoose");
const equipoCtrl = {};

//listar todos los equipos
equipoCtrl.getEquipos = async (req, res) => {
  const equipos = await Equipo.find();
  res.json(equipos);
};

//insertar un equipo
equipoCtrl.addEquipo = async (req, res) => {
  const equipo = new Equipo(req.body);
  await equipo.save();
  res.json({ status: "insertado correctamente" });
};

//encontrar un equipo en especifico
equipoCtrl.getEquipo = async (req, res) => {
  const { id } = req.params;
  const equipo = await Equipo.findById(id);
  res.json(equipo);
};

//actualizar un equipo
equipoCtrl.updateEquipo = async (req, res) => {
  const { id } = req.params;
  const {
    portatil,
    modelo,
    precio,
    so,
    cpu,
    ram,
    almacenamiento,
    gama,
    valoracion,
    opiniones,
    foto,
  } = req.body;
  const equipo = await Equipo.updateOne(
    { _id: id },
    {
      $set: {
        portatil,
        modelo,
        precio,
        so,
        cpu,
        ram,
        almacenamiento,
        gama,
        valoracion,
        opiniones,
        foto,
      },
    }
  );
  res.json({ status: "editado correctamente" });
};

//eliminar un equipo
equipoCtrl.deleteEquipo = async (req, res) => {
    const { id } = req.params;
    await Equipo.deleteOne({_id:id});
    res.json({ status: "eliminado correctamente" });

  };

module.exports = equipoCtrl;
