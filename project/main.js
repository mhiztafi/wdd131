// main.js

// Display current year and last modified date
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

// main.js
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
