let mongoose = require('mongoose');


const LinkSchema = new mongoose.Schema(
    {
        link:{
            type: String,
            required: [true, "CuStOm MeSsAgE you need to enter their name to add them"],
            minlength: [1, "Actor's name needs to me longer"]
        },
        output: {
            type:String,
            required: [true, "CuStOm MeSsAgE you need to enter their name to add them"],
            minlength: [1, "Actor's name needs to me longer"]
        },
    },
    {
        timestamps :true
    }
)

mongoose.model('Link', LinkSchema);