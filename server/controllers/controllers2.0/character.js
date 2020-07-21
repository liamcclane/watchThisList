let mongoose = require('mongoose');
let Movie2 = mongoose.model('Movie2');
let Character = mongoose.model('CharacterAgain');

module.exports = {
    index: (req, res) => {
        console.log("Work dAmnit");
        Character.find()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    show: (req, res) => {
        Character.findById({ _id: req.params.characterId })
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    create: (req, res) => {
        let x = new Character(req.body);
        Movie2.findOne({ _id: req.params.movieId })
            .catch(err => res.json(err))
            .then(m => {
                m._characters.push(x._id);
                m.save()
                    .catch(err => res.json(err))
                    .then(data => {
                        x.save()
                            .catch(err => res.json(err))
                            .then(data => res.json(data))
                    })
            })
        // return res.json(req.body);
    },
    delete: (req, res) => {
        console.log("deleting!!!******");
        Character.deleteOne({ _id: req.params.characterId })
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    filterByMovie: (req, res) => {
        Movie2.findOne({ _id: req.params.movieId }).populate('_characters').exec()
            .catch(err => res.json(err))
            .then(movie => {
                return res.json(movie._characters)
            })
    }
}