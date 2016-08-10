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
        var state = $(".mleft-room-item").css("display");
        if(state == "none")
        {
            $("#mleft").animate({
                width: "300"
            }, 500, function() {
            });
            $(".mleft-room-item").hide(0).delay(500).show(0);
        }
        else
        {
            $(".mleft-room-item").hide();
            $("#mleft").animate({
                width: "60"
            }, 500, function() {
            });
        }
    });
});