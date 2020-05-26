$(document).ready(function() {

  // Слайдер секции программы
  $('.app_section_programs_content_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="programs_slider_prev_arrow"></div>',
    nextArrow: '<div class="programs_slider_next_arrow"></div>',
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

});
