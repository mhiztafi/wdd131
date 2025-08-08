// trips.js

document.addEventListener("DOMContentLoaded", () => {
  const trips = [
    {
      name: "Rapid Rush",
      difficulty: "Intermediate",
      price: "$120",
      description: "A thrilling ride through class III rapids, perfect for adventure seekers!",
      image: "images/rapid-rush.webp"
    },
    {
      name: "Calm Waters",
      difficulty: "Beginner",
      price: "$80",
      description: "A scenic float down the river for first-timers and families.",
      image: "images/calm-waters.webp"
    },
    {
      name: "Thunder Run",
      difficulty: "Advanced",
      price: "$150",
      description: "Challenge yourself with steep drops and big waves on this adrenaline-fueled ride.",
      image: "images/thunder-run.webp"
    }
  ];

  const container = document.getElementById("tripContainer");

  trips.forEach(trip => {
    const card = document.createElement("div");
    card.classList.add("trip-card");
    card.innerHTML = `
      <img src="${trip.image}" alt="${trip.name}" loading="lazy">
      <h3>${trip.name}</h3>
      <p><strong>Difficulty:</strong> ${trip.difficulty}</p>
      <p><strong>Price:</strong> ${trip.price}</p>
      <p>${trip.description}</p>
    `;
    container.appendChild(card);
  });
});
