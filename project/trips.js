// scripts/trips.js

document.addEventListener("DOMContentLoaded", () => {
  
  // === Footer Dates ===
  const yearEl = document.getElementById("year");
  const lastModifiedEl = document.getElementById("lastModified");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  if (lastModifiedEl) {
    lastModifiedEl.textContent = document.lastModified;
  }

  // === Trip Data ===
  const trips = [
    {
      name: "Morning Rapids Blast",
      image: "images/img21.png",
      alt: "Morning rafting adventure",
      description: "Start your day with excitement! A quick morning session with moderate rapids and fresh air."
    },
    {
      name: "Sunset River Drift",
      image: "images/img51.png",
      alt: "Evening calm rafting",
      description: "A relaxing sunset float through scenic rivers. Great for photography and peaceful views."
    }
  ];

  // === Render Trips ===
  const container = document.getElementById("tripContainer");

  if (container) {
    trips.forEach(({ name, image, alt, description }) => {
      const section = document.createElement("section");
      section.classList.add("trip");

      section.innerHTML = `
        <img src="${image}" alt="${alt}" loading="lazy">
        <h3>${name}</h3>
        <p>${description}</p>
      `;

      container.appendChild(section);
    });
  }
});
