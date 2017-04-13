// app.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();         // define our app using express    
var bodyParser = require('body-parser');
require('./public/config');
// var router = require('./public/router');
var query = require('./public/query');
//app.use('/api', router);

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users                                       // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


app.get('/api/getUsers', query.getUsers);
app.post('/api/addUser', query.addUser);
app.delete('/api/deleteUser/:id', query.deleteUser);
app.put('/api/updateUser/:id', query.updateUser);
app.use('/', function(req, res) {
  res.json('I am internediate code');
});

app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Magic happens on port ' + port);
});
