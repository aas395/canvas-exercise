var requestAnimationFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            return window.setTimeout(callback, 1000 / 60);
	          };
})();

$(document).ready(function(){

});
