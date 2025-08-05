// Update localStorage counter
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

// Display on page
document.getElementById("reviewCount").textContent = count;
document.getElementById("year").textContent = new Date().getFullYear();


