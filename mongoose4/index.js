var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb://user1:hola123.,@cluster0-shard-00-00-1dmpa.mongodb.net:27017,cluster0-shard-00-01-1dmpa.mongodb.net:27017,cluster0-shard-00-02-1dmpa.mongodb.net:27017/alumnos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
    var libros=[
        {isbn: "9780345477491", nombre: "Drew", paterno: "Karpyshyn", titulo: "Darth Bane: Rule of two" },
        {isbn: "9789875022133", nombre: "Sun", paterno: "Tzu", titulo: "El arte de la guerra" },
        {isbn: "9786075167718", nombre: "Phillip", paterno: "Ball", titulo: "Al servico del Reich: La física en tiempos de Hitler" },
        {isbn: "9780997316001", nombre: "Wladston", paterno: "Ferreira", titulo: "Computer Scinece Destilled" },
        {isbn: "9789586829229", nombre: "Jeimy", paterno: "Cano", titulo: "Computacón forense" },
        {isbn: "9781593278557", nombre: "Cliff", paterno: "Janzen", titulo: "Linux basics for hackers" },
        {isbn: "9781593275907", nombre: "Justin", paterno: "Seitz", titulo: "Black hat python" },
        {isbn: "9786070122330", nombre: "Pablo", paterno: "De Santis", titulo: "El inventor de juegos" },
        {isbn: "9786071111395", nombre: "Nick", paterno: "Vujicic", titulo: "Una vida sin límites" },
        {isbn: "9701509056", nombre: "Ernesto", paterno: "Peñaloza", titulo: "Fundamentos de programación" }
    ];

    Libro.collection.insert(libros,function(err,data){
        if (err) {
          console.log("------------------------ERROR --------------------------");
        }else {
          console.log("------------------------OK ---------------------------");
          console.log(data);
        }
      });
}



function buscarByIsbn(is){
    Libro.find({isbn:is},function(err,data){
        if (err) {
            console.log(err);
          }
          console.log(data);
    });
}

function modificarTituloByIsbn(is, nuevoTitulo){
    Libro.findOneAndUpdate({isbn:is}, {'titulo':nuevoTitulo}, function(err, data){
        if (err) {
            console.log(err);
          }
          console.log(data);
    })
}


function main() {
  //nuevoLibro();
  //buscarByIsbn("9786075167718");
  modificarTituloByIsbn("9789586829229", "Descubriendo los rastros informáticos");
}

main();    // ejecutamos main
