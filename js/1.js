$(document).ready(function() {
    $('.content_menu , .link').slideUp(0);

    $('.box span,.content_menu span').click(function() {

        $(this).next('.content_menu,.link').slideToggle();

        $(this).toggleClass('bg-cyclamen-opacity ');
        $(this).toggleClass('demo ');
    });
});