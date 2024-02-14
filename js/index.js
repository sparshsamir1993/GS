$(document).ready(function () {
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        $('.nav-wrapper').toggleClass('open');
    });

    $(".nav-links a").click(function () {
        $('#nav-icon').toggleClass('open');
        $('.nav-wrapper').toggleClass('open');
    });

    $('.nav-links a, .header-block a').click(function (e) {
        e.preventDefault();
        var sectionId = $(this).data('section');
        var section = $('#' + sectionId);
        if (section.length) {
            $('html, body').animate({
                scrollTop: section.offset().top
            }, 800);
        }
    });
});