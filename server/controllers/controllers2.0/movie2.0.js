let mongoose = require('mongoose');
let Movie2 = mongoose.model('Movie2');

// here we are exporting an anonymous object where the key val pairs are ["string", function]
module.exports = {
    index: (req, res) => {
        Movie2.find().populate('_posts').populate('_characters').exec()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    show: (req, res) => {
        Movie2.findOne({ _id: req.params.movieId }).populate('_posts').populate('_characters').exec()
            .catch(err => res.json(err))
            .then(data => {
                return res.json(data);
            })
    },
    delete: (req, res) => {
        Movie2.deleteOne({ _id: req.params.movieId })
            .catch(err => res.json(err))
            .then(data => res.json(data))
        // res.json({
        //     message: "Hello World"
        // });
    },
    update: (req, res) => {
        Movie2.update({ _id: req.params.movieId }, req.body, { new: true, runValidators: true })
        .catch(err => res.json(err))
        .then(data => res.json(data))
    },
    create: (req, res) => {
        let movie = new Movie2(req.body);
        movie.save()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    }
}