let mongoose = require('mongoose');
let Movie2 = mongoose.model('Movie2');
let Post = mongoose.model('Post');
let Comment = mongoose.model('Comment');
let Character = mongoose.model('Character');

module.exports = {
    create: (req, res) => {
        let c = new Character(req.body);
        console.log("****this route line 10*****")
        c.save()
            .catch(err => res.json(err))
            .then(cha => {
                return res.json(cha);
                // Movie2.findOne({ _id: req.params.movieId })
                //     .catch(err => res.json(err))
                //     .then(movie => {
                //         movie._characters.push(c._id);
                //         movie.save()
                //             .catch(err => res.json(err))
                //             .then(data => res.json(data))
                //     })
            })
    },
    delete: (req, res) => {
        Character.deleteOne({ _id: req.params.characterId })
            .catch(err => res.json(err))
            .then(data => res.json(data))
    }
}