/**
 * Main application file
 */

var express = require('express');
var morgan = require('morgan');
var https = require('https');
var app = express();
var config = require('./config');
var user = require('./routes/User');
var home = require('./routes/Home');
var sensor = require('./routes/Sensor');
var camera = require('./routes/Camera');
var api = require('./routes/Api');
var bodyParser = require('body-parser');

// use morgan to log request to the console
app.use(morgan('dev'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
var controller = require('./controllers/api'); // API controller
var routes = express.Router();

routes.route('/').get(controller.api);

/* add your routes here

*/

// initialize routes with the /api prefix
app.use('/setoff', sensor.setoff);

app.get('/user', user.index);
app.get('/user/:id', user.show);
app.post('/user', user.create);
app.put('/user', user.update);
app.delete('/user', user.delete);

app.get('/home', home.index);
app.get('/home/:id', home.show);
app.post('/home', home.create);
app.put('/home', home.update);
app.delete('/home', home.delete);

app.get('/sensor', sensor.index);
app.get('/sensor/:id', sensor.show);
app.post('/sensor', sensor.create);
app.put('/sensor', sensor.update);
app.delete('/sensor', sensor.delete);

app.get('/camera', camera.index);
app.get('/camera/:id', camera.show);
app.post('/camera', camera.create);
app.put('/camera', camera.update);
app.delete('/camera', camera.delete);








// catch 404 status code
app.get('*', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.status(404).send(JSON.stringify({ message: 'Not Found' }, 2, 2));
});


// start the server
app.listen(config.port, function() {
    console.log('Listening on port ' + config.port);
});
