// Features section JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Mobile feature card expansion
  const featureExpandButtons = document.querySelectorAll(".feature-expand-btn");

  featureExpandButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const featureCard = this.closest(".feature-card");
      featureCard.classList.toggle("expanded");

      // Update button text
      if (featureCard.classList.contains("expanded")) {
        this.textContent = "Show less";
      } else {
        this.textContent = "Show more";
      }
    });
  });

  // Check if we're on mobile and initialize the expand/collapse functionality
  function checkMobile() {
    const isMobile = window.innerWidth < 768;
    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach((card) => {
      const button = card.querySelector(".feature-expand-btn");
      const description = card.querySelector("p");

      if (!button || !description) return; // Fix: skip if missing

      if (isMobile) {
        button.style.display = "flex";
        description.style.display = "none";

        if (card.classList.contains("expanded")) {
          description.style.display = "block";
        }
      } else {
        button.style.display = "none";
        description.style.display = "block";
        card.classList.remove("expanded");
      }
    });
  }

  // Run on load and resize
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

// // Features section JavaScript
// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile feature card expansion
//     const featureExpandButtons = document.querySelectorAll('.feature-expand-btn');

//     featureExpandButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const featureCard = this.closest('.feature-card');
//             featureCard.classList.toggle('expanded');

//             // Update button text
//             if (featureCard.classList.contains('expanded')) {
//                 this.textContent = 'Show less';
//             } else {
//                 this.textContent = 'Show more';
//             }
//         });
//     });

//     // Check if we're on mobile and initialize the expand/collapse functionality
//     function checkMobile() {
//         const isMobile = window.innerWidth < 768;
//         const featureCards = document.querySelectorAll('.feature-card');

//         featureCards.forEach(card => {
//             const button = card.querySelector('.feature-expand-btn');
//             const description = card.querySelector('p');

//             if (isMobile) {
//                 button.style.display = 'flex';
//                 description.style.display = 'none';

//                 if (card.classList.contains('expanded')) {
//                     description.style.display = 'block';
//                 }
//             } else {
//                 button.style.display = 'none';
//                 description.style.display = 'block';
//                 card.classList.remove('expanded');
//             }
//         });
//     }

//     // Run on load and resize
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
// });
