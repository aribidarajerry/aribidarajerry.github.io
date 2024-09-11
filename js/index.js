$(document).ready(function() {
    "use strict";

    var carousel = $('.carousel');
    var inner = carousel.find('.carousel-inner');
    var items = inner.find('.carousel-item');
    var prev = carousel.find('.fa-arrow-left');
    var next = carousel.find('.fa-arrow-right');

    next.on('click', function() {
        var active = items.filter('.active');
        var nextItem = active.next();

        if (nextItem.length === 0) {
            nextItem = items.first();
        }

        active.removeClass('active');
        nextItem.addClass('active');
    });

    prev.on('click',
        function() {
            var active = items.filter('.active');
            var prevItem = active.prev();

            if (prevItem.length === 0) {
                prevItem = items.last();
            }

            active.removeClass('active');
            prevItem.addClass('active');
        });

    $("li:nth-child(1)").click(function() {
        $(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display",
            "none");
        var about = $("#about").offset();
        window.scrollTo(0,
            about.top);
        document.title = "Aribidara Jerry - About";
    });

    $("li:nth-child(2)").click(function() {
        $(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display",
            "none");
        var works = $("#works").offset();
        window.scrollTo(0,
            works.top);
        document.title = "Aribidara Jerry - Works";
    });

    $("li:nth-child(3)").click(function() {
        $(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display",
            "none");
        var contact = $("#contact").offset();
        window.scrollTo(0,
            contact.top);
        document.title = "Aribidara Jerry - Contact";
    });

    $("li:nth-child(4)").click(function() {
        $(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display",
            "none");
        var contact = $("#gallery").offset();
        window.scrollTo(0,
            contact.top);
        document.title = "Aribidara Jerry - Image gallery";
    });

    $(".fa-bars").click(function() {
        $(this).hide();
        $(".close").show();
        $("nav").width("360px");
        $("nav ul, nav div, button").fadeIn("1000");
    });

    $(".close").click(function() {
        $(this).hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display",
            "none");
        $(".form").fadeOut("slow");
    });

    $("#message").click(function() {
        $("#message, #message i").css({
            "opacity": "0",
            "visibility": "hidden"
        });
    });

    $("#subscribe").click(function() {
        $("nav").width("0");
        $("nav ul, nav div, button").css("display",
            "none");
        $(".form").slideDown("slow");
        var form = $(".form").offset();
        window.scrollTo(0,
            form.top);
        $(".form").css("display",
            "flex");
    });
    $("li:last").click(function() {
        window.open("eclectic.html");
    })
});
