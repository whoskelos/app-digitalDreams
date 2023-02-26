const express = require('express');
const userCtrl = require('../controllers/user.controller');
const router = express.Router();


const User = require('../controllers/user.controller');

router.get('/', User.getUsers);
router.post('/signup', User.crearUser);
router.post('/signin',User.getUser);
router.put('/:id',User.editarUser);
router.delete('/:id',User.eliminarUser);



module.exports = router;
