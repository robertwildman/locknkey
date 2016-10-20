exports.alarmoff = function(req, res) {
	var id = req.body.id;
	var type = req.body.type;
	//Sends the infomation to the android phone and sends a text message and logs it in cisco spark room

    res.json(200, "Hello and Welcome to the api!");
};