document.addEventListener('click', function(e) {
  let body =  document.body;
  if (e.target.closest('._pop-btn')) {
      let events = e.target.closest('._pop-btn');
      let ID = events.id;
      let data = document.querySelector(`[data-id="#${ID}"]`)
      data.classList.toggle('pop-up-id-actives');
  }
  if (!e.target.closest('.pop-up-content') && e.target.closest('.pop-up-global')) {
      let popGlobalActive = e.target.closest('.pop-up-global');
      if (popGlobalActive.closest('.pop-up-id-actives')) {
          popGlobalActive.classList.remove('pop-up-id-actives');
      }
  }

  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
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
  let nav = document.querySelector('.intro-body-links');
  if (e.target.closest('.intro-body-link')) {
      nav.classList.toggle('intro-body-links-active')
  } else if (!e.target.closest('.intro-body-links') && nav.closest('.intro-body-links-active')) {
      nav.classList.remove('intro-body-links-active')
  }

})

window.onscroll = function(){
  var html = document.documentElement, body = document.body;
  var BlkStyle = document.querySelector('header');
  if(html.scrollTop>100||body.scrollTop>100) {
      BlkStyle.classList.add('header-color');
  } else BlkStyle.classList.remove('header-color');
  var Nav = document.querySelector('.intro-body-navigation')
  if(html.scrollTop>100||body.scrollTop>100) {
      Nav.classList.add('intro-body-nav-flex');
  } else {
      Nav.classList.remove('intro-body-nav-flex');
  }
}