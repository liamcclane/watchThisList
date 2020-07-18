let mongoose = require('mongoose');
let Movie2 = mongoose.model('Movie2');
let Post = mongoose.model('Post');
let Comment = mongoose.model('Comment');
let Character = mongoose.model('Character');

module.exports = {
    index: (req, res) => {
        Comment.find()
            .catch(err => res.json(err))
            .then(data => res.json(data))
    },
    create: (req, res) => {
        let com = new Comment(req.body);
        Post.findById({ _id: req.params.postId })
            .catch(err => res.json(err))
            .then(thePost => {
                com.save()
                    .catch(err => res.json(err))
                    .then(comment => {
                        thePost._comments.push(comment._id)
                        thePost.save()
                            .catch(err => res.json(err))
                            .then(data => res.json(comment))
                    })
            })
    },
    delete: (req, res) => {
        Comment.deleteOne({ _id: req.params.commentId })
            .catch(err => res.json(err))
            .then(data => res.json(data))
    }
}