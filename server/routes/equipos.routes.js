const express = require('express');
const router = express.Router();

const equipo = require('../controllers/equipo.controller');

//ruta para listar los equipos
router.get('/', equipo.getEquipos);

//ruta para insertar un equipo
router.post('/', equipo.addEquipo);

//ruta para mostrar un solo equipo por :id
router.get('/:id', equipo.getEquipo);

//ruta para actualizar un equipo por :id
router.put('/:id', equipo.updateEquipo);

//ruta para eliminar un equipo por :id
router.delete('/:id', equipo.deleteEquipo);

module.exports = router;