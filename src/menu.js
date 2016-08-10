$(document).ready(function() {
    $(".mleft-room").click(function () {
        var state = $(this).find(".mleft-room-container").css("display");
        $(".mleft-room-container").slideUp();
        if(state == "none")
            $(this).find(".mleft-room-container").slideDown(500);
        else 
            $(this).find(".mleft-room-container").slideUp(500);
    });
    
    $("#switch").click(function() {
        $(".mleft-room-container").slideUp(500);
            
        var state = $(".mleft-room-item").css("display");
        if(state == "none")
        {
            $(this).find(".mleft-icon").css("background-image", "url(img/icon_toleft.png)");
            
            $("#mleft").animate({
                width: "300"
            }, 500);
            $(".mleft-room-item").fadeOut(0).delay(300).fadeIn(200);
            $(".mleft-button-title").fadeOut(0).delay(300).fadeIn(200)
        }
        else
        {
            $(this).find(".mleft-icon").css("background-image", "url(img/icon_toright.png)");
            
            $(this).find(".mleft-icon").animate({
                backgroundColor: "red"
            }, 500);
            
            $(".mleft-room-item").fadeOut(200);
            $(".mleft-button-title").fadeOut(200);
            $("#mleft").animate({
                    width: "60"
            }, 500);
        }
    });
});