// form.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const response = document.getElementById("formResponse");

  // LocalStorage review counter
  let count = Number(localStorage.getItem("formSubmissions")) || 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const date = form.tripDate.value;
    const groupSize = form.groupSize.value;

    if (fullName && email && date && groupSize) {
      count++;
      localStorage.setItem("formSubmissions", count);

      response.textContent = `Thank you, ${fullName}! Your trip request for ${date} has been received. You have submitted this form ${count} times.`;
      form.reset();
    } else {
      response.textContent = "Please fill in all required fields.";
    }
  });
});
