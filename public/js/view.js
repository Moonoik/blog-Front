$(document).ready(function(){
	$(".contentAll img").click(function(){
		$(".overlay").fadeTo(600, 1).css({backgroundImage:"url("+this.src+")"});
		$(".overlay").fadeTo(600, 1).css({"background-size": "80%"});
	});
	$(".overlay").click(function(){
		$(this).stop().fadeTo(600, 0, function(){
			$(this).hide();
		});
	});
});
