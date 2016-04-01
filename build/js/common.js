$(document).ready(function() {

	$(document).on('click', '.btn-open-menu:not(.processing)', function(ev) {
    ev.preventDefault();
    var $menuTrigger = $(this);
    $menuTrigger.addClass('processing').toggleClass('btn-open-menu_state_open');
    $($menuTrigger.data('target')).slideToggle(300, function() {
      $menuTrigger.removeClass('processing')
    });
  });

  $(document).on('click', '.link_read-more:not(.processing)', function(ev) {
    ev.preventDefault();
    var $link = $(this);
    $link.addClass('processing').toggleClass('link_read-more_state_open');
    $($link).prev('.more-info_hidden').slideToggle(300, function() {
      $link.removeClass('processing')
    });
  });

  $(document).on('click', '.color-set__item a', function(ev) {
    ev.preventDefault();
    $(this).parents('ul').find('.link').removeClass('active');
    var id = $(this).addClass('active').attr('href');
    $('.js-color-picker').removeClass('active');
    $(id).addClass('active');
  });

  $('.js-font-size-range').ionRangeSlider();

  $('#bgColorPicker').spectrum({
    flat: true,
    showInput: false,
    allowEmpty: false,
    showInitial: false,
    showButtons: false,
    color: $('#bgColorPickerInput').data('color'),
    change: function(color) {
      var color = color.toRgbString();
      $('#bgColorPickerInput').data('color', color);
      $('#bgColorPickerInput').css('background', color);
    },
    move: function(color) {
      var color = color.toRgbString();
      $('#bgColorPickerInput').data('color', color);
      $('#bgColorPickerInput').css('background', color);
    }
  });

  $('#fontColorPicker').spectrum({
    flat: true,
    showInput: false,
    allowEmpty: false,
    showInitial: false,
    showButtons: false,
    color: $('#fontColorPickerInput').data('color'),
    change: function(color) {
      var color = color.toRgbString();
      $('#fontColorPickerInput').data('color', color);
      $('#fontColorPickerInput').css('background', color);
    },
    move: function(color) {
      var color = color.toRgbString();
      $('#fontColorPickerInput').data('color', color);
      $('#fontColorPickerInput').css('background', color);
    }

  });  

  fontFamilySliderInit();
  responsiveInit();

  $(window).resize(function() {
    var windowWidth = $(window).width();
    if(windowWidth > 990) {
      $('.navbar-body').attr('style', '');
    }

    if(windowWidth > 767) {
      homePageSliderInit();
    }

    if(windowWidth < 768) {
      if( $('.big-preview').hasClass('slick-slider') ) {
        $('.big-preview').slick('unslick');
      }
      
      if(  $('.slider-nav').hasClass('slick-slider') ) {
        $('.slider-nav').slick('unslick');
      }
    }
  });
});

function homePageSliderInit() {
  if( !$('.big-preview').hasClass('slick-slider') ) {
    $('.big-preview').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      asNavFor: '.slider-nav'
    });
  }
  
  if(  !$('.slider-nav').hasClass('slick-slider') ) {
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.big-preview',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        }
      ]
    });
  }
}

function fontFamilySliderInit() {
    $('.font-family-preview').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.font-family-nav',
      autoplay: true,
      autoplaySpeed: 3000,
    });
  
    $('.font-family-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.font-family-preview',
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });
}

function responsiveInit() {
  var windowWidth = $(window).width();
  if(windowWidth > 767) {
    homePageSliderInit();
  }

}