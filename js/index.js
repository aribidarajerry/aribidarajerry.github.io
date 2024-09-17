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
    $(".fa-bars").click(function() {
        $(this).hide();
        $(".close").show();
        $("nav").css("width", "80%");
        $("nav ul, nav div, button").fadeIn("1000");
    });
    $(".close").click(function() {
        $(this).hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display",
            "none");
        $(".form").slideUp("slow");
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
        $(".form").css("display",
            "flex");
    });
    $("li:last").click(function() {
        window.open("https://eclecticsite.vercel.app");
    });
    let date = new Date();
    $("footer p").text(date.getFullYear());
});