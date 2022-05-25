const express = require('express');
const route = express.Router();
const homeController = require('../controllers/homeController');

route.get('/api/v1/movies', homeController.allMovies); // retourne tous les films ou par valeur Title ou valeur Rated. Avec pagination

route.get('/api/v1/movies/rating', homeController.rated); // route qui retourne tous les rated des movies

route.get('/api/v1/movies/id/:id', homeController.searchById); // route qui retourne tous les movies en fonction de l'id

module.exports = route;

// tous les films (sans Title et sans Rated)
// http://localhost:3000/api/v1/movies?title=&page=1&limit=10

// exemple avec Title
// http://localhost:3000/api/v1/movies?title=love&page=1&limit=10

// exemple avec Rated
// http://localhost:3000/api/v1/movies?title=&rated=NOT%20RATED&page=1&limit=10

// exemple avec Title et Rated
// http://localhost:3000/api/v1/movies?title=love&rated=NOT%20RATED&page=1&limit=10

// exemple Nombre de films par page non défini (20 par défaut)
// http: //localhost:3000/api/v1/movies?title=&page=1

// exemple Recherche par Id
// http://localhost:3000/api/v1/movies/id/573a1394f29313caabcde66f

// tous les Rated
// http://localhost:3000/api/v1/movies/rating