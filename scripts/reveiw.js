// Update localStorage counter
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

// Display the counter on the page
document.getElementById("reviewCount").textContent = count;

// Display the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Display the last modified date in the footer (optional but helpful)
document.getElementById("lastModified").textContent = document.lastModified;



