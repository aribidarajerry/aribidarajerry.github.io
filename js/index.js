$(document).ready(function() {
	"use strict";
	let display = $(".display")[0];
	$(".images img").mouseover(function() {
		$('.img-display').css('display','flex');
		let images = $(this);
		for (let image of images) {
			if (image) {
				display.src = image.src;
			}
		}
	});
	$(".images img").mouseleave(function() {
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
	$("#projects").click(function() {
	        window.location.href = "https://eclecticsite.vercel.app";
	});
	let date = new Date();
	$("footer p").text(date.getFullYear());
});
