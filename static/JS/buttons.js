$('.open-overlay').click(function() {
  var overlay_navigation = $('.overlay-navigation'),
    nav_item_1 = $('nav li:nth-of-type(1)'), /*КПП*/
    nav_item_2 = $('nav li:nth-of-type(2)'), /*10*/
    nav_item_3 = $('nav li:nth-of-type(3)'), /*12*/
    nav_item_4 = $('nav li:nth-of-type(4)'), /*13*/
    nav_item_5 = $('nav li:nth-of-type(5)'), /*14*/
    nav_item_6 = $('nav li:nth-of-type(6)'), /*16*/
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
    nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
    nav_item_6.removeClass('slide-in-nav-item-delay-5-reverse').addClass('slide-in-nav-item-delay-5');
  } else {
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
    nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
    nav_item_6.removeClass('slide-in-nav-item-delay-5').addClass('slide-in-nav-item-delay-5-reverse');
  }
})

// Обработчик для закрытия меню при клике на ссылку внутри меню
$('.overlay-navigation nav li').click(function() {
  var overlay_navigation = $('.overlay-navigation'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
  middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
  bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
  overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
  // Можно также добавить код для сокрытия отдельных элементов меню (если необходимо)
});
