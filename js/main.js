$(function() {
    $(window).scroll(function () { 
        $('.fadein').each(function() {
            var elementPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > elementPos - windowHeight  + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
});