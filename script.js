document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const service = card.getAttribute("data-service");
    window.open(`service.html?type=${service}`, "_blank");
  });
});
