
// Faqs
const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const toggleBtn = item.querySelector(".faq-toggle");

    toggleBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all
      faqItems.forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".faq-toggle").textContent = "+";
      });

      // Open clicked one if it wasn’t already open
      if (!isActive) {
        item.classList.add("active");
        toggleBtn.textContent = "−";
      }
    });
  });

  // Testimonials 

    const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let isClickScrolling = false;

  function activateLink(id) {
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  // Scroll-based activation (with click scroll suppression)
  window.addEventListener("scroll", () => {
    if (isClickScrolling) return; // ignore scroll while click-scroll is happening

    let currentSection = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 110; // slightly more than header
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    if (currentSection) activateLink(currentSection);
  });

  // Click-based activation
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").substring(1);
      activateLink(targetId);

      isClickScrolling = true;
      setTimeout(() => {
        isClickScrolling = false;
      }, 700); // adjust to match scroll duration (ms)
    });
  });