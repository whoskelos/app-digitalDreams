const express = require('express');
const userCtrl = require('../controllers/user.controller');
const router = express.Router();
const { validateCreate } = require('../validators/users');


const User = require('../controllers/user.controller');

router.get('/', User.getUsers);
router.post('/signup', validateCreate, User.signUp);
router.post('/signin',User.signIn);
router.post('/registro', validateCreate, User.registrarUser);
router.put('/:id',User.editarUser);
router.delete('/:id',User.eliminarUser);



module.exports = router;
