$(function() {
    ($(".login input").on("click", function(e) {
        if($(".username input").val() == "" || $(".password input").val() == ""){
            $(".error-message").removeClass("d-none")
        }
        if($(".username input").val() == "admin" || $(".password input").val() == "admin12"){
            window.location.href= "admin.html";
        }
    })); 
});