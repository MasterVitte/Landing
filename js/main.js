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

    var headerOffset = 0;

    // Фикс якоря с учетом высоты хедера
    if ( $(this).attr("href") === '#about' || $(this).parent().hasClass('footer_link') ) {
      headerOffset = 77;
    }

    $("html, body").animate({
      scrollTop: $( $(this).attr("href") ).offset().top - headerOffset + "px" // .top+margin - ставьте минус, если хотите увеличить отступ
    }, {
      duration: 1000, // тут можно контролировать скорость
      easing: "swing"
    });
    return false;

  });

  // Слайдер секции программы
  $('.app_section_programs_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="programs_slider_prev_arrow prev_arrow"></div>',
    nextArrow: '<div class="programs_slider_next_arrow next_arrow"></div>',
  });

  // Слайдер секции программы курса
  $('.app_section_courses_slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.app_section_courses_slider_nav'
  });

  $('.app_section_courses_slider_nav').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    asNavFor: '.app_section_courses_slider_for',
    focusOnSelect: true
  });

  // Аккордеон
  $('.app_section_license_accordion_item_head').on('click', function() {

    var id = $(this).data('id');

    // Сброс открытых вкладок
    $('.app_section_license_accordion_item_head').each(function() {

      let Eachid = $(this).data('id');

      // Фикс преждевременного закрытия той вкладки, по которой пользователь кликает, чтобы ее закрыть
      if (Eachid !== id) {

        $(this)
          .children('.app_section_license_accordion_item_toggle')
          .children('img')
          .removeClass('accordion_toggle');

        $(this)
          .children('.app_section_license_accordion_item_circle')
          .removeClass('accordion_circle_active');

        $('.app_section_license_accordion_item_content[data-id='+Eachid+']')
          .removeClass('accordion_toggle_content');

      }

    });

    // Активация вкладки
    $(this).children('.app_section_license_accordion_item_toggle')
      .children('img')
      .toggleClass('accordion_toggle');

    $(this)
      .children('.app_section_license_accordion_item_circle')
      .toggleClass('accordion_circle_active');

    $('.app_section_license_accordion_item_content[data-id='+id+']')
      .toggleClass('accordion_toggle_content');

  });

  // Триггер первой вкладки
  $($('.app_section_license_accordion_item')[0]).children().trigger('click');

  // Слайдер секции отзывы
  $('.app_section_feedback_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="feedback_slider_prev_arrow prev_arrow"></div>',
    nextArrow: '<div class="feedback_slider_next_arrow next_arrow"></div>',
  });

  // Скрипты модалки

  function showModal(selectorBtn,selectorModal,selectorClose) {
    const btn = $(selectorBtn), modal =  $(selectorModal), close = $(selectorClose);

    btn.each(function (i, item) {

      $(document).keydown(function(eventObject){
        if( eventObject.which === 27 ){
          modal.hide();
          $('body').removeClass('scroll_hidden');
        }
      });

      $(item).on('click',function (event) {

        if(event.target){
          event.preventDefault();
        }

        modal.css({"display":"flex"});
        $('body').addClass('scroll_hidden');

        modal.on('click', function (event) {

          if(event.target === modal[0]){
            modal.hide();
            $('body').removeClass('scroll_hidden');
          }

        });

        close.on('click',function () {

          modal.hide();
          $('body').removeClass('scroll_hidden');

        });
      })
    })
  }

  showModal('.modal_view', '.app_section_modal_form', '.modal_buy_close');

});
