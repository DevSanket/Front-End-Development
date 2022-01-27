const toggle = document.querySelector('#header .toggle-button');

let collapse = document.querySelectorAll('#header .collapse');
const swiper = document.querySelector('.swiper').swiper;

toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"))
});

// with masonry

let grid=  document.querySelector('.grid');
let msnry = new Masonry(grid,{
    itemSelector : '.grid-item',
    gutter: 20
});

//swiper library
new Swiper('.swiper',{
    direction:'horizontal',
    loop:true,
    slidesPerView: 5,
    spaceBetween:10,
    autoplay:{
       delay:3000 
    },
    //responsive
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 10
        }
      }
});