$(document).ready(function() {

  // Фиксация хедера
  var header = $(".app_section_navigation");
  var scrollPrev = 0;

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop(); // Высота скролла в px
    var firstScrollUp = false; // Параметр начала сколла вверх
    var firstScrollDown = false; // Параметр начала сколла вниз

    // Если скроллим
    if ( scrolled > 0 ) {
      // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
      if ( scrolled > scrollPrev ) {
        firstScrollUp = false; // Обнуляем параметр начала скролла вверх
        // Если меню видно
        if ( scrolled < header.height() + header.offset().top ) {
          // Если только начали скроллить вниз
          if ( firstScrollDown === false ) {
            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
            header.css({
              "top": topPosition + "px"
            });
            firstScrollDown = true;
          }
          // Позиционируем меню абсолютно
          header.css({
            "position": "absolute"
          });
          // Если меню НЕ видно
        } else {
          // Позиционируем меню фиксированно вне экрана
          header.css({
            "position": "fixed",
            "top": "-" + header.height() + "px"
          });
        }

        // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
      } else {
        firstScrollDown = false; // Обнуляем параметр начала скролла вниз
        // Если меню не видно
        if ( scrolled > header.offset().top ) {
          // Если только начали скроллить вверх
          if ( firstScrollUp === false ) {
            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
            header.css({
              "top": topPosition + "px"
            });
            firstScrollUp = true;
          }
          // Позиционируем меню абсолютно
          header.css({
            "position": "absolute"
          });
        } else {
          // Убираем все стили
          header.removeAttr("style");
        }
      }
      // Присваеваем текущее значение скролла предыдущему
      scrollPrev = scrolled;
    }

  });

  // Плавная прокрутка до секции
  $('.link').click(function() { // тут пишите условия, для всех ссылок или для конкретных

    var firstLink = false;

    if ( $(this).attr("href") === '#about' ) {
      firstLink = true;
    }

    $("html, body").animate({
      scrollTop: firstLink ? 0 : $( $(this).attr("href") ).offset().top + "px" // .top+margin - ставьте минус, если хотите увеличить отступ
    }, {
      duration: 1000, // тут можно контролировать скорость
      easing: "swing"
    });
    return false;

  });

  // Слайдер секции программы
  $('.app_section_programs_content_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="programs_slider_prev_arrow prev_arrow"></div>',
    nextArrow: '<div class="programs_slider_next_arrow next_arrow"></div>',
  });

  // Слайдер секции программы курса
  $('.app_section_course_content_slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.app_section_course_content_slider_nav'
  });

  $('.app_section_course_content_slider_nav').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    asNavFor: '.app_section_course_content_slider_for',
    focusOnSelect: true
  });

  // Аккордион
  $('.app_section_license_content_rows_row_1_accordion_item_head').on('click', function() {
    let id = $(this).data('id');
    $(this).children('.app_section_license_content_rows_row_1_accordion_item_head_toggle').children('img').toggleClass('accordion_toggle');
    $('.app_section_license_content_rows_row_1_accordion_item_content[data-id='+id+']').toggleClass('accordion_toggle_content');
  });

  $($('.app_section_license_content_rows_row_1_accordion_item_head_toggle')[0]).children().trigger('click');

  // Слайдер секции отзывы
  $('.app_section_feedback_content_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="feedback_slider_prev_arrow prev_arrow"></div>',
    nextArrow: '<div class="feedback_slider_next_arrow next_arrow"></div>',
  });

});
