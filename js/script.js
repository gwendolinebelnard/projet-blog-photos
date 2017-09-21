$(function() {
    $("img").addClass("img-responsive");
});


$('document').ready(function() {
    $('.article-structure').on('mouseenter', 'h3', function() {
        $(this).css({'font-weight': '900'});
    });
    $('.article-structure').on('mouseenter', 'h4', function() {
        $(this).css({'font-weight': '600'});
    });
    $('.article-structure').on('mouseenter', 'p', function() {
        $(this).css({'font-weight': '600'});
    });
});
