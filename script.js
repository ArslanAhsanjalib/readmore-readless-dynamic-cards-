// Expending Cards for Featured
$(document).ready(function () {
    $(".click").click(function(e){
        if ($(this).parent().siblings("p").hasClass("update-my-height")) {
          $(this).parent().siblings("p").removeClass("update-my-height");
            $(this).children(".fa").removeClass("fa-angle-up");
            $(this).children(".fa").addClass("fa-angle-down");
 }
        else{
            $(this).parent().siblings("p").addClass("update-my-height");
            $(this).children(".fa").removeClass("fa-angle-down");
            $(this).children(".fa").addClass("fa-angle-up");
        }
    });
 });

// Expending Cards Featured End