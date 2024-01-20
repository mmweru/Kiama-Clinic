// Select navigation links and sections
//const navLinks = document.querySelectorAll('.nav-links');
//const sections = document.querySelectorAll('main section');

// Add event listeners to navigation links
// navLinks.forEach(link => {
//   link.addEventListener('click', handleNavClick);
// });

// Handle navigation link clicks
// function handleNavClick(event) {
//   event.preventDefault(); // Prevent default link behavior
//   const targetSection = document.querySelector(event.target.hash);
//   smoothScrollTo(targetSection);
//   updateActiveLink(event.target);
// }

// Smooth scrolling function
function smoothScrollTo(targetElement) {
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 500; // Scroll duration in milliseconds

  const smoothScroll = () => {
    if (distance < 1) {
      window.scrollTo(0, targetPosition);
      return;
    }
    requestAnimationFrame(smoothScroll);
    window.scrollTo(0, startPosition + distance / 10);
    distance -= distance / 10;
  };

  smoothScroll();
}

// Update active link based on scroll position
function updateActiveLinkBasedOnScroll() {
  const activeSection = document.querySelector('main section:target');
  if (activeSection) {
    const activeLink = document.querySelector(`nav a[href="#${activeSection.id}"]`);
    updateActiveLink(activeLink);
  }
}

// Update active link
function updateActiveLink(activeLink) {
  navLinks.forEach(link => link.classList.remove('active'));
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Initial active link highlighting
updateActiveLinkBasedOnScroll();

// Handle active link when window is scrolled
window.addEventListener('scroll', updateActiveLinkBasedOnScroll);

 
