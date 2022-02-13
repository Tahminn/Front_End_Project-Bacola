$(function () {
    //header
    $(".language-option").hover(function(){
        $(".language-menu").toggleClass("inactive")
    })
    $(".currency-option").hover(function(){
        $(".currency-menu").toggleClass("inactive")
    })
    $(".menu-wrapper ul li:nth-child(1)").hover(function(){
        $(".home-menu").toggleClass("inactive")
    })
    $(".menu-wrapper ul li:nth-child(2)").hover(function(){
        $(".shop-menu").toggleClass("inactive")
    })
    $(".select-location-box i").on("click", function(){
        $(".select-location-back").toggleClass("active");
    })
    $(".all-catagories li:nth-child(1)").mouseover(function(){
        $(".fruits-vegetables-list").removeClass("inactive");
    })
    $(".all-catagories li:nth-child(1)").mouseout(function(){
        $(".fruits-vegetables-list").addClass("inactive");
    })
    $(".all-catagories li:nth-child(4)").mouseover(function(){
        $(".beverages-list").removeClass("inactive");
    })
    $(".all-catagories li:nth-child(4)").mouseout(function(){
        $(".beverages-list").addClass("inactive");
    })
    $(".button-all-catagories").on("click", function(){
        $(".all-catagories").toggleClass("active collapsed")
    })

});