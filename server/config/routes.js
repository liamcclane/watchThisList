let users = require('../controllers/users');
let movies = require('../controllers/movies');
let link = require('./../controllers/link');
let character = require('./../controllers/character');
// let path = require('path');

module.exports = app => {
    
    app.get('/api/users', users.index);
    app.post('/api/users/new', users.add);
    app.get('/api/users/:id', users.show);
    app.delete('/api/users/:id', users.delete);
    app.put('/api/users/:id', users.update);

    app.get('/api/movies',movies.index);
    app.post('/api/users/:userId/new/movies', movies.add);
    app.get('/api/users/:userId/:movieId', movies.show);
    app.put('/api/users/:userId/:movieId/edit', movies.update);
    app.delete('/api/users/:userId/:movieId', movies.delete);

    app.post('/api/users/:userId/:movieId/new/link', link.add);
    app.post('/api/users/:userId/:movieId/new/character', character.add);

}