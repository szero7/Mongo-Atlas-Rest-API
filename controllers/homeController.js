"use strict";


const movie = require('../models/movie');



module.exports = {

    //Retourne soit tous les films de la base de données Sample Mflix, soit les films par la valeur Title ou par la valeur Rated,
    //Retourne le nombre de films par page par une valeur définie. Sinon par défaut, retourne 20 films.

    allMovies: (req, res) => {
        let titles = req.query.title;
        let rates = req.query.rated;
        let page = req.query.page;
        let MoviesPerPage = req.query.limit;
        let startIndex = (page - 1) * MoviesPerPage;
        let endIndex = page * MoviesPerPage;

        movie.find({ $or: [{ title: { $regex: titles, $options: 'i' }, rated: rates }] })

        .then(movies => {
                if (MoviesPerPage === undefined) {
                    endIndex = page * 20;
                }
                const showMovies = movies.slice(startIndex, endIndex);
                res.json({ showMovies });

            })
            .catch(error => console.log(error));
    },


    //Retourne toutes les valeurs Rated existantes de la base de données
    rated: (req, res) => {
        movie.distinct("rated")
            .then(movies => {
                res.json(movies);
            })
            .catch(error => console.log(error));
    },

    //Retourne un film par son Id

    searchById: (req, res) => {
        let id = req.params.id;
        movie.findById(id)
            .then(movie => {
                res.json(movie);
            })
            .catch(error => console.log(error));
    },

};