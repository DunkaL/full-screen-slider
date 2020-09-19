document.addEventListener("DOMContentLoaded", function () {
    var sliderVertical = $('#slider-vertical').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        vertical: true,
        speed: 700,
        enableTouch: false,
        enableDrag: false,
        controls: false,
        pager: false
    });

    $('#top-arrow').click(function(){
        sliderVertical.goToPrevSlide(); 
    });

    $('#bottom-arrow').click(function(){
        sliderVertical.goToNextSlide(); 
    });

    $('.slider-block').slick({
        item: 1,
        dots: true,
        prevArrow:'<button type="button" class="btn btn-danger slider-block__btn" id="top-arrow"><i class="fas fa-angle-double-left"></i></button>',
        nextArrow:'<button type="button" class="btn btn-danger slider-block__btn right-0" id="top-arrow"><i class="fas fa-angle-double-right"></i></button>'
    });

    
    function Height(){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    Height();
    
    window.addEventListener('resize', () => {
        Height();
    });

    $('#button-sidebar').click(function(){
        $('#sidebar').toggleClass('bottom-0');
    });

    $('#button-header-sidebar').click(function(){
        $('#sidebar').addClass('left-0');
    });

    $('#button-sidebar-close').click(function(){
        $('#sidebar').removeClass('left-0');
    });
    
});
