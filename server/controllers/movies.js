let mongoose = require('mongoose');
let Movie = mongoose.model('Movie');
let User = mongoose.model('User');
// this is an object where the value of the keys are
// functions themselves
module.exports = {
    index: (req, res) => {
        Movie.find().populate('_user').exec()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    show: (req, res) => {
        Movie.findOne({ _id: req.params.movieId }).populate('_user').populate('_links').populate('_characters').exec()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    delete: (req, res) => {
        res.json({
            message: "Hello World"
        });
    },
    update: (req, res) => {
        Movie.update({ _id: req.body._id }, req.body, { new: true, runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    add: (req, res) => {
        // req.body[_user] = req.params.userId;
        let newestMovie = new Movie(req.body);
        newestMovie._user = req.params.userId;
        console.log(newestMovie);
        // res.json(newestMovie);
        newestMovie.save()
            .then(movie => {
                console.log("Here")
                User.findOne({ _id: req.params.userId })
                    .then(user => {
                        console.log("Here")
                        user._movies.push(movie);
                        user.save()
                            .then(savedUser => res.json(movie))
                            .catch(err => res.json(err))
                    })
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))

    },

    // findAllMoviesOfUser: (req, res) => {
    //     Movie.find({ _actor: req.params.id }).populate('_actor').exec()
    //         .then(data => { res.json(data); })
    //         .catch(err => { res.json(err); })
    // },
    // show: (req, res) => {
    //     Movie.findOne({ _id: req.params.id }).populate('_actor').exec()
    //         .then(data => { res.json(data); })
    //         .catch(err => { res.json(err); })
    // },
    // create: (req, res) => {
    //     // create the child
    //     let newestMovie = new Movie(req.body);

    //     // add an attribute _actor to the newest child
    //     newestMovie._actor = req.params.actorId;

    //     // below is an acynrouse call to the database
    //     newestMovie.save()
    //         .then(savedMovie => {
    //             // if the child is saveable
    //             // find it's parent and join them
    //             Actor.findOne({ _id: req.params.id })
    //                 .then(theActor => {
    //                     console.log(`the actor ${theActor}`);
    //                     console.log("inside the create function for movies**!");
    //                     theActor._movies.push(savedMovie._id);
    //                     // LAST STEP!!
    //                     // now save save the actor since we changed it
    //                     theActor.save()
    //                         .then(data => { res.json(data); })
    //                         .catch(err => { res.json(err); })
    //                 })
    //         })
    //         .catch(err => { res.json(err); })
    //         .catch(err => { res.json(err); })
    // },
    // update: (req, res) => {
    //     Movie.update({ _id: req.params.id }, res.body,  { new: true ,runValidators: true})
    //         .then(data => { res.json(data); })
    //         .catch(err => { res.json(err); })
    // },
    // delete: (req, res) => {
    //     console.log("inside the delete moive route");
    //     Actor.findOne({ _id: req.params.actorId })
    //         .then(theActor => {
    //             console.log(theActor)
    //             theActor._movies.remove({ _id: req.params.movieId });
    //             console.log("***inside the delete moive route");
    //             theActor.save()
    //                 .then(data => { res.json(data); })
    //                 .catch(err => { res.json(err); })
    //         })
    //         .catch(err => { res.json(err); })
    // },
}