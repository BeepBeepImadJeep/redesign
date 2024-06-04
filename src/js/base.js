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

window.addEventListener('scroll', function() {
  let header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('bg-active');
  } else {
    header.classList.remove('bg-active');
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

const initMenu = () => {
  try {
    const menu = document.querySelector(".menu");
    if (menu === undefined) return;

    const header = document.querySelector(".header");
    const menuTrigger = document.querySelector(".js-menu-trigger");
    const menuClose = document.querySelector(".js-menu-close");

    menuTrigger.onclick = function () {
      this.classList.toggle("active");
      menu.classList.toggle("is-open");
      header.classList.add("js-bg-active");
    };

    menuClose.onclick = function () {
      menuTrigger.classList.remove("active");
      menu.classList.remove("is-open");
      header.classList.remove("js-bg-active");
    };

    const mobWidth = window.matchMedia("(max-width: 767px)");

    if (mobWidth.matches) {
      menuTrigger.onclick = function () {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          menu.classList.remove("is-open");
          header.classList.remove("js-bg-active");
          bodyUnfixPosition();
        } else {
          this.classList.add("active");
          menu.classList.add("is-open");
          bodyFixPosition();
          header.classList.add("js-bg-active");
        }
      }
    }

  } catch (err) {
    console.log("### Error at initMenu ###");
    console.log(err.message);
    console.log("#########################");
  }
};

// const maskInputs = () => {
//   const telInputs = document.querySelectorAll('input[type="tel"]');
//   telInputs.forEach((input) => {
//       Inputmask({ mask: '+7 (999) 999-99-99' }).mask(input);
//   });
// }

const initAnchorLinks = () => {
  try {
    document.querySelectorAll('a[href*="#"]').forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        const baseUrl = href.split('#')[0];
        const anchor = href.includes('#') ? href.substring(href.indexOf('#')) : '';
        if (baseUrl && baseUrl !== window.location.pathname) {
          localStorage.setItem('scrollToAnchor', anchor);
        } else if (anchor) {
          e.preventDefault();
          const target = document.querySelector(anchor);
          if (target) {
            bodyUnfixPosition();
            gsap.to(window, {
              duration: 1,
              scrollTo: {
                y: target,
                offsetY: 70,
              },
              ease: "power2.inOut",
            });
          }
        }
      });
    });
  } catch (error) {
    console.log("Error at window.components.initAnchorLinks:", error.message);
  }
};


const initScripts = () => {
  // initMenu();
  // maskInputs();
  // initAnchorLinks();
};

document.addEventListener("DOMContentLoaded", initScripts);



