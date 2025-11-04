const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


const contain = document.querySelector(".services");

// Only run on mobile view
// if (window.innerWidth <= 768) {
// Duplicate content for smooth infinite scrolling
contain.innerHTML += contain.innerHTML;

let scrollSpeed = 1;

function autoScroll() {
  contain.scrollLeft += scrollSpeed;

  if (contain.scrollLeft >= contain.scrollWidth / 2) {
    contain.scrollLeft = 0;
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();