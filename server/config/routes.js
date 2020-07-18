let users = require('../controllers/users'),
    movies = require('../controllers/movies'),
    link = require('./../controllers/link'),
    character = require('./../controllers/character'),

    movie2 = require('./../controllers/controllers2.0/movie2.0'),
    comment = require('./../controllers/controllers2.0/comment'),
    post = require('./../controllers/controllers2.0/post'),
    character2 = require('./../controllers/controllers2.0/character');

// let path = require('path');

module.exports = app => {

    app.get('/api/users', users.index);
    app.post('/api/users/new', users.add);
    app.get('/api/users/:id', users.show);
    app.delete('/api/users/:id', users.delete);
    app.put('/api/users/:id', users.update);

    app.get('/api/movies', movies.index);
    app.post('/api/users/:userId/new/movies', movies.add);
    app.get('/api/users/:userId/:movieId', movies.show);
    app.put('/api/users/:userId/:movieId/edit', movies.update);
    app.delete('/api/users/:userId/:movieId', movies.delete);

    app.post('/api/users/:userId/:movieId/new/link', link.add);
    app.post('/api/users/:userId/:movieId/new/character', character.add);





    app.get('/api/movie2.0', movie2.index); // find all ***works***
    app.post('/api/movie2.0', movie2.create); // create ***works***
    app.get('/api/movie2.0/:movieId', movie2.show); // show one ***works***
    app.put('/api/movie2.0/:movieId', movie2.update); // update ****works****
    app.delete('/api/movie2.0/:movieId', movie2.delete); // delete ***works***

    app.post('/api/movie2.0/:movieId', post.create); // 
    app.get('/api/movie2.0/:movieId/posts', post.filterByMovie); // 
    app.post('/api/movie2.0/:movieId/:postId', comment.create); //
    app.post('/api/movie2.0/:movieId/createCharacter', character2.create); //
    
    app.delete('/api/movie2.0/:movieId/:characterId', character2.delete); //
    app.delete('/api/movie2.0/:movieId/:postId',post.delete); // ****works****
    app.delete('/api/movie2.0/:movieId/:commentId',comment.delete); //
    
    
    app.get('/api/posts', post.index); // *** works**
    app.get('/api/comments', comment.index); // *** works**
    
    app.get('/api/movie2.0/:movieId/:postId/up',post.upVote); // ****works****
    app.get('/api/movie2.0/:movieId/:postId/down',post.downVote); //
}