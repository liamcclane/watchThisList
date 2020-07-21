let mongoose = require('mongoose');


mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/watchThisList', { useNewUrlParser: true });

// require('../models/User');
// require('../models/Movie');
// require('../models/Link');
// require('../models/Character');
require('./../models/models2.0/Movie2.0');
require('./../models/models2.0/Comment');
require('./../models/models2.0/Post');
require('./../models/models2.0/Character2.0');