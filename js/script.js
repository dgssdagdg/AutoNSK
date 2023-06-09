const swiper = new Swiper('.auto-slider', {
    loop: true,
    slidesPerView: 3,
    speed: 800,
    pagination: {
      el: '.auto-pagination',
    },
    spaceBetween: 7,
    navigation: {
      nextEl: '.auto-button-next',
      prevEl: '.auto-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    }
});
const swiperVideoReviews = new Swiper('.reviews-slider', {
  loop: true,
  slidesPerView: 1,
  speed: 800,
  pagination: {
    el: '.reviews-pagination',
  },
  spaceBetween: 7,
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },
});
document.addEventListener('click', function(e) {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  let body =  document.body;
  let top = document.querySelector('.header')
  if(e.target.closest('.menu-btn')) {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('body-overflow');
      top.classList.toggle('header-color-close')
  } else if (menu.closest('.active') && !e.target.closest('.menu') && menuBtn.closest('.active')) {
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('body-overflow');
      top.classList.remove('header-color-close')
  }

  if (e.target.closest('.intro-body-link')) {
    let nav = e.target.closest('.intro-body-links');
    nav.classList.toggle('intro-body-links-active')
  }

})

window.onscroll = function(){
  var html = document.documentElement, body = document.body;
  var BlkStyle = document.querySelector('header');
  if(html.scrollTop>100||body.scrollTop>100) {
      BlkStyle.classList.add('header-color');
  } else BlkStyle.classList.remove('header-color');
   }