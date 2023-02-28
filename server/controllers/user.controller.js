const User = require("../models/user");

const userCtrl = {};

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "secretkey123456";

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.signUp = async (req, res) => {

  const { name, email, password } = req.body;
  const userExistent = await User.findOne({ email });
  
  if (userExistent) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el email: ${email}`
    })
  } else {
    const salt = bcrypt.genSaltSync(10);
    
    const user = new User({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, salt),
    })
    await user.save();
    //response
    res.json({
      msg: `Usuario ${name} creado exitosamente!`
    })
  }
};

userCtrl.registrarUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExistent = await User.findOne({ email });
  if (userExistent) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el email: ${email}`
    })
  } else {
    const salt = bcrypt.genSaltSync(10);
    const user = new User({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, salt),
    })

    await user.save();
    //response
    res.json({
      msg: `Usuario ${name} creado exitosamente!`
    })
  }
};

userCtrl.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    // el email no existe
    return res.status(401).json({
      msg: `No existe un usuario con el email: ${email}`
    });
  }

  const resultPassword = bcrypt.compareSync(password, user.password);
    if (resultPassword) {
      const expiresIn = 24 * 60 * 60;
      const accessToken = jwt.sign({
        id: user._id 
      }, SECRET_KEY, {
        expiresIn: expiresIn,
      });
      //response si todo okay
      res.json({ accessToken });

    } else {
      //si password erronea
      res.status(400).json({
        msg: "Algo ha ido mal"
      });
    }
};

userCtrl.editarUser = async (req, res) => {
  const { email } = req.body;
  const datosUser = await User.findOne({ email });
  const { id } = req.params;
  //si no hay cambiado la password
  if (req.body.password === datosUser.password) {
    const user = {
      name: req.body.name,
      email: req.body.email,
    };
    await User.findByIdAndUpdate(id, { $set: user }, { new: true });
    res.json({ msg: "User actualizado" });
    
  } else { //si ha cambiado la password
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    };
    await User.findByIdAndUpdate(id, { $set: user }, { new: true });
    res.json({ msg: "User actualizado" });
  }
};

userCtrl.eliminarUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "User eliminado" });
};

module.exports = userCtrl;
