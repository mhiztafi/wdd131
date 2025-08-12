// main.js

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  // Set current year
  yearSpan.textContent = new Date().getFullYear();

  // Set last modified date
  lastModifiedSpan.textContent = document.lastModified;
});

