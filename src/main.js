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


// JS
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',         // Allow slides to size themselves
  centeredSlides: true,          // Center active slide
  spaceBetween: 80,              // Space between slides
  loop: true,
  mousewheel: false
});
