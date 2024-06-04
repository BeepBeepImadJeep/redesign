const initMainBannerSlider = () => {
  let mainBanner = new Swiper(".js-main-banner-slider", {
    slidesPerView: "auto",
    autoHeight: true,
    slideClass: "item",
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".pagination-custom",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      horizontalClass: "pagination-horizontal",
      modifierClass: "pagination-",
    },
  });
}

const initMainCategoriesSlider = () => {
  let mainCategories = new Swiper(".js-main-categories-slider", {
    slidesPerView: "auto",
    freeMode: true,
    autoHeight: true,
    slideClass: "item",
    navigation: {
      nextEl: ".navigation-button-next",
      prevEl: ".navigation-button-prev",
      disabledClass: "navigation-button-disabled",
    },
  });
}

const initMainCatalogNewSlider = () => {
  let mainCatalogNew = new Swiper(".js-main-catalog-new", {
    slidesPerView: "auto",
    freeMode: true,
    autoHeight: true,
    slideClass: "item",
    navigation: {
      nextEl: ".navigation-product-button-next-new",
      prevEl: ".navigation-product-button-prev-new",
      disabledClass: "navigation-product-button-disabled",
    },
  });
}

const initMainCatalogStokeSlider = () => {
  let mainCatalogStoke = new Swiper(".js-main-catalog-stoke", {
    slidesPerView: "auto",
    freeMode: true,
    autoHeight: true,
    slideClass: "item",
    navigation: {
      nextEl: ".navigation-product-button-next-stoke",
      prevEl: ".navigation-product-button-prev-stoke",
      disabledClass: "navigation-product-button-disabled",
    },
  });
}

const initMainCatalogPopularSlider = () => {
  let mainCatalogPopular = new Swiper(".js-main-catalog-popular", {
    slidesPerView: "auto",
    freeMode: true,
    autoHeight: true,
    slideClass: "item",
    navigation: {
      nextEl: ".navigation-product-button-next-popular",
      prevEl: ".navigation-product-button-prev-popular",
      disabledClass: "navigation-product-button-disabled",
    },
  });
}

const initMainAboutRightSlider = () => {
  let mainAboutRight = new Swiper(".js-main-about-slider-right", {
    slidesPerView: "auto",
    autoHeight: true,
    slideClass: "item",
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".pagination-custom",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active-red",
      horizontalClass: "pagination-horizontal",
      modifierClass: "pagination-red-",
    },
  });
}

const initMainAboutLeftSlider = () => {
  let mainAboutLeft = new Swiper(".js-main-about-slider-left", {
    slidesPerView: "auto",
    autoHeight: true,
    slideClass: "item",
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".pagination-custom",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active-red",
      horizontalClass: "pagination-horizontal",
      modifierClass: "pagination-",
    },
  });
}

const initMainReviewsSlider = () => {
  let mainReviews = new Swiper(".js-reviews-list", {
    slidesPerView: "auto",
    freeMode: true,
    autoHeight: true,
    slideClass: "item",
    navigation: {
      nextEl: ".navigation-product-button-next-reviews",
      prevEl: ".navigation-product-button-prev-reviews",
      disabledClass: "navigation-product-button-disabled",
    },
  });
}

const initMainArticlesSlider = () => {
  let mainArticles = new Swiper(".js-articles-list", {
    slidesPerView: "auto",
    freeMode: true,
    autoHeight: true,
    slideClass: "item",
    navigation: {
      nextEl: ".navigation-product-button-next-articles",
      prevEl: ".navigation-product-button-prev-articles",
      disabledClass: "navigation-product-button-disabled",
    },
  });
}

// window.addEventListener('scroll', function() {
//   let btnModalText = document.querySelector('.button-circle p');
//   if (window.scrollY > 100) {
//     btnModalText.classList.add('hidden');
//   } else {
//     btnModalText.classList.remove('hidden');
//   }
// });

// function moveButton() {
//   let buttonAdvanced  = document.querySelector('.block-advanced .button');
//   let advancedList    = document.querySelector('.advanced-list');
//   let advancedCaption = document.querySelector('.advanced-caption');
//   let buttonInfo      = document.querySelector('.block-info .button');
//   let infoContent     = document.querySelector('.info-content');
//   let infoList        = document.querySelector('.info-list');

//   if (window.innerWidth < 767) {
//     advancedList.parentNode.insertBefore(buttonAdvanced, advancedList.nextSibling);
//   } else {
//     advancedCaption.insertBefore(buttonAdvanced, advancedCaption.lastChild);
//   }

//   if (window.innerWidth < 991) {
//     infoList.parentNode.insertBefore(buttonInfo, infoList.nextSibling);
//   } else {
//     infoContent.insertBefore(buttonInfo, infoContent.lastChild);
//   }
// }

const initMainScripts = () => {
  initMainBannerSlider();
  initMainCategoriesSlider();
  initMainCatalogNewSlider();
  initMainCatalogStokeSlider();
  initMainCatalogPopularSlider();
  initMainAboutRightSlider();
  initMainAboutLeftSlider();
  initMainReviewsSlider();
  initMainArticlesSlider();
};

// window.addEventListener('load', moveButton);
// window.addEventListener('resize', moveButton);

document.addEventListener('DOMContentLoaded', initMainScripts);