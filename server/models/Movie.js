let mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
    {
        _user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        title:{
            type:String,
            required: [true,"THis is a custom message, you need to give the movie title"]
        },
        imgLink:{
            type: String
        },
        rating:{
            type: Number,
            required : [true, "PLEASE input your ranking for this movie"],
            max: 10,
            min: -10
        },
        personalDescription:{
            type: String,
            maxlength: [1000, "Sorry personal description is too long"]
        },
        professionalDescription:{
            type: String
        },
        _links:[{
            type: mongoose.Types.ObjectId,
            ref: "Link"
        }],
        _characters:[{
            type: mongoose.Types.ObjectId,
            ref: "Character"
        }],
    },
    {
        timestamps: true
    }
)

mongoose.model('Movie', MovieSchema);
