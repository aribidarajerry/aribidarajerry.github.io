$(document).ready(function() {
	"use strict";
	// let display = $(".display")[0];
	// $(".images img").mouseover(function() {
	// 	$('.img-display').css('display','flex');
	// 	let images = $(this);
	// 	for (let image of images) {
	// 		if (image) {
	// 			display.src = image.src;
	// 		}
	// 	}
	// });
	// $(".images img").mouseleave(function() {
	// 	display.src = '';
	// 	$('.img-display').css('display','none');
	// });
	$(".fa-bars").click(function() {
		$(this).css("display", "none");
		$(".close").css("display", "block");
		$("nav").css("width", "60%");
		$("nav ul, nav div, button#subscribe").fadeIn("1000");
	});
	$(".close").click(function() {
		$(this).css("display", "none");
		$(".fa-bars").css("display", "block");
		$("nav").width("0");
		$("nav ul, nav div, button#subscribe").css("display",
			"none");
		$(".form").slideUp("slow");
	});
	$("#subscribe").click(function() {
		// $("nav").width("0");
		// $("nav ul, nav div, button#subscribe").css("display",
		// 	"none");
		// $(".form").slideDown("slow");
		// $(".form").css("display",
		// 	"flex");
		alert("Still under development!");
	});
	$("#cv").click(function() {
		alert("In progress... Please view My Projects");
	})
	$("#projects").click(function() {
		window.location.href = "https://eclecticsite.vercel.app";
	});
	let date = new Date();
	$("footer p").text(date.getFullYear());
});