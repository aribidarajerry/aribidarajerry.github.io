$(document).ready(function() {
    let i = 0;
    $(".fa-arrow-right").click(function() {
        $(".fa-arrow-left").css("visibility", "visible");
        if (i == 0) {
            $(".imgs").attr("src", "img/jerry2.png");
            i++;
        } else if (i == 1) {
            $(".imgs").attr("src", "img/jerry3.png");
            i++;
        } else if (i == 2) {
            $(".imgs").attr("src", "img/jerry4.png");
            i++;
        } else if (i == 3) {
            $(".imgs").attr("src", "img/jerry5.png");
            i++;
        } else if (i == 4) {
            $(".imgs").attr("src", "img/jerry6.png");
            i++;
        } else if (i == 5) {
            $(".imgs").attr("src", "img/jerry7.png");
            i++;
        } else if (i == 6) {
            $(".imgs").attr("src", "img/jerry8.png");
            i++;
        } else if (i == 7) {
            $(".imgs").attr("src", "img/jerry9.png");
            i++;
        } else if (i == 8) {
            $(".imgs").attr("src", "img/jerry10.png");
            i++;
        } else if (i == 9) {
            $(".imgs").attr("src", "img/jerry11.png");
            i++;
        } else if (i == 10) {
            $(".imgs").attr("src", "img/jerry12.png");
            i++;
        } else if (i == 11) {
            $(".imgs").attr("src", "img/jerry13.png");
            i++;
        } else if (i == 12) {
            $(".imgs").attr("src", "img/jerry14.png");
            i++;
        } else if (i == 13) {
            $(".imgs").attr("src", "img/jerry15.png");
            i++;
        } else if (i == 14) {
            $(".imgs").attr("src", "img/jerry16.png");
            i++;
	} else if (i == 15) {
	    $(".imgs").attr("src", "img/jerry17.png");
	    i++;
	} else if (i == 16) {
            $(this).css("visibility", "hidden");
            $(".imgs").attr("src", "img/jerry18.png");
            i++;
        }/*$(".imgs").css("transform","rotate(360deg)");*/
    });
    $(".fa-arrow-left").click(function() {
	if (i == 17) {
	    $(".fa-arrow-right").css("visibility","visible");
	    $(".imgs").attr("src", "img/jerry17.png");
	    i--;
	} else if (i == 16) {
            $(".imgs").attr("src", "img/jerry16.png");
            i--;
        } else if (i == 15) {
            $(".imgs").attr("src", "img/jerry15.png");
            i--;
        } else if (i == 14) {
            $(".imgs").attr("src", "img/jerry14.png");
            i--;
        } else if (i == 13) {
            $(".imgs").attr("src", "img/jerry13.png");
            i--;
        } else if (i == 12) {
            $(".imgs").attr("src", "img/jerry12.png");
            i--;
        } else if (i == 11) {
            $(".imgs").attr("src", "img/jerry11.png");
            i--;
        } else if (i == 10) {
            $(".imgs").attr("src", "img/jerry10.png");
            i--;
        } else if (i == 9) {
            $(".imgs").attr("src", "img/jerry9.png");
            i--;
        } else if (i == 8) {
            $(".imgs").attr("src", "img/jerry8.png");
            i--;
        } else if (i == 7) {
            $(".imgs").attr("src", "img/jerry7.png");
            i--;
        } else if (i == 6) {
            $(".imgs").attr("src", "img/jerry6.png");
            i--;
        } else if (i == 5) {
            $(".imgs").attr("src", "img/jerry5.png");
            i--;
        } else if (i == 4) {
            $(".imgs").attr("src", "img/jerry4.png");
            i--;
        } else if (i == 3) {
            $(".imgs").attr("src", "img/jerry3.png");
            i--;
        } else if (i == 2) {
            $(".imgs").attr("src", "img/jerry2.png");
            i--;
        } else if (i == 1) {
	    $(this).css("visibility", "hidden");
            $(".imgs").attr("src", "img/jerry1.png");
            i=0;
        }
    });
    $("li:nth-child(1)").click(function() {
        $(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display", "none");
        var about = $("#about").offset();
        window.scrollTo(0, about.top);
        document.title = "Aribidara Jerry - About"
    });
    $("li:nth-child(2)").click(function() {
        $(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display", "none");
        $("#works").delay("slow").slideUp();
        var works = $("#works").offset();
        window.scrollTo(0, works.top);
        document.title = "Aribidara Jerry - Works"
    });
    $("li:nth-child(3)").click(function() {
        $(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display", "none");
        var contact = $("#contact").offset();
        window.scrollTo(0, contact.top);
        document.title = "Aribidara Jerry - Contact"
    });
    $(".fa-bars").click(function() {
        $(this).hide();
        $(".close").show();
        $("nav").width("250px");
        $("nav ul, nav div, button").fadeIn("1000");
    });
    $(".close").click(function() {
        $(this).hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div, button").css("display", "none");
        $(".form").fadeOut("slow");
    }); /*
    $(".greet").click(function() {
        $("#message, #message i").css({"opacity":"1", "visibility":"visible"});
    });*/
    $("#message").click(function() {
        $("#message, #message i").css({
            "opacity": "0", "visibility": "hidden"
        });
    });
    $("#subscribe").click(function() {
        $("nav").width("0");
        $("nav ul, nav div, button").css("display", "none");
        $(".form").slideDown("slow");
        var form = $(".form").offset();
        window.scrollTo(0, form.top);
        $(".form").css("display", "flex");
    });
});
