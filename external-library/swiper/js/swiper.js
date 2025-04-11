const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
   0: {
    slidesPerView: 3
   }, 
   
   576: {
    slidesPerView: 2
   }, 
   
   980: {
    slidesPerView: 3
   }
  }
});