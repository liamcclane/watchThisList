let mongoose = require('mongoose');


const Movie2Schema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: [true,"THis is a custom message, you need to give the movie title"]
        },
        imgLink:{
            type: String
        },
        rating:{
            type: Number,
            max: 10,
            min: -10
        },
        professionalDescription:{
            type: String
        },
        _moreLikeThis:[{
            type: mongoose.Types.ObjectId,
            ref: "Movie2.0"
        }],
        _characters:[{
            type: mongoose.Types.ObjectId,
            ref: "CharacterAgain"
        }],
        _posts : [{
            type: mongoose.Types.ObjectId,
            ref: "Post"
        }]
    },
    {
        timestamps: true
    }
)

mongoose.model('Movie2', Movie2Schema);
