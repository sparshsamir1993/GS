$(document).ready(function () {
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        $('.nav-wrapper').toggleClass('open');
    });

    $(".nav-links a").click(function () {
        $('#nav-icon').toggleClass('open');
        $('.nav-wrapper').toggleClass('open');
    });
});