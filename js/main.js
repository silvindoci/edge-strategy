$(".toggle ").click(function() {
    $(this).toggleClass('on');
    $(".toggle-menu ").toggleClass("active");
});

$(document).ready(function() {
    $bHeight = $(".box222").height();
    $sHeight = $('.scrollBar').height();
    $sliderHeight = $sHeight / $bHeight * 15;
    $('.slider-thumb').height($sliderHeight + '%');
    $('.slider-thumb').draggable({
        containment: 'parent',
        axis: 'y',
        drag: function() {
            $pos = $('.slider-thumb').position().top;
            $ScrollPercent = $pos / $sHeight * 100;
            $ScrollPx = $ScrollPercent / 100 * $bHeight;
            $('.scroll-content').scrollTop($ScrollPx);
        }
    })
});