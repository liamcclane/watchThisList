let mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
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
        _comments: [{
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }]
    },
    {
        timestamps: true
    }
)

mongoose.model('Post', PostSchema);