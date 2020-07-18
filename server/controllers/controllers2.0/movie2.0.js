let mongoose = require('mongoose');
let Movie2 = mongoose.model('Movie2');
let Post = mongoose.model('Post');
let Comment = mongoose.model('Comment');
let Character = mongoose.model('Character');

// here we are exporting an anonymous object where the key val pairs are ["string", function]
module.exports = {
    index: (req, res) => {
        Movie2.find()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    show: (req, res) => {
        Movie2.findOne({ _id: req.params.movieId }).populate('_post').exec()
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
        // console.log("line 36");
        // console.log(movie._character);
        // if (movie._character) {
        //     for (let c of movie._character) {
        //         console.log("in the loop here line 39")
        //         console.log(c);
        //         let newestCharacter = new Character(c);
        //         newestCharacter.save()
        //             .catch(err => res.json(err))
        //             .then(data => res.json(data))
        //     }
        // }
        movie.save()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    }
}