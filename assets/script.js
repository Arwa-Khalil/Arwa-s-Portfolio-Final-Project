function offsideMenu() {
    const menu = document.getElementById('offside-menu');
    menu.classList.toggle('active');
  }

// Close offside menu when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
  const offideLinks = document.querySelectorAll('#offside-menu a');
  offideLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('offside-menu');
      menu.classList.remove('active');
    });
  });
});

//   ====================== //

  const scrollBtn = document.getElementById("scrollTopBtn");
  
  window.addEventListener("scroll", () => {
    const firstSectionHeight = document.querySelector("section").offsetHeight;
    if (window.scrollY > firstSectionHeight) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===========================  //

//   let cards = 1;
// let lastScrollY = window.scrollY;

// window.addEventListener("scroll", function () {
//   const section = document.getElementById("target-section");
//   const rect = section.getBoundingClientRect();

//   // Check if section is fully in view
//   if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//     // Detect scroll direction
//     if (window.scrollY > lastScrollY) {
//       // Only go forward on downward scroll
//       if (cards <= 4) {
//         console.log("first")
//         document.getElementById(cards).style.transform = "translateY(0)";
//         document.getElementById(cards).style.transition = "transform 0.5s ease";
//         cards++;
//       }
//     }
//   }

//   lastScrollY = window.scrollY; // update last scroll position
// });


document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".stack-section");
  const cards = Array.from(section.querySelectorAll(".card-1 , .card")); // includes your first special class
  const vh = window.innerHeight;

  window.addEventListener("scroll", () => {
    const rect = section.getBoundingClientRect();
    const scrollY = -rect.top; // scrolled distance inside section
    const step = vh; // each card animates in one viewport height

    cards.forEach((card, i) => {
      const start = step * i;
      const end = step * (i + 1);

      if (i === 0) {
        // First card: only scale
        if (scrollY <= end) {
          const progress = Math.max(0, Math.min(1, scrollY / step)); // clamp 0–1
          const scale = 1 - progress * 0.1; // 1 → 0.9
          card.style.transform = `scale(${scale})`;
        } else {
          card.style.transform = "scale(0.9)";
        }
      } else {
      

      if (scrollY >= start && scrollY <= end) {
        const progress = (scrollY - start) / step; // 0 → 1
        const scale = 1 - progress * 0.1; // 1 → 0.9 as it gets covered
        card.style.transform = `translateY(${(1 - progress) * 100}%) scale(${scale})`; // move into place
      } else if (scrollY > end) {
        card.style.transform = "translateY(0%) scale(0.9)";
      } else {
        card.style.transform = "translateY(125%) scale(0.9)";
      }
    }
    });
  });
});


