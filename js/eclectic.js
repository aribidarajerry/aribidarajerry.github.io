$(document).ready(function() {
    $(".fa-bars").on("click", function() {
        $("nav").slideToggle();
    })
    $(".portfolio").hover(function() {
        $(".portfolio p").slideDown();
    }, function() {
        $(".portfolio p").slideUp();
    })
    $(".data").hover(function() {
        $(".data p").slideDown();
    }, function() {
        $(".data p").slideUp();
    })
    $(".resume").hover(function() {
        $(".resume p").slideDown();
    }, function() {
        $(".resume p").slideUp();
    })
})