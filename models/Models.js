var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    emailAdress: String,
    phone: Number,
    macadresss: String,
    homeid:Number,
    state:Number,
    qrCode:String
});

var homeSchema = new Schema({
	_homekey: Number,
	sensor:Array,
	cameras:Array
});
var sensorSchema = new Schema({
	_sensorid: Number,
	Active: Boolean,
	User: Number
});
var cameraSchema = new Schema({
	_id:Number,
	ip:String,
	User: Number
});


var user = mongoose.model('user', userSchema);
var home = mongoose.model('home', homeSchema);
var sensor = mongoose.model('sensor', sensorSchema);
var camera = mongoose.model('camera', cameraSchema);

module.exports = {
  User: user,
  Home: home,
  Sensor: sensor,
  Camera: camera
};


