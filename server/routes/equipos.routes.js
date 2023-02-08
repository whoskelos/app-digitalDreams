const express = require('express');
const router = express.Router();

const equipo = require('../controllers/equipo.controller');

//ruta para listar los equipos
router.get('/', equipo.getEquipos);

//ruta para insertar un equipo
router.post('/', equipo.addEquipo);


module.exports = router;