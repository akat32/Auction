$(document).ready(function() {
    //popup3 Top animation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.top,.popUp3').fadeIn();
        } else {
            $('.top,.popUp3').fadeOut();
        }
    });
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });


    //아이템 표기
    var test = $.ajax({
        type        : "POST",
        url         : "http://iwin247.info:3474/auth/signup",
        success     : function (data) {
            return data;
        },
        error       : function () {
            console.log("error");
        }
    });
    test.done(function (json) {
        json.item

    });
});