$('.responsive-slider').slick({
  dots: false,
  arrow: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$('.prev-btn').click(function () {
  $('.responsive-slider').slick('slickPrev');
});

$('.next-btn').click(function () {
  $('.responsive-slider').slick('slickNext');
});
$('.prev-btn').addClass('slick-disabled');
$('.responsive-slider').on('afterChange', function () {
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.prev-btn').addClass('slick-disabled');
  } else {
    $('.prev-btn').removeClass('slick-disabled');
  }
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.next-btn').addClass('slick-disabled');
  } else {
    $('.next-btn').removeClass('slick-disabled');
  }
});
