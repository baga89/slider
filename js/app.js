var mySwiper = new Swiper('.swiper-container', {

  on: {
    slideChange: function () {
      var tl = gsap.timeline();
      tl.from(".slider-text h1", {duration: .7, y: 100, opacity: 0, ease: "power1.out"});
      tl.from(".slider-text p", {duration: .7, x: -100, opacity: 0, ease: "power2.out"}, "<");
    },
    init: function () {
      var tl = gsap.timeline();
      tl.from(".slider-text h1", {duration: .7, y: 100, opacity: 0, ease: "power1.out"});
      tl.from(".slider-text p", {duration: .7, x: -100, opacity: 0, ease: "power2.out"}, "<");
    }
  },

  effect: 'fade',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

gsap.from(".animate-banner", 1, {
  y: 10,
  opacity: .8,
  yoyo: true, 
  repeat: -1, 
  ease: "power1.inOut",
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
