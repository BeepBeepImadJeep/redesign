gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

window.addEventListener('load',function(){
  setTimeout(function(){
    document.querySelector('body').classList.remove("loading");
  }, 200);
  const anchor = localStorage.getItem('scrollToAnchor');
  if (anchor) {
    const target = document.querySelector(anchor);
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: target,
        ease: "power2.inOut",
      });
    }
    localStorage.removeItem('scrollToAnchor');
  }
});

function bodyFixPosition() {
  setTimeout( function() {
    if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
      let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      document.body.setAttribute('data-body-scroll-fix', scrollPosition);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '-' + scrollPosition + 'px';
      document.body.style.left = '0';
      document.body.style.width = '100%';
    }
  }, 15 );
}

function bodyUnfixPosition() {
  if ( document.body.hasAttribute('data-body-scroll-fix') ) {
    let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
    document.body.removeAttribute('data-body-scroll-fix');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    window.scroll(0, scrollPosition);
  }
}

const headerSticky = () => {
  let header = document.querySelector('.js-header-sticky');
  if (header) {
    header.classList.toggle('active', window.scrollY > 200);
  }
}


const initLikeActive = () => {
  try {
    let likeElements = document.querySelectorAll(".js-like-active");
    likeElements.forEach((element) => {
      element.addEventListener("click", (event) => {
        element.classList.toggle("active");
      });
    });
  } catch (error) {
    console.log("Error at window.components.initLikeActive:", error.message);
  }
}

// const initMenu = () => {
//   try {
//     const menu = document.querySelector(".menu");
//     if (menu === undefined) return;

//     const header = document.querySelector(".header");
//     const menuTrigger = document.querySelector(".js-menu-trigger");
//     const menuClose = document.querySelector(".js-menu-close");

//     menuTrigger.onclick = function () {
//       this.classList.toggle("active");
//       menu.classList.toggle("is-open");
//       header.classList.add("js-bg-active");
//     };

//     menuClose.onclick = function () {
//       menuTrigger.classList.remove("active");
//       menu.classList.remove("is-open");
//       header.classList.remove("js-bg-active");
//     };

//     const mobWidth = window.matchMedia("(max-width: 767px)");

//     if (mobWidth.matches) {
//       menuTrigger.onclick = function () {
//         if (this.classList.contains("active")) {
//           this.classList.remove("active");
//           menu.classList.remove("is-open");
//           header.classList.remove("js-bg-active");
//           bodyUnfixPosition();
//         } else {
//           this.classList.add("active");
//           menu.classList.add("is-open");
//           bodyFixPosition();
//           header.classList.add("js-bg-active");
//         }
//       }
//     }

//   } catch (err) {
//     console.log("### Error at initMenu ###");
//     console.log(err.message);
//     console.log("#########################");
//   }
// };

// const maskInputs = () => {
//   const telInputs = document.querySelectorAll('input[type="tel"]');
//   telInputs.forEach((input) => {
//       Inputmask({ mask: '+7 (999) 999-99-99' }).mask(input);
//   });
// }

// const initAnchorLinks = () => {
//   try {
//     document.querySelectorAll('a[href*="#"]').forEach((link) => {
//       link.addEventListener("click", function (e) {
//         const href = this.getAttribute("href");
//         const baseUrl = href.split('#')[0];
//         const anchor = href.includes('#') ? href.substring(href.indexOf('#')) : '';
//         if (baseUrl && baseUrl !== window.location.pathname) {
//           localStorage.setItem('scrollToAnchor', anchor);
//         } else if (anchor) {
//           e.preventDefault();
//           const target = document.querySelector(anchor);
//           if (target) {
//             bodyUnfixPosition();
//             gsap.to(window, {
//               duration: 1,
//               scrollTo: {
//                 y: target,
//                 offsetY: 70,
//               },
//               ease: "power2.inOut",
//             });
//           }
//         }
//       });
//     });
//   } catch (error) {
//     console.log("Error at window.components.initAnchorLinks:", error.message);
//   }
// };

const handleButtonUpVisibility = () => {
  try {
    let buttonUp = document.querySelector('.js-btn-up');
    if (buttonUp) {
      if (window.pageYOffset > 150) {
        buttonUp.style.opacity = 1;
      } else {
        buttonUp.style.opacity = 0;
      }
  
      buttonUp.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  } catch (error) {
    console.log("Error at window.components.handleButtonUpVisibility:", error.message);
  }
}

const initSearchClose = () => {
  try {
    const searchInput = document.querySelector('.js-form-search input');
    if (searchInput) {
      const closeButton = document.querySelector('.js-form-search .icon-close');
      searchInput.addEventListener('input', function () {
        if (searchInput.value.length > 0) {
          closeButton.classList.add('active');
        } else {
          closeButton.classList.remove('active');
        }
      });
      closeButton.addEventListener('click', function () {
        searchInput.value = '';
        closeButton.classList.remove('active');
      });
    }
  } catch (error) {
    console.log("Error at window.components.initSearchClose", error.message);
  }
};

const initPromoClose = () => {
  try {
    const promo = document.querySelector('.js-promo');
    const promoClose = document.querySelector('.js-promo-close');

    if (!localStorage.getItem('promoShown')) {
      promoClose.addEventListener('click', function () {
        promo.classList.add('hidden'); 
        localStorage.setItem('promoShown', 'true');
      });
    } else {
      promo.classList.add('hidden');
    }
  } catch (error) {
    console.log("Error at window.components.initPromoClose", error.message);
  }
};

const initScriptsScroll = () => {
  handleButtonUpVisibility();
  headerSticky();
};

const initScripts = () => {
  initLikeActive();
  initSearchClose();
  initPromoClose();
  // initMenu();
  // maskInputs();
  // initAnchorLinks();
}

window.addEventListener('scroll', initScriptsScroll);
document.addEventListener("DOMContentLoaded", initScripts);



