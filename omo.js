// const contain = document.querySelector(".services");

// // Only run on mobile view
// // if (window.innerWidth <= 768) {
// // Duplicate content for smooth infinite scrolling
// contain.innerHTML += contain.innerHTML;

// let scrollSpeed = 1;

// function autoScroll() {
//   contain.scrollLeft += scrollSpeed;

//   if (contain.scrollLeft >= contain.scrollWidth / 2) {
//     contain.scrollLeft = 0;
//   }

//   requestAnimationFrame(autoScroll);
// }

// autoScroll();

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});



document.addEventListener("DOMContentLoaded", () => {
  /**
   * Infinite auto-scroll effect
   */
  function initInfiniteScroll(selector, scrollSpeed = 0.5) {
    const container = document.querySelector(selector);
    if (!container) return; // stop if not found

    // Duplicate content for smooth loop
    container.innerHTML += container.innerHTML;

    let isUserInteracting = false;

    function autoScroll() {
      if (!isUserInteracting) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      requestAnimationFrame(autoScroll);
    }
 // Pause on user interaction
    // container.addEventListener("touchstart", () => (isUserInteracting = true));
    // container.addEventListener("touchend",   () => (isUserInteracting = false));
    // container.addEventListener("mouseenter", () => (isUserInteracting = true));
    // container.addEventListener("mouseleave", () => (isUserInteracting = false));

    autoScroll();
  }

  // Initialize for each section
  initInfiniteScroll(".services", 0.5);      // first section
  initInfiniteScroll(".slides", 0.7);  // second section
});








