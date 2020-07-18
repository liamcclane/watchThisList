let mongoose = require('mongoose');
let Movie2 = mongoose.model('Movie2');
let Post = mongoose.model('Post');
let Comment = mongoose.model('Comment');
let Character = mongoose.model('Character');


module.exports = {
    index: (req, res) => {
        Post.find()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    create: (req, res) => {
        console.log("*****************************");
        Movie2.findOne({ _id: req.params.movieId })
            .catch(err => res.json(err))
            .then(movie => {
                let newPost = new Post(req.body);
                console.log("********found movie*********************");
                newPost.save()
                    .catch(err => res.json(err))
                    .then(data => {
                        console.log("********saved post*********************");
                        movie._posts.push(data._id);
                        movie.save()
                            .catch(err => res.json(err))
                            .then(whatever => {
                                console.log("************pushed into movie*****************");
                                return res.json(data);
                            })
                        return res.json(data)
                    })
            })
    },
    delete: (req, res) => {
        Post.deleteOne({ _id: req.params.postId })
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    filterByMovie: (req, res) => {
        Movie2.findOne({ _id: req.params.movieId }).populate('_posts').exec()
            .catch(err => res.json(err))
            .then(movie => res.json(movie._posts))
    },
    upVote: (req, res) => {
        Post.findOne({ _id: req.params.postId })
            .catch(err => res.json(err))
            .then(post => {
                post.amountOfUpVotes++;
                post.save()
                    .catch(err => res.json(err))
                    .then(data => res.json(data))
            })
    },
    downVote: (req, res) => {
        Post.findOne({ _id: req.params.postId })
            .catch(err => res.json(err))
            .then(post => {
                post.amountOfUpVotes--;
                post.save()
                    .catch(err => res.json(err))
                    .then(data => res.json(data))
            })
    }
}