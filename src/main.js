// Animate the <h1> from the top

gsap.from("h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  });
  
  // Select all .dawn-header images
  const dawnImages = document.querySelectorAll(".dawn-header");
  
  // Loop through each dawn-header image and add event listeners
  dawnImages.forEach(dawn => {
    let spinTween = null;
  
    // Spin on hover
    dawn.addEventListener("mouseenter", () => {
      spinTween = gsap.to(dawn, {
        rotation: "+=360", // Keep spinning
        duration: 2,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%"
      });
    });
  
    // Stop spin on mouse leave
    dawn.addEventListener("mouseleave", () => {
      if (spinTween) spinTween.kill();
      spinTween = null;
      gsap.set(dawn, { rotation: 0 }); // Optionally reset rotation
    });
  });

  gsap.from(".animate-text", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Typing animation for #typewriter
const typingText = "web developer & front-end engineer";
const typingElement = document.getElementById("typewriter");

if (typingElement) {
  typingElement.textContent = ""; // Clear initial text

  const typeTimeline = gsap.timeline();

  typingText.split("").forEach((char, i) => {
    typeTimeline.to(typingElement, {
      duration: 0.05,
      onUpdate: () => {
        typingElement.textContent = typingText.slice(0, i + 1);
      }
    });
  });
}

const carousel = document.querySelector(".carousel-inner");

if (carousel) {
  const totalWidth = carousel.scrollWidth / 2; 

  gsap.to(carousel, {
    x: `-=${totalWidth}`,
    duration: 20,
    ease: "linear",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) 
    }
  });
}
gsap.utils.toArray('#project-carousel .snap-center').forEach(card => {
  gsap.fromTo(card, 
    { opacity: 0.5, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: card,
        start: "left center",
        end: "right center",
        scrub: true,
        containerAnimation: ScrollTrigger.getById("carouselAnim")
      },
      ease: "power2.out"
    }
  );
});


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 80, // default (desktop)
  loop: true,
  mousewheel: false,
  speed: 800,

  breakpoints: {
    768: {
      spaceBetween: 80, // tablets and up
    },
    0: {
      spaceBetween: 21, // mobile
    },
  },
});
const links = document.querySelectorAll('.live-link');

  links.forEach(link => {
    const arrow = link.querySelector('.arrow-icon');

    link.addEventListener('mouseenter', () => {
      gsap.to(arrow, { x: 5, duration: 0.3, ease: "power2.out" });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.inOut" });
    });
  });


  const dawnMobile = document.querySelector(".dawn-mobile");

  if (dawnMobile) {
    gsap.to(dawnMobile, {
      rotation: "+=360",
      duration: 6,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });
  }


  const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

// Open menu
function openMenu() {
  document.body.classList.add('fixed');
  mobileMenu.classList.remove('-translate-x-full');
}

// Close menu
function closeMenu() {
    // Remove the fixed class *before* the scroll happens
    document.body.classList.remove('fixed');
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
  }

// Toggle menu on hamburger click
hamburgerBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('-translate-x-full');
  isOpen ? closeMenu() : openMenu();
});

// Close menu when clicking a link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Optional: Close when clicking outside (if needed)
document.addEventListener('click', (e) => {
  const clickedInsideMenu = mobileMenu.contains(e.target);
  const clickedHamburger = hamburgerBtn.contains(e.target);
  if (!clickedInsideMenu && !clickedHamburger && !mobileMenu.classList.contains('-translate-x-full')) {
    closeMenu();
  }
});


menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default anchor behavior

    const targetId = link.getAttribute('href').slice(1); // remove "#"
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll to center of the viewport
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }

    // Close the menu
    closeMenu();
  });
});
  