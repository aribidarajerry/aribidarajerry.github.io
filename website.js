$(document).ready(function () {


    // MOBILE MENU TOGGLE
    $('.menu-toggle').click(function () {
        $('.nav-links').toggleClass('active');
    });

    const sections = $('section');
    const navLinks = $('.nav-links a');
    const pill = $('.nav-pill');

    function movePill(element) {
        pill.css({
            width: element.outerWidth(),
            left: element.position().left
        });
    }

    // INITIAL POSITION (first active link)
    movePill($('.nav-links a.active').first());

    // SCROLL SPY + PILL MOVE
    $(window).on('scroll', function () {

        let scrollPos = $(document).scrollTop();

        sections.each(function () {

            let top = $(this).offset().top - 120;
            let bottom = top + $(this).outerHeight();
            let id = $(this).attr('id');

            if (scrollPos >= top && scrollPos <= bottom) {

                let activeLink = $('.nav-links a[href="#' + id + '"]');

                navLinks.removeClass('active');
                activeLink.addClass('active');

                movePill(activeLink);

            }

        });

    });

    // CLICK SUPPORT (smooth sync)
    navLinks.on('click', function () {

        navLinks.removeClass('active');
        $(this).addClass('active');

        movePill($(this));

    });



    let current = {};

    // OPEN VIDEO
    $('.youtube-btn').on('click', function(e) {

        e.preventDefault();

        let video = $(this).data('video');

        $('#video-frame').attr('src',
            video);

        $('#compModal').fadeIn();

    });

    // CLOSE MODAL (overlay click)
    $('.comp-overlay, .close-modal').on('click', function () {

        $('#compModal').fadeOut();

        // STOP VIDEO
        $('#video-frame').attr('src',
            '');

    });


    // Prevent closing when clicking inside video
    $('.video-content').click(function (e) {
        e.stopPropagation();
    });

    // TAB SWITCH
    $('.tab').click(function () {

        let tab = $(this).data('tab');

        $('.tab').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $('.' + tab).addClass('active');

    });



    $('#profileBox').click(function () {
        $('.social-overlay').fadeToggle(200);
    });



    const textArray = [
        "Music Educator",
        "Instrumentalist",
        "Web Developer",
        "Composer",
        "Creative Technologist"
    ];

    let i = 0; // word index
    let j = 0; // letter index
    let currentText = "";
    let isDeleting = false;

    function typeEffect() {

        currentText = textArray[i];

        if (!isDeleting) {
            // typing
            $('#typed-text').text(currentText.substring(0, j + 1));
            j++;

            if (j === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1200); // pause before delete
                return;
            }

        } else {
            // deleting
            $('#typed-text').text(currentText.substring(0, j - 1));
            j--;

            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % textArray.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50: 100);
    }

    typeEffect();




    $('.music-card').hover(
        function () {
            $(this).find('.overlay').stop().fadeIn(200);
        },
        function () {
            $(this).find('.overlay').stop().fadeOut(200);
        }
    );

    // 🎬 OPEN VIDEO MODAL
    $('.youtube-btn').on('click', function (e) {

        e.preventDefault();

        let video = $(this).data('video');

        $('#video-frame').attr('src', video);

        $('#compModal').fadeIn();

        $('body').css('overflow', 'hidden');

    });

    // ❌ CLOSE MODAL
    function closeModal() {

        $('#compModal').fadeOut();

        $('#video-frame').attr('src', '');

        $('body').css('overflow', 'auto');

    }

    $('.comp-overlay, .close-modal').on('click', function () {
        closeModal();
    });


    $('.filter-btn').on('click', function () {

        let filter = $(this).data('filter');

        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        $('.video-item').each(function () {

            let category = $(this).data('category');

            if (filter === 'all' || category === filter) {
                $(this).removeClass('hide').addClass('show');
            } else {
                $(this).removeClass('show').addClass('hide');
            }

        });

    });



    var $gallery = $('.gallery');

    $gallery.imagesLoaded(function () {

        $gallery.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });

        setTimeout(function () {
            $gallery.isotope('layout');
        },
            100);

    });

    // 🔥 FIX: orientation + resize handler
    function relayoutGallery() {
        $gallery.isotope('layout');
    }

    $(window).on('resize orientationchange', function () {
        setTimeout(relayoutGallery,
            150);
    });

    $(window).on('scroll', function () {

        $('.video-item').each(function () {

            let top = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let height = $(window).height();

            if (scroll + height > top + 50) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }

        });

    });




    $('.filter-buttons').on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filterValue
        });

        $('.filter-buttons button').removeClass('active');
        $(this).addClass('active');

    });

});