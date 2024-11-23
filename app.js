const fs = require('fs');
const filePath = './mensaje.txt';
const mensaje = fs.readFileSync(filePath, 'utf-8');

const { peliculas } = require('./pelicula.js');
const prompt = require('prompt-sync')();

const listaPeliculas = peliculas;

const MostrarDatos = function() {
    for (let i = 0; i < pelicula.length; i++) {
        console.log("El ID de esta pelicula es:",pelicula[i].id);
        console.log("El rating de esta pelicula es:",pelicula[i].rating);
        console.log("Los premios que ganó esta pelicula son:",pelicula[i].awards);
        console.log("La duración en minutos de la pelicula es:",pelicula[i].length);
        console.log("El precio de la pelicula es:",pelicula[i].price);
        console.log("El género de esta pelicula es:",pelicula[i].genre);
        console.log();
    }
};

MostrarDatos();
console.log(mensaje);