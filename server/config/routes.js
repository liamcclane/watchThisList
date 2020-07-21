let movie2 = require('./../controllers/controllers2.0/movie2.0'),
    comment = require('./../controllers/controllers2.0/comment'),
    post = require('./../controllers/controllers2.0/post'),
    character2 = require('./../controllers/controllers2.0/character');

module.exports = app => {
    //-----------------routes about movies--------------------------
    // index of all the movies in the DB
    app.get('/api/movie2.0/', movie2.index); // find all // ***works***
    // route to CREATE a movie
    app.post('/api/movie2.0/', movie2.create); // create // ***works***
    // route to SHOW Single movie 
    app.get('/api/movie2.0/:movieId/', movie2.show); // show one // ***works***
    // route to edit a Single movie 
    app.put('/api/movie2.0/:movieId/', movie2.update); // update // ***works***
    // route to delete Single movie
    app.delete('/api/movie2.0/:movieId/', movie2.delete); // delete // 

    //-------------routes about posts----------------------------
    // posts are not connects to movies, But movies are connected to posts
    // LIST of all the posts in the DB
    app.get('/api/post/', post.index);
    // LIST of Posts, from a Single movie Id
    app.get('/api/post/:movieId/', post.filterByMovie); // 
    // CREATE a Post
    app.post('/api/post/:movieId/', post.create); // 
    // a Single Post
    // there are can access the comments by the attribute _comments: [{CommentObj},{CommentObj}]
    app.get('/api/post/:movieId/:postId/', post.show); //
    // DELETES a Post
    app.delete('/api/post/:movieId/:postId/', post.delete);
    // Update
    app.put('/api/post/:movieId/:postId/', post.update); 
    // // routes that changes the DB for up and down votes 
    // app.get('/api/post/up/:postId/', post.upVote);
    // app.get('/api/post/down/:postId/', post.downVote); //

    //---------------routes about comments--------------------------------------
    // LIST of all the comments in the DB 
    app.get('/api/comment/', comment.index); // ***works*** 
    // route that get a Single Comment
    app.delete('/api/comment/:commentId/', comment.find); // ***works***
    // route that CREATES a comment
    app.post('/api/comment/:postId/', comment.create); // ***works***
    // route that DELETES a comment
    app.delete('/api/comment/:commentId/', comment.delete); // ***works***

    //---------------routes about characters--------------------------------------
    // LIST of all the Characters in the DB
    app.get('/api/character/', character2.index);  // ***works***
    // LIST of Characters 
    app.get('/api/character/:movieId/', character2.filterByMovie); // ***works*** 
    // CREATES Characters
    app.post('/api/character/:movieId/', character2.create); // ***works***
    // a Single Character 
    app.get('/api/character/:movieId/:characterId/', character2.show); // ***works*** 
    // DELETES Characters
    app.delete('/api/character/:characterId/', character2.delete); // ***works*** 

    //---------------routes about comments--------------------------------------
    app.all('*', (req, res) => {
        return res.json("no route for this");
    })
}
