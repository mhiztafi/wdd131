const products = [
  { id: "keyboard", name: "Wireless Keyboard" },
  { id: "mouse", name: "Bluetooth Mouse" },
  { id: "monitor", name: "HD Monitor" },
  { id: "headphones", name: "Noise Cancelling Headphones" },
  { id: "webcam", name: "HD Webcam" }
];

// Populate select options
const select = document.getElementById("product");
products.forEach(p => {
  const opt = document.createElement("option");
  opt.value = p.name;
  opt.textContent = p.name;
  select.appendChild(opt);
});

// Set the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Set the last modified date of the document
document.getElementById("lastModified").textContent = document.lastModified;



