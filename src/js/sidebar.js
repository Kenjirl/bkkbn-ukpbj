$(document).ready(function() {
    $(".toggle-nav-btn").click(function() {
        $(".sidebar").toggleClass('active');
    });

    $('.dropdown-btn').click(function() {
        $(".dropdown-btn").removeClass('active');
        $(".dropdown-content").removeClass('active');
        $(this).toggleClass('active');
        $(this).closest('.dropdown-btn-wrapper').next('.dropdown-content').toggleClass('active');
    });
});