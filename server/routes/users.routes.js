const express = require('express');
const userCtrl = require('../controllers/user.controller');
const router = express.Router();

// const jwt = require('jsonwebtoken');

const User = require('../controllers/user.controller');

router.get('/', User.getUsers);
router.post('/signup', User.crearUser);
router.post('/signin',User.getUser);
// router.put('/:id',User.editarUser);
// router.delete('/:id',User.eliminarUser);

//ruta privada para ver restaurantes que sean favoritos de cada usuario
// router.get('/favoritos', User.verifyToken , (req,res) =>{
//     console.log(res);
// });


module.exports = router;
