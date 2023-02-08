const mongoose = require("mongoose");

const { Schema } = mongoose;

const equipoSchema = new Schema({
  portatil: { type: String, default: "No", required: true },
  modelo: { type: String, default: "Sin nombre", required: true },
  precio: { type: Number, required: true },
  so: { type: String, default: "sin sistema operativo" },
  cpu: { type: String, required: true },
  ram: { type: Number, required: true },
  almacenamiento: { type: String, required: true },
  gama: { type: String, required: true },
  valoracion: { type: [Number], default: 0 },
  opiniones: { type: [String], default: "No hay valoraciones" },
  foto: { type: String, required: true, default: "noImagen.png" },
  enlace: { type: String, required: true },
});

module.exports = mongoose.model("Equipo", equipoSchema);
