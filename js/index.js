$(document).ready(function() {
    $("li:nth-child(1)").click(function() {
        $(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
	$("nav ul, nav div, button").css("opacity", "0");
        $("nav img").css({
            "border": "4px solid #000324", "opacity": "0"
        });
        $("nav img").fadeOut("slow");
        var about = $("#about").offset();
        window.scrollTo(0, about.top);
        document.title = "Aribidara Jerry - About"
    });
    $("li:nth-child(2)").click(function() {
	$(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("opacity", "0");
        $("nav img").css({
            "border": "4px solid #000324", "opacity": "0"
        });
        $("nav img").fadeOut("slow");
        var works = $("#works").offset();
        window.scrollTo(0, works.top);
        document.title = "Aribidara Jerry - Works"
    });
    $("li:nth-child(3)").click(function() {
	$(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("opacity", "0");
        $("nav img").css({
            "border": "4px solid #000324", "opacity": "0"
        });
        $("nav img").fadeOut("slow");
        var contact = $("#contact").offset();
        window.scrollTo(0, contact.top);
        document.title = "Aribidara Jerry - Contact"
    });
    $("nav img").css("opacity", "0");
    $(".fa-bars").click(function() {
        $(this).hide();
        $(".close").show();
        $("nav").width("70%");
        $("nav ul, nav div, button").css("opacity", "1");
        $("nav img").css({
            "border": "4px solid white", "opacity": "1"
        });
        $("nav img").fadeIn("fast");
    });
    $(".close").click(function() {
        $(this).hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("opacity", "0");
        $("nav img").css({
            "border": "4px solid #000324", "opacity": "0"
        });
        $("nav img").fadeOut("slow");
    });/*
    $(".greet").click(function() {
        $("#message, #message i").css({"opacity":"1", "visibility":"visible"});
    });*/
    $("#message").click(function() {
        $("#message, #message i").css({
            "opacity": "0", "visibility": "hidden"
        });
    });
    $("#signup-form i, #login").click(function() {
	$(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("opacity", "0");
        $("nav img").css({
            "border": "4px solid #000324", "opacity": "0"
        });
        $("nav img").fadeOut("slow");
	$("#signup-form").hide();
        $("#login-form, .form").slideDown("slow");
        var form = $(".form").offset();
        window.scrollTo(0, form.top);
    });
    $("#login-form i, #signup").click(function () {
	$(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("opacity", "0");
        $("nav img").css({
            "border": "4px solid #000324", "opacity": "0"
        });
        $("nav img").fadeOut("slow");
        $("#login-form").hide();
        $("#signup-form, .form").slideDown("slow");
        var form = $(".form").offset();
        window.scrollTo(0, form.top);
    });
});
