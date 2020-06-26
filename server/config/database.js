let mongoose = require('mongoose');


mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/watchThisList', { useNewUrlParser: true });

require('../models/User');
require('../models/Movie');
require('../models/Link');
require('../models/Character');