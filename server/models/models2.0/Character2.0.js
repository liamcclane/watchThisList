let mongoose = require('mongoose');

const CharacterAgainSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Custom error, char needs name"]
    },
    actorName: {
        type: String
    },
    imgLink: {
        type:String
    },
    likeCount: {
        type:Number
    }
}, {
    timestamps : true
})

mongoose.model("CharacterAgain", CharacterAgainSchema);