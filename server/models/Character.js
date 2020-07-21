let mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema(
    {
        characterName:{
            type: String,
            required: [true,"THis is a custom message, you need to give the movie title"]
        },
        actorName: {
            type: String,
        },
        imgLink:{
            type: String
        },
        likeCount:{
            type:Number
        },
        _movie : {
            type : mongoose.Types.ObjectId,
            ref : "Movie2"
        }
    },
    {
        timestamps: true
    }
)

mongoose.model('Character2', CharacterSchema);
