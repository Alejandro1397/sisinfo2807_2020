var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  isbn: Number,
  autor: {
    nombre: String,
    paterno: String
  },
  titulo: String,
});

module.exports = mongoose.model('Libro', LibroSchema);
