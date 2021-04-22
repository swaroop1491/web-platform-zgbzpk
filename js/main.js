$(document).ready(function(){
	$(".mobile-first-page").click(function(){
		$(this).addClass("open");
		$(".header").addClass("fadein");
		$(".body-container").addClass("fadein");
		$("#mobile-audio").get(0).play();
	})
})