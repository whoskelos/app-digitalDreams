const Equipo = require('../models/equipo');
const mongoose = require('mongoose');
const equipoCtrl = {};

//listar todos los equipos
equipoCtrl.getEquipos = async (req,res) => {
    const equipos = await Equipo.find();
    res.json(equipos);
}

//insertar un equipo
equipoCtrl.addEquipo = async (req,res) => {
    const equipo = new Equipo(req.body);
    await equipo.save();
    res.json({'status' : 'ok'});
}

module.exports = equipoCtrl;