$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-hide').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-hide').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-hide').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show().animate(
  			{'left': '1020px'},
  			500,
  			function() {
  				$(this).hide();
  				$(this).css('left', '520px');
  				
  			});
  		
	})
	
	.mouseup(function() {
  		$('.ryu-hide').hide();
  		$('.ryu-ready').show();
	});

	$('body').keydown(function(e) {
		if(e.which == 88){
		 $('.ryu-hide').hide();
		 $('.ryu-cool').show();
		}})
	.keyup(function(e) {
		if(e.which == 88){
		$('.ryu-hide').hide();
		 $('.ryu-still').show();
		 
		}});
			
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

$(document).ready(function(){
	$('.hulk-ryu').mouseenter(function() {
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').show();
	})
	.mouseleave(function(){
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.hulk-ryu-ready').hide();
  		$('.hulk-ryu-throwing').show();
  		$('.hulk-hadouken').finish().show().animate(
  			{'right': '1020px'},
  			500,
  			function() {
  				$(this).hide();
  				$(this).css('right', '520px');
  				
  			});
  		
	})
	
	.mouseup(function() {
  		$('.hulk-ryu-throwing').hide();
  		$('.hulk-ryu-ready').show();
	})

	$('body').keydown(function(e) {
		if(e.which == 67){
		 $('.hulk-ryu-still').hide();
		 $('.hulk-ryu-ready').hide();
		 $('.hulk-ryu-throwing').hide();
		 $('.hulk-ryu-cool').show();
		}})
	.keyup(function(e) {
		if(e.which == 67){
		 $('.hulk-ryu-still').show();
		 $('.hulk-ryu-cool').hide();
		}});
			
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}