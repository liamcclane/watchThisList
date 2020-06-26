let mongoose = require('mongoose');
let User = mongoose.model('User');

// this is an object where the values are functions that pass in request and response
module.exports = {

    index: (req, res) => {
        // res.json({
        //     message: "Hello World"
        // });
        User.find().populate('_movies').exec()
            .then(allUsers => {
                res.json(allUsers);
            })
            .catch(err => {
                console.log(err)
                res.json(err)
            })
    },
    /**
     * findById : function(request, response) {
        Task.findOne({_id: request.params.id})
            .then(theTask =>{
                response.json(theTask)
            })
            .catch(err =>{
                response.json(err)
            })
    },
     */
    show: (req, res) => {
        User.findOne({ _id: req.params.id }).populate('_movies').exec()
            .then(user => { res.json(user) })
            .catch(err => res.json(err));
    },
    add: (req, res) => {
        // console.log('req.body');
        // console.log(req.body);
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },
    delete: (req, res) => {
        User.remove({_id: req.body.id})
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