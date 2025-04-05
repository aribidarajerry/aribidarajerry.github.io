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
	$(".fa-bars").click(function() {
		$(this).toggleClass("fa-close");
		$("nav").toggleClass("active")
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
		// window.location.href = "https://aribidarajerry.github.io/files/RESUME.pdf"
		window.location.href = "files/RESUME.pdf";
	});
	$("#projects").click(function() {
		window.location.href = "https://eclecticsite.vercel.app";
	});
	let date = new Date();
	$("footer p").text(date.getFullYear());
});