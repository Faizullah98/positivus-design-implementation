
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

