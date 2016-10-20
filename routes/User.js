var User = require('../models/Models').User;

/*
 * Users Routes
 *
 * This is a example of the GET,Post,delete methords of a api,
 */

exports.index = function(req, res) {
  User.find({}, function(err, docs) {
    if(!err) {
      res.json(200, { Users: docs });
    } else {
      res.json(500, { message: err });
    }
  });
}

exports.show = function(req, res) {
  var email = req.params.email; // The id of the User the user wants to look up.
  User.findOne({ 'user.emailAdress': email}, function(err, doc) {
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
    var newUser = new User();
    newUser.firstName = req.body.firstname;
    newUser.lastName = req.body.lastName;
    newUser.emailAddress = req.body.emailAddress;
    newUser.phone = req.body.phone;
    newUser.macAdress = req.body.macadress;
    newUser.homeId = req.body.homeid;
    newUser.state = req.body.state;
    newUser.qrCode = req.body.qrCode;

    newUser.save(function(err,user) {

        if(!err) {
          res.json(201, {message: ""});
        } else {
          res.json(500, {message: "Could not create Account. Error: " + err});
        }

      });

}

exports.update = function(req, res) {
  var id = req.body.id;
  user.findById(id, function(err, doc) {
      if(!err && doc) {
        doc.firstName = req.body.firstname;
        doc.lastName = req.body.lastName;
        doc.emailAddress = req.body.emailAddress;
        doc.phone = req.body.phone;
        doc.macAdress = req.body.macadress;
        doc.homeId = req.body.homeid;
        doc.state = req.body.state;
        doc.qrCode = req.body.qrCode;
        doc.save(function(err) {
          if(!err) {
            res.json(200, {message: "Account updated: " + Account_name});
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
  User.findById(id, function(err, doc) {
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
