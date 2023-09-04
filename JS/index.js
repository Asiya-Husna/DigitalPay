$('.slick-slider').slick({
    slidesToShow: 3,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  AOS.init();

  function scrollValue() {
    var navbar = document.getElementById('mynav');
    var scroll = window.scrollY;
    if (scroll < 400) {
        navbar.classList.remove('bg-color');
    } else {
        navbar.classList.add('bg-color');
    }
  }
  
  window.addEventListener('scroll', scrollValue);
  