import "swiper/css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const swiperHandle = () => {
  const swiper = new Swiper(".mainbanner", {
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiperRec = new Swiper(".tailored", {
    slidesPerView: "auto",
    spaceBetween: 30,
    parallax: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
