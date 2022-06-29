// Desafío 5: Motores de plantillas
const express = require('express');
const app = express();
const puerto = 8080;
const routes = require('./routes/index');
const path = require('path');

// Configuración
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Configuración
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/', routes);


app.listen(puerto, (error) => {
    if (!error) {
        console.log(`El servidor se inicio en el puerto ${puerto}`);
    } else {
        console.log(`Error al iniciar el servidor en el puerto ${puerto}. Error ${error}`);
    }
})