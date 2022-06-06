//const { Router } = require('express');
const express = require('express');
const routes = express.Router();
const path = require('path');
const user_controller = require('../controllers/user_controller');
const main_controller = require('../controllers/main_controller');
const movie_controller = require('../controllers/movie_controller');

//Carga el formulario de autenticacion
routes.get("/", main_controller.cargarFormularioLogin);
//Carga la pagina principal y verifica que el usuario se haya autenticado.
routes.get('/home', user_controller.verificarLogin);
//Carga el formulario de registro
routes.get("/register-form", main_controller.cargarFormularioRegistro);
//Eliminar la sesion y redirecciona al usuario a la pagina inicial.
routes.get('/logout', main_controller.cerrarSesion);

//Obtiene la informacion de una pelicula a partir de un id
routes.get('/search', movie_controller.cargarPelicula);
//Toma un nombre y obtiene las peliculas que concuerden con el nombre.
routes.get('/search/movies', movie_controller.obtenerPeliculasPorNombre);
//Retorna las peliculas más populares
routes.get('/search/movies/popular', movie_controller.obtenerPeliculasPopulares);

routes.get('/resena-form', main_controller.cargarFormularioResena);

//Toma los datos enviados en el formulario de registro y hace la insercion en la base de datos, si hay un error redirige al usuario al formulario e informa.
routes.post("/register", user_controller.registrarUsuario);
//Toma los datos enviados en el formulario de autenticacion y lo valida con los datos almacenados en la bd.
routes.post("/auth", user_controller.loginUser);

module.exports = routes;