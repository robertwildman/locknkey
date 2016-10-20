var Sensor = require('../models/Models').Sensor;

/*
 * Users Routes
 *
 * This is a example of the GET,Post,delete methords of a api,
 */

exports.index = function(req, res) {
  Sensor.find({}, function(err, docs) {
    if(!err) {
      res.json(200, { Users: docs });
    } else {
      res.json(500, { message: err });
    }
  });
}

exports.show = function(req, res) {
  var id = req.params.id; // The id of the User the user wants to look up.
  Sensor.findById(id, function(err, doc) {
    if(!err && doc) {
      res.json(200, doc);
    } else if(err) {
      res.json(500, { message: "Error loading User." + err});
    } else {
      res.json(404, { message: "User not found."});
    }
  });
}

exports.create = function(req, res) {
  //Gets infomation from the request,
    var newSensor = new Home();
    newSensor.active = req.body.active;
    newSensor.save(function(err) {

        if(!err) {
          res.json(201, {message: "Account created with name: "});
        } else {
          res.json(500, {message: "Could not create Account. Error: " + err});
        }

      });

}

exports.update = function(req, res) {

  var id = req.body.id;

  Sensor.findById(id, function(err, doc) {
      if(!err && doc) {
        doc.active = req.body.active;
        doc.save(function(err) {
          if(!err) {
            res.json(200, {message: "Sensor infomation in "});
          } else {
            res.json(500, {message: "Could not update Account. " + err});
          }
        });
      } else if(!err) {
        res.json(404, { message: "Could not find Account."});
      } else {
        res.json(500, { message: "Could not update Account." + err});
      }
    });
}

exports.delete = function(req, res) {

  var id = req.body.id;
  Sensor.findById(id, function(err, doc) {
    if(!err && doc) {
      doc.remove();
      res.json(200, { message: "User removed."});
    } else if(!err) {
      res.json(404, { message: "Could not find User."});
    } else {
      res.json(403, {message: "Could not delete User. " + err });
    }
  });
}
