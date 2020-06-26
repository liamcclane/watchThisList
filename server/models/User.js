let mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "THis is a custom message, you need to give a Name"]
        },
        _movies: [{
            type: mongoose.Types.ObjectId,
            ref: 'Movie'
        }]
    },
    {
        timestamps: true
    }
)

mongoose.model('User', UserSchema);
