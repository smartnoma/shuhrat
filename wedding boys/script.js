// Generate background animations
function createStars() {
  const container = document.querySelector(".floating-stars");
  const starCount = 15;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 15}s`;
    star.style.fontSize = `${Math.random() * 20 + 10}px`;
    star.style.opacity = `${Math.random() * 0.3 + 0.2}`;
    star.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="${getRandomColor()}">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      `;
    container.appendChild(star);
  }
}

function createGeometric() {
  const container = document.querySelector(".floating-geometric");
  const geometricCount = 10;

  for (let i = 0; i < geometricCount; i++) {
    const geo = document.createElement("div");
    geo.classList.add("geometric");
    geo.style.top = `${Math.random() * 80 + 10}%`;
    geo.style.animationDelay = `${Math.random() * 20}s`;
    geo.style.opacity = `${Math.random() * 0.2 + 0.1}`;

    const shapes = [
      `<svg width="30" height="30" viewBox="0 0 100 100" fill="${getRandomColor()}">
          <rect x="20" y="20" width="60" height="60" fill-opacity="0.6" />
        </svg>`,
      `<svg width="30" height="30" viewBox="0 0 100 100" fill="${getRandomColor()}">
          <circle cx="50" cy="50" r="30" fill-opacity="0.6" />
        </svg>`,
      `<svg width="30" height="30" viewBox="0 0 100 100" fill="${getRandomColor()}">
          <polygon points="50,10 90,90 10,90" fill-opacity="0.6" />
        </svg>`,
    ];

    geo.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
    container.appendChild(geo);
  }
}

function getRandomColor() {
  const colors = ["#2a6f97", "#61a5c2", "#89c2d9", "#a9d6e5", "#014f86"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Initialize background animations
createStars();
createGeometric();

// Scroll animation
function checkVisibility() {
  const elements = document.querySelectorAll(
    ".invitation-container, h1, h2, p, .date-time, .location, .divider, .rsvp, .signature, .button-container"
  );
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

// Modal logic
const locationBtn = document.getElementById("location-btn");
const paymentBtn = document.getElementById("payment-btn");

const locationModal = document.getElementById("location-modal");
const paymentModal = document.getElementById("payment-modal");

const closeLocation = document.getElementById("close-location");
const closePayment = document.getElementById("close-payment");

// Open modals
locationBtn.addEventListener("click", () => {
  locationModal.style.display = "flex";
  setTimeout(() => {
    locationModal.classList.add("active");
  }, 10);
});

paymentBtn.addEventListener("click", () => {
  paymentModal.style.display = "flex";
  setTimeout(() => {
    paymentModal.classList.add("active");
  }, 10);
});

// Close modals
closeLocation.addEventListener("click", () => {
  locationModal.style.display = "none";
  locationModal.classList.remove("active");
});

closePayment.addEventListener("click", () => {
  paymentModal.style.display = "none";
  paymentModal.classList.remove("active");
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === locationModal) {
    locationModal.style.display = "none";
    locationModal.classList.remove("active");
  }
  if (e.target === paymentModal) {
    paymentModal.style.display = "none";
    paymentModal.classList.remove("active");
  }
});

// Copy karta raqami funksiyasi
function copyCardNumber() {
  const cardNumber = document.getElementById("cardNumber").textContent;
  navigator.clipboard.writeText(cardNumber).then(() => {
    alert("Karta raqami nusxalandi!");
  });
}
