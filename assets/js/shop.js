$(function () {
    
    $(".fa-plus").on("click", function () {
        $(this).parent().next().toggleClass("inactive");
        $(this).toggleClass("fa-minus");
        $(this).toggleClass("fa-plus");
    })
    $(".fa-square").on("click", function () {
        $(this).toggleClass("fa-check-square");
        $(this).toggleClass("fa-square");
    })

    $(".fa-square").on("click", function () {
        $(this).toggleClass("fa-check-square");
    })
    $(".filter-show .sort-by i").on("click", function () {
        $(this).next().toggleClass("inactive");
    })
    $(".filter-show .show-column i").on("click", function () {
        $(this).next().toggleClass("inactive");
    })
    

    //pagination

    $("#discount-product-list .pagination-numbers ul li span").on("click", function () {
        $(this).parents().eq(3).prev().children().addClass("inactive")
        const ids = $(this).parents().eq(3).prev().children()
        for (const item of ids) {
            if($(this).attr("id") == item.id){           
                item.classList.remove("inactive")
            } 
        }
                       
    })


    //cart-function

    function getProductCount(list){
        return list.length;
    }


    let addButton = document.querySelectorAll(".button-add-card .btn");
    let countElem = document.querySelector("sup");


    if (JSON.parse(localStorage.getItem("products")) == null) {
        localStorage.setItem("products", JSON.stringify([]));
    }
    let products = JSON.parse(localStorage.getItem("products"));

    addButton.forEach(btn => {
        btn.onclick = function (e) {
            //debugger;
            e.preventDefault();
            debugger;
            //let productId = this.parentNode.parentNode.getAttribute("data-id");
            let productImg = this.parentNode.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.getAttribute("src");
            let productName = this.parentNode.previousElementSibling.lastElementChild.children[2].innerText;
            let productPrice = parseFloat(this.parentNode.previousElementSibling.lastElementChild.children[6].firstElementChild.innerText);
            console.log(productPrice);
            let existProduct = products.find(m => m.img == productImg);

            if (existProduct == undefined) {
                products.push({
                    //id: productId,
                    img: productImg,
                    name: productName,
                    price : productPrice,
                    count: 1
                })
            } else {
                existProduct.count += 1;
            }
            localStorage.setItem("products", JSON.stringify(products));
            //countElem.innerText = getProductCount(products);
        }
    })

    countElem.innerText = getProductCount(products);

    let button = document.getElementById("button");


    


















});
$("#slider-range").slider({
    range: true,
    min: 0,
    max: 70,
    step: 10,
    values: [0, 70],
    slide: function(e, ui) {
        var min = Math.floor(ui.values[0]);
        $('.slider-time').html('$' + min);

        var max = Math.floor(ui.values[1]);
        
        $('.slider-time2').html('$' + max);

        $('.box').each(function() {
            var startTime = (min);
            var endTime = (max);

            var value = $(this).data('start-time');
            if ((parseInt(endTime) >= parseInt(value) && (parseInt(startTime) <= parseInt(value))) ){
                $(this).show();
            } else {
                $(this).hide();
            }
            //
        });

    }
});