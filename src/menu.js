$(document).ready(function() { 
    checkWidth();
    
    $(window).resize(checkWidth);
        
    $('.mleft-room').click(function () {
        var state = $(this).find('.mleft-room-container').css('display');
        $('.mleft-room-container').slideUp();
        if(state == 'none')
            $(this).find('.room-container').slideDown(500);
        else 
            $(this).find('.room-container').slideUp(500);
    });
    
    $('#lswitch').click(function() {
        $('.mleft-room-container').slideUp(500);
            
        var state = $('.room-item').css('display');
        if(state == 'none')
            mleftOpen();
        else
            mleftHide();
    });
});

function mainspaceMargin()
{}

function checkWidth()
{
    if ($(window).width() < 1500)
        mleftHide_inst();
    else   
        mleftOpen_inst();
}

function mleftOpen()
{
    $('#lswitch').find('.menu-icon').css('background-image', 'url(img/icon_toleft.png)');
    $('#mleft').animate({
        width: '300px'
    }, 500);
    $('#mleft').find('.room-item').fadeOut(0).delay(300).fadeIn(200);
    $('#mleft').find('h1').fadeOut(0).delay(300).fadeIn(200);
}

function mleftOpen_inst()
{
    $('#lswitch').find('.menu-icon').css('background-image', 'url(img/icon_toleft.png)');
    $('#mleft').css('width', '300px');
    $('#mleft').find('.room-item').fadeIn(0);
    $('#mleft').find('h1').fadeIn(0);    
}

function mleftHide()
{
    $('#lswitch').find('.menu-icon').css('background-image', 'url(img/icon_toright.png)');   
    $('#mleft').find('.room-item').fadeOut(200);
    $('#mleft').find('h1').fadeOut(200);
    $('#mleft').animate({
        width: '60'
    }, 500);
}

function mleftHide_inst()
{
    $('#lswitch').find('.menu-icon').css('background-image', 'url(img/icon_toright.png)');   
    $('#mleft').find('.room-item').fadeOut(0);
    $('#mleft').find('h1').fadeOut(0);
    $('#mleft').css('width', '60');
}