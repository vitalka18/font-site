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

});