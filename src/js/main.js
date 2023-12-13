// Show-hide area
function showblock(el1, el2){
  let a = document.querySelector(el1);
  let b = document.querySelector(el2);
  a.addEventListener("click", function(){
    if (b.classList.contains("show")){
      b.classList.remove("show");
      a.innerHTML = "Показать!";
    }
    else {
      b.classList.add("show");
      a.innerHTML = "Скрыть!";
    }
  });
}
showblock(".btn1", ".p1");
showblock(".btn2", ".p2");


function rightMenuShow(){
  let hb = document.querySelector(".header__btn");
  let rsm = document.querySelector(".rightside-menu");
  let rsmc = document.querySelector(".rightside-menu__close");
  hb.addEventListener("click", function(){
    console.log('Показываем...');
    rsm.classList.remove("rightside-menu--close");
    hb.classList.add("header__btn--disable");
    // document.getElementsByClassName("header__btn").style.opacity = "0.2";
  });
  rsmc.addEventListener("click", function(){
    console.log('Спрятали');
    rsm.classList.add("rightside-menu--close");
    hb.classList.remove("header__btn--disable");
    // hb.style.opasity = "1";
  });
}
$(function(){
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true
  });
  // var mixer = mixitup('.gallery__inner');
  // mixitup('.gallery__inner');
})

function mymixitup(){
  var mi = document.querySelector('.gallery__inner');
  var mix = mixitup(mi);
  mix.filter('.living');
}
mymixitup();

// MixItUp

// $('.top__slider').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 2
// });


// $('.top__slider').slick({
//   centerMode: true,
//   centerPadding: '100px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

rightMenuShow();