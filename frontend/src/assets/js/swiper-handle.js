import "swiper/css";
// import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const swiperHandle = () => {
  // const swiper = new Swiper(".mainbanner", {
  //   autoplay: {
  //     delay: 3000,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  const setRecSlider = () => {
    let wWidth = window.innerWidth,
      cWidth = document.querySelector(".header .container").offsetWidth,
      marg = (wWidth - cWidth) / 2;
    if (wWidth > 767) {
      document.querySelector(".recSlider").style.margin = "0px";
      document.querySelector(".recSlider").style.marginLeft = marg + "px";
    } else {
      document.querySelector(".recSlider").style.margin = "0 16px";
    }
  };
  window.onresize = setRecSlider;
  window.onload = setRecSlider;

  // const swiperRec = new Swiper(".tailored", {
  //   slidesPerView: "auto",
  //   spaceBetween: 30,
  //   parallax: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
};
