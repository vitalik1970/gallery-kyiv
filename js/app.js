const sliderMain = new Swiper('.slider_main', {
 freeMode: true, 
 centeredSlides: true,
mousewheel: true,
parallax: true,
  breakpoints: {
      0: {
          slidesPerView: 1.5,
          spaceBetween: 10
      },
      350: {
          slidesPerView: 2,
          spaceBetween: 20 
      },
      700:{
        slidesPerView: 3.5,
        spaceBetween: 50  
      }
  }

})

const sliderBg = new Swiper('.slider_bg', {
    
   centereSlides: true,
  
   
   
   slidesPerView: 3.5 
   
   })
   sliderMain.controller.control = sliderBg
    document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')
     })
})
let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') :  desc.classList.remove('hidden');
})