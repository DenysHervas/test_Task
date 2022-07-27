//import * as flsFunctions from './modules/functions.js';
//flsFunctions.isWebp();

(function () {
  const burger = document.querySelector('.burger');
  const headerNav = document.querySelector('.nav-container__colappse');
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    headerNav.classList.toggle('nav_active');
  });
})();

$(function () {
  $('.offers__dropdown ul li').on('click', function () {
    var label = $(this).parent().parent().children('label');
    label.attr('data-value', $(this).attr('data-value'));
    label.html($(this).html());

    $(this).parent().children('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  $('.offers__dropdown').on('click', function () {
    $(this).toggleClass('open');
    $(this).addClass('selectedLabel');
  });
});

$(function () {
  $('.sort__dropdown ul li').on('click', function () {
    var label = $(this).parent().parent().children('label');
    label.attr('data-value', $(this).attr('data-value'));
    label.html($(this).html());

    $(this).parent().children('.selected').removeClass('selected');
    $(this).addClass('selected');
    if ($(this).hasClass('descending')) {
      label.parent().removeClass().addClass('descending sort__dropdown');
    } else {
      label.parent().removeClass().addClass('ascending sort__dropdown ');
    }
  });

  $('.sort__dropdown').on('click', function () {
    $(this).toggleClass('open');
  });
});

$(function () {
  $('.quetions__block').on('click', function () {
    $(this).addClass('quetions__block_selected');
    if ($(this).hasClass('quetions__block__selected')) {
      $(this).removeClass('quetions__block__selected');
    } else {
      $(this).addClass('quetions__block__selected');
    }
  });
});
