// Product Array
const products = [
  { id: "prod001", name: "SuperWidget" },
  { id: "prod002", name: "MegaGadget" },
  { id: "prod003", name: "PowerTool" },
  { id: "prod004", name: "SpeedCleaner" }
];

const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
