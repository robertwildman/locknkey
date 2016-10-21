var sensor1,sensor2,sensor3,sensor4,sensor5,sensor6,sensor7,sensor8,sensor9,sensor10,sensor11,sensor12,sensor13,sensor14;

$(document).ready(function() {
			draw();
			$('#testcon').hide('fast');
			$('#testcase').click(function(event) {

				$('#con').hide('slow');
				$('#testcon').show('slow');
				testinfomation();
			});
			$('#setoff').click(function(event) {
				setoff();
				$.get('/setoff', function(data) {
				});
			});
			// when mouse button is clicked and held
			firstsen();

			});
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
function drawtr(x,y)
{
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
	ctx.fillStyle = 'yellow';
	if((x >= 100 && x <= 300) && (y >= 100 && y <= 300) )
	{
	ctx.fillRect(100,100,200,200);

	}else if((x >= 300 && x <= 400) && (y >= 100 && y <= 300) ){

	ctx.fillRect(300,100,100,200);
	}else if((x >= 400 && x <= 500) && (y >= 100 && y <= 300) ){

	ctx.fillRect(400,100,100,200);
	}else if((x >= 100 && x <= 350) && (y >= 300 && y <= 350) ){

	ctx.fillRect(100,300,250,50);
	}else if((x >= 350 && x <= 500) && (y >= 300 && y <= 350) ){


	ctx.fillRect(350,300,150,50);
	}else if((x >= 100 && x <= 260) && (y >= 350 && y <= 500) ){


	ctx.fillRect(100,350,160,150);
	}else if((x >= 260 && x <= 340) && (y >= 350 && y <= 450) ){

	ctx.fillRect(260,350,80,100);
	}else if((x >= 340 && x <= 500) && (y >= 350 && y <= 500) ){

	ctx.fillRect(340,350,160,150);
	}
	else if((x >= 260 && x <= 340) && (y >= 450 && y <= 500) ){

	ctx.fillRect(260,450,80,50);
	}
					ctx.fillStyle = 'black'
			        ctx.beginPath();
				    ctx.moveTo(x,y);
				    ctx.lineTo(280,130);
				    ctx.stroke();
				    ctx.moveTo(x,y);
				    ctx.lineTo(460,470);
				    ctx.stroke();
				    ctx.moveTo(x,y);
				    ctx.lineTo(150,470);
				    ctx.stroke();
}
var sensor = class{
  constructor(id, name, room,status) {
    this.id = id;
    this.name = name;
    this.room = room;
    this.status = status;
  }
  printdata()
  {
  	return "<tr><td id='"+this.id+"'>" + this.id+ "</td><td>" + this.name + "</td><td>" + this.room+ "</td><td>" + this.status + "</td></tr>"
  }
  turnon()
  {
  	this.status = true;
  }
};
function testinfomation()
{
	var table = $('#seninfo');
	sensor1 = new sensor(1,"Window Living Room","Living Room",false);
	table.append(sensor1.printdata());
	console.log(table);
	 sensor2 = new sensor(2,"Motion Dectactor Living Room","Living Room",false);
	table.append(sensor2.printdata());
	 sensor3 = new sensor(3,"Window Kitchen","Kitchen",false);
	table.append(sensor3.printdata());
	 sensor4 = new sensor(4,"Motion Dectactor Kitchen","Kitchen",false);
	table.append(sensor4.printdata());
	 sensor5 = new sensor(5,"Window Great Room","Great Room",false);
	table.append(sensor5.printdata());
	 sensor6 = new sensor(6,"Motion Dectactor Great Room","Great Room",false);
	table.append(sensor6.printdata());
	 sensor7 = new sensor(7,"Window Dinning","Dinning",false);
	table.append(sensor7.printdata());
	 sensor8 = new sensor(8,"Motion Dectactor Dinning","Dinning",false);
	table.append(sensor8.printdata());
	 sensor9 = new sensor(9,"Window Bedroom","Bedroom",false);
	table.append(sensor9.printdata());
	 sensor10 = new sensor(10,"Motion Dectactor Bedroom","Bedroom",false);
	table.append(sensor10.printdata());
	 sensor11 = new sensor(11,"Window Bath","Bath",false);
	table.append(sensor11.printdata());
	 sensor12 = new sensor(12,"Motion Dectactor Bath","Bath",false);
	table.append(sensor12.printdata());
	sensor13 = new sensor(13,"Motion Dectactor Hall","Hall",false);
	table.append(sensor13.printdata());
}
function setoff()
{
	sensor3.turnon();
	$("td#3").parent().replaceWith(sensor3.printdata());
	sensor4.turnon();
	$("td#4").parent().replaceWith(sensor4.printdata());
}
function firstsen()
{

	$('#canvas').on('mousemove', function(e){

					var canvas = document.getElementById('canvas');
  					if (canvas.getContext) {
  						var pos = getMousePos(canvas, e);
    					drawtr(pos.x,pos.y);
    					console.log(pos.x,pos.y);
				}

			});
}
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

	//Setting up the Rooms
	ctx.lineWidth = 10;
    ctx.strokeRect(100,100,400,400);
    ctx.lineWidth = 3;
    ctx.strokeRect(100,100,200,200);
	ctx.strokeRect(300,100,100,200);
	ctx.strokeRect(400,100,100,200);
	ctx.strokeRect(100,300,250,50);
	ctx.strokeRect(350,300,150,50);
	ctx.strokeRect(100,350,160,150);
	ctx.strokeRect(260,350,80,100);
	ctx.strokeRect(340,350,160,150);

	//Adding Access points
	ctx.beginPath();
	ctx.arc(280,130,12.5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(460,470,12.5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(150,470,12.5,0,2*Math.PI);
	ctx.fill();

  }
}