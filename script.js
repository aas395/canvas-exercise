var requestAnimationFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            return window.setTimeout(callback, 1000 / 60);
	          };
})();

Math.linearTween = function (t, b, c, d) {
	return c*t/d + b;
};

$(document).ready(function(){
	var canvas = document.getElementById('palette');
	var ctx = canvas.getContext('2d');

	canvas.height = 200;
	canvas.width = 200;

	drawCircle(100,100,50,'#FA4542');
	drawText();

	drawCircle(25,25,10,'#000');
	

	var d = new Date();
	var initialTimestamp = d.getTime();
	step();
	

	function step(timestamp) {

		if(typeof timestamp == 'undefined') {
			var d = new Date();
			timestamp = d.getTime();
		}

		timestamp = timestamp - initialTimestamp ;

		//beginning value
		var b = 25;

		//where the animation should stop
		var stopPoint = 175;

		//change in value over the course of the animation
		var c = 100;

		//duration of animation in ms
		var d = 2000;

		var t = timestamp;

		var newX = Math.linearTween(t,b,c,d);
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		drawCircle(100,100,50,'#FA4542');
		drawText();

		drawCircle(newX, 25, 10, '#000');

		//run the animation as long as newX does not exceed C
		if(newX <= stopPoint) {
			requestAnimationFrame(step);
		}
	}


  	function drawCircle(x,y,radius,color) {
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();
  	}

  	//not parameterized, just used to maintain clean code
  	function drawText() {
  		var textSize = 80;

		ctx.font = textSize + 'px PFDinTextCompPro-Bold';
		ctx.textBaseline = 'top';
		ctx.fillStyle = '#FFFFFF';
		var text = 'GA';
		var textWidth = ctx.measureText(text).width;

		var startingLeft = 100-(textWidth/2)-1;
		var startingTop = 100-(textSize/2)+7;
	  	ctx.fillText(text, startingLeft, startingTop);
  	}

});
