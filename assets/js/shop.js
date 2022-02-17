$(function () {
    
    $(".fa-plus").on("click", function () {
        $(this).parent().next().toggleClass("inactive");
        $(this).toggleClass("fa-minus");
        $(this).toggleClass("fa-plus");
    })














});