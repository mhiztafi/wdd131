console.log("Filtered temples script loaded");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "images/temple3.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl: "images/temple2.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/temple1.jpg"
  }
];

function displayTemples(templesArray) {
  const container = document.getElementById("templeContainer");
  if (!container) {
    console.error("Container #templeContainer not found.");
    return;
  }

  container.innerHTML = "";

  templesArray.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    // ✅ Apply small-img class to these 3 temples
    const smallTemples = ["Rome Italy", "St. George Utah", "Accra Ghana"];
    const isSmall = smallTemples.includes(temple.templeName);

    card.innerHTML = `
      <img 
        loading="lazy" 
        src="${temple.imageUrl}" 
        alt="${temple.templeName}" 
        class="${isSmall ? 'small-img' : ''}"
      >
      <div class="content">
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function getYear(dedicated) {
  return parseInt(dedicated.split(",")[0]);
}

function filterTemples(filter) {
  let filtered = temples;

  switch (filter) {
    case "old":
      filtered = temples.filter(t => getYear(t.dedicated) < 1900);
      break;
    case "new":
      filtered = temples.filter(t => getYear(t.dedicated) > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

document.querySelectorAll("nav button").forEach(button =>
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterTemples(filter);
  })
);

displayTemples(temples);

// Footer updates
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.getElementById("modified");
if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
