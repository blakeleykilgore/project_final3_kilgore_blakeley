$(document).ready(function () {
    $('.hamburger').click(function () {
        $('nav ul').slideToggle('slow');
        $('.hamburger').toggleClass('is-active', 'add');
    });
});
