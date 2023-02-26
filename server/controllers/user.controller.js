const User = require("../models/user");

const userCtrl = {};

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "secretkey123456";

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.crearUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
      admin: req.body.admin,
      favoritos: req.body.favoritos,
    });

    await user.save();

    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user._id }, SECRET_KEY, {
      expiresIn: expiresIn,
    });

    const dataUser = {
      name: user.name,
      email: user.email,
      admin: user.admin,
      accessToken: accessToken,
      expiresIn: expiresIn,
    };
    //response
    res.send({ dataUser });
  } catch (error) {
    if (error === 11000) return res.status(401).send("El email ya existe");
  }
};

userCtrl.registrarUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
      admin: req.body.admin,
      favoritos: req.body.favoritos,
    });

    await user.save();
    //response
    res.json({ status: "usuario creado" });
  } catch (error) {
    if (error === 11000) return res.status(401).send("El email ya existe");
  }
};

userCtrl.getUser = async (req, res, next) => {
  const { email, password, admin } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    // el email no existe
    return res.status(401).send({ message: "Algo ha ido mal" });
  } else {
    const resultPassword = bcrypt.compareSync(password, user.password);
    if (resultPassword) {
      const expiresIn = 24 * 60 * 60;
      const accessToken = jwt.sign({ id: user._id }, SECRET_KEY, {
        expiresIn: expiresIn,
      });

      //response
      const dataUser = {
        name: user.name,
        email: user.email,
        accessToken: accessToken,
        expiresIn: expiresIn,
      };
      //response
      res.send({ dataUser });
    } else {
      //si password erronea
      res.status(401).send({ message: "Algo ha ido mal" });
    }
  }
};

userCtrl.editarUser = async (req, res) => {
  const { id } = req.params;
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  await User.findByIdAndUpdate(id, { $set: user }, { new: true });
  res.json({ status: "User actualizado" });
};

userCtrl.eliminarUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: "User eliminado" });
};

module.exports = userCtrl;
