$(document).ready(function(){
	
	var canvas = document.getElementById('palette');
	var ctx = canvas.getContext('2d');


	//set canvas height and width
	canvas.height = 200;
	canvas.width = 200;

	//draw a red circle
	ctx.beginPath();
	ctx.arc(100,100,50,0,2*Math.PI);
	ctx.strokeStyle = '#000';
	ctx.fillStyle = '#000';
	ctx.stroke();
	//ctx.fill();

});
