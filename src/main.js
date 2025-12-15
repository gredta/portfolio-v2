// Animate the <h1> from the top

gsap.from("h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  });
  


gsap.from("h3", {
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
    duration: 30,
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
  mousewheel: true,
  forceToAxis: true,
  speed: 800,


  mousewheel: {
    enabled: true,
    forceToAxis: true,    // 👈 KEY OPTION
    sensitivity: 1,
    releaseOnEdges: true // lets page scroll at start/end
  },

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
  

// Select ALL internal anchor links pointing to #ids
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    // Only apply if target element exists
    if (targetElement) {
      e.preventDefault();

      // Scroll to center of viewport
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      // Optional: close mobile menu if it's open
      if (window.innerWidth < 768) {
        closeMenu();
        document.body.classList.remove('fixed');
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const gridWrapper = document.querySelector(".grid");
    if (!gridWrapper) {
      console.error("No .grid element found!");
      return;
    }
  
    // Get grid's top relative to document
    const gridTop = gridWrapper.getBoundingClientRect().top + window.scrollY;
  
    // Select experience timeline-items (right column)
    const experienceItems = gridWrapper.querySelectorAll(
      "div.text-left .timeline-item"
    );
  
    console.log(`Found ${experienceItems.length} experience items`);
  
    experienceItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top + window.scrollY;
      const relativeTop = itemTop - gridTop;
  
      const starWrapper = document.createElement("div");
      starWrapper.className =
        "absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block";
      starWrapper.style.top = `${relativeTop}px`;
      
      const star = document.createElement("img");
      star.src = "./svgs/Dawn.svg";
      star.className = "w-6 h-6 spin-on-hover";
      
      starWrapper.appendChild(star);
      gridWrapper.appendChild(starWrapper);
      
    });
  });
  
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    const fromDirection = item.closest(".text-right") ? { x: 100 } : { x: -100 };

    gsap.from(item, {
      opacity: 0,
      ...fromDirection,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  gsap.from("#experience h2", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#experience h2",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".swiper-slide").forEach(slide => {
  // Animate the whole slide
  gsap.from(slide, {
    scrollTrigger: {
      trigger: slide,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  // Animate child elements
  const elements = slide.querySelectorAll("h2, p, .live-link, .bg-orange, .bg-purple, .bg-lightpurple, .bg-yellow");
  gsap.from(elements, {
    scrollTrigger: {
      trigger: slide,
      start: "top 85%",
    },
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
  });
});

gsap.registerPlugin(ScrollTrigger);


gsap.to(".footer-bg-swipe", {
  x: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer-wrapper",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");

    // ignore empty or invalid hashes
    if (targetId === "#" || !document.querySelector(targetId)) return;

    e.preventDefault();

    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
