let mongoose = require('mongoose');
let Character = mongoose.model('Character');
let Movie = mongoose.model('Movie');

// this is an object where the values are functions that pass in request and response
module.exports = {
    index: (req, res) => {
        res.json({
            message: "Hello World"
        });
    },
    show: (req, res) => {
        res.json({
            message: "Hello World"
        });
    },
    add: (req, res) => {
        Character.create(req.body)
            .catch(err => res.json(err))
            .then(char => {
                Movie.findOne({ _id: req.params.movieId })
                    .catch(err => res.json(err))
                    .then(movie => {
                        movie._characters.push(char);
                        movie.save()
                            .catch(err => res.json(err))
                            .then(res.json(char))
                    })
            })
    },
    delete: (req, res) => {
        res.json({
            message: "Hello World"
        });
    },
    update: (req, res) => {
        res.json({
            message: "Hello World"
        });
    },
    // create: (req, res) => {
    //     User.create(req.body)
    //         .then(data => { res.json(data); })
    //         .catch(err => { res.json(err); })
    // },
    // show: (req, res) => {
    //     User.findOne({ _id: req.params.id }).populate('_movies').exec()
    //         .then(data => { res.json(data); })
    //         .catch(err => { res.json(err); })
    // },
    // update: (req, res) => {
    //     User.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    //         .then(data => { res.json(data); })
    //         .catch(err => { res.json(err); })
    // },
    // delete: (req, res) => {
    //     User.removeById({ _id: req.params.id })
    //         .then(data => { res.json(data); })
    //         .catch(err => { res.json(err); })
    //     // first find all the childern who's parent is that User
    //     // Movie.find({ _actor: req.params.id })
    //     //     .then(allTheMoviesWithAssocActor => {
    //     //         console.log(`allTheMoviesWithAssocActor ${allTheMoviesWithAssocActor}`);
    //     //         // if the movie does not have any actors
    //     //         if (!allTheMoviesWithAssocActor) {
    //     //             Movie.remove(allTheMoviesWithAssocActor)
    //     //                 .then(data => { res.json(data); })
    //     //                 .catch(err => { res.json(err); })
    //     //         }
    //     //         Actor.remove({ _id: req.params.id })
    //     //     })
    //     //     .catch(err => { res.json(err); })
    // }
}