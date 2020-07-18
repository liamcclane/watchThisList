let mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "THis is a custom message, you need to give the movie title"]
        },
        content: {
            type: String,
            required: [true, "THis is a custom message, you need to give the movie title"]
        },
        amountOfUpVotes: {
            type: Number,
        },
    },
    {
        timestamps :true
    }
)

mongoose.model('Comment', CommentSchema);