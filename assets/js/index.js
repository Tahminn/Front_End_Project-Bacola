$(function () {
  //header
  $(".language-option").hover(function () {
    $(".language-menu").toggleClass("inactive");
  });
  $(".currency-option").hover(function () {
    $(".currency-menu").toggleClass("inactive");
  });
  $(".menu-wrapper ul li:nth-child(1)").hover(function () {
    $(".home-menu").toggleClass("inactive");
  });
  $(".menu-wrapper ul li:nth-child(2)").hover(function () {
    $(".shop-menu").toggleClass("inactive");
  });
  $(".select-location button").on("click", function () {
    $(".select-location-back").toggleClass("inactive");
  });
  $(".select-location-box i").on("click", function () {
    $(".select-location-back").toggleClass("inactive");
  });
  $(".all-catagories li:nth-child(1)").mouseover(function () {
    $(".fruits-vegetables-list").removeClass("inactive");
  });
  $(".all-catagories li:nth-child(1)").mouseout(function () {
    $(".fruits-vegetables-list").addClass("inactive");
  });
  $(".all-catagories li:nth-child(4)").mouseover(function () {
    $(".beverages-list").removeClass("inactive");
  });
  $(".all-catagories li:nth-child(4)").mouseout(function () {
    $(".beverages-list").addClass("inactive");
  });
  $(".button-all-catagories").on("click", function () {
    $(".all-catagories").toggleClass("active collapsed");
  });
  $(".sidebar-icon").on("click", function () {
    $(".sidebar").css("transform", "translateX(0)");
    $(".sidebar").css("transition-duration", "1s");
  });
  $(".sidebar i").on("click", function () {
    $(".sidebar").css("transform", "translateX(-25rem)");
    $(".sidebar").css("transition-duration", "1s");
  });

  //custom slider
  let leftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");
let sliderList = document.querySelector(".slider-scroll");
let arrLi = document.querySelectorAll(".slider ul li");
let clickCount = 0;

rightIcon.addEventListener("click", function(){
    clickCount++;
    console.log(clickCount);
    // let valueProp = window.getComputedStyle(sliderList).getPropertyValue("transform");
    // let valueArr = valueProp.split(", ");
    // let translateXValue = parseInt(valueArr[4]);
        if (clickCount >=0 && clickCount < arrLi.length - 4) {
            sliderList.style.transform = "translateX(" + (- 259 * clickCount) + "px)";
        }
        else{
            clickCount = 0;
            sliderList.style.transform = "translateX(" + (- 259 * clickCount) + "px)";
        }
});
leftIcon.addEventListener("click", function(){
    
    clickCount--;
    // let valueProp = window.getComputedStyle(sliderList).getPropertyValue("transform");
    // let valueArr = valueProp.split(", ");
    // let translateXValue = parseInt(valueArr[4]);
    if (clickCount < 0) {
        clickCount = arrLi.length - 5;
        sliderList.style.transform = "translateX(" + (-259 * clickCount) + "px)";      
    }
    else{
        sliderList.style.transform = "translateX(" + (-259 * clickCount) + "px)";        
    }
       
});
});
