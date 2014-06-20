var requestAnimationFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            return window.setTimeout(callback, 1000 / 60);
	          };
})();

$(document).ready(function(){
	

	var canvas = document.getElementById('palette');
	var ctx = canvas.getContext('2d');

	//set canvas height and width
	canvas.height = 200;
	canvas.width = 200;
	
	//draw red GA circle
	drawCircle(ctx, 100, 100,50, '#FA4542')
	addGAText();

	drawCircle(ctx, 25, 25, 10, '#FA4542');
	drawCircle(ctx, 175, 175, 10, '#FA4542');
	drawCircle(ctx, 25, 175, 10, '#FA4542');
	drawCircle(ctx, 175, 25, 10, '#FA4542');
	


  	function drawCircle(ctx,x,y,radius,color) {
		ctx.beginPath();
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
  	}

  	function addGAText() {
		var textSize = 60;
		ctx.font = textSize + 'px PFDinTextCompPro-Bold';
		ctx.textBaseline = 'top';
		ctx.fillStyle = '#FFFFFF';
		var text = 'GA';
		var textWidth = ctx.measureText(text).width;

		var startingLeft = 100-(textWidth/2) - 3;
		var startingTop = 100-(textSize/2);
	  	ctx.fillText(text, startingLeft, startingTop);
  	}

});
