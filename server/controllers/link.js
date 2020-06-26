let mongoose = require('mongoose');
let Link = mongoose.model('Link');
let Movie = mongoose.model('Movie');

// this is an object where the values are functions that pass in request and response
module.exports = {
    add: (req, res) => {
        Link.create(req.body)
            .catch(err => res.json(err))
            .then(newLink => {
                console.log(`New Link created ${newLink}`)
                Movie.findOne({ _id: req.params.movieId })
                    .catch(err => res.json(err))
                    .then(movie => {
                        // console.log(movie);
                        movie._links.push(newLink);
                        movie.save()
                            .catch(err => res.json(err))
                            .then(data => res.json(newLink))
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