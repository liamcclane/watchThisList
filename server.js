// require all middel wear
let express = require('express'),
    bodyparser = require('body-parser'),
    path = require('path');

// create an instatnce of express

const app = express();
const cors = require('cors');
app.use(cors());


// no need to configues session
// no need to set up view engine, no ejs files

// parse the post data
app.use(bodyparser.urlencoded({ extended: true }));

// give express access to the static content
app.use(express.static(path.join(__dirname, './client')));

// let express handel json objects
app.use(express.json());

// connect to the database
require('./server/config/database');

// connect to routes and the paths to them with the parameter, instance of express
// this is an example of hashing function where the object's values are functions
require('./server/config/routes')(app);

// this is a catch all for routes that don't assiciate with our api
// this route will be triggered if any of the routes above did not match

// run the server
app.listen(8000, () => {
    console.log("listening on port 8000");
})