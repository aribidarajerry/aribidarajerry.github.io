$(document).ready(function() {
	"use strict";
	$(".images img").hover(function() {
		$('.img-display').css('display','flex');
		let images = $(this);
		let display = $(".display")[0];
		for (let image of images) {
			if (image) {
				display.src = image.src;
			}
		}
	}, function() {
		let display = $(".display")[0];
		display.src = '';
		$('.img-display').css('display','none');
	});

	
	$(".fa-bars").click(function() {
		$(this).hide();
		$(".close").show();
		$("nav").css("width", "60%");
		$("nav ul, nav div, button#subscribe").fadeIn("1000");
	});
	$(".close").click(function() {
		$(this).hide();
		$(".fa-bars").show();
		$("nav").width("0");
		$("nav ul, nav div, button#subscribe").css("display",
			"none");
		$(".form").slideUp("slow");
	});
	$("#subscribe").click(function() {
		$("nav").width("0");
		$("nav ul, nav div, button#subscribe").css("display",
			"none");
		$(".form").slideDown("slow");
		$(".form").css("display",
			"flex");
	});
	let date = new Date();
	$("footer p").text(date.getFullYear());
});