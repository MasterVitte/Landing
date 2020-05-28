$(document).ready(function() {

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
    console.log(id);
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
