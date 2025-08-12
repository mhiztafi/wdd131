// form.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const response = document.getElementById("formResponse");

  let submissionCount = Number(localStorage.getItem("formSubmissions")) || 0;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const tripDate = form.tripDate.value;
    const groupSize = form.groupSize.value;

    if (!fullName || !email || !tripDate || !groupSize) {
      showMessage("⚠ Please fill in all required fields.", "error");
      return;
    }

    submissionCount++;
    localStorage.setItem("formSubmissions", submissionCount);

    showMessage(
      `✅ Thank you, ${fullName}! Your trip request for ${tripDate} has been received. 
       You have submitted this form ${submissionCount} time${submissionCount > 1 ? "s" : ""}.`,
      "success"
    );

    form.reset();
  });

  function showMessage(msg, type) {
    response.textContent = msg;
    response.className = `fade-message ${type} show`;

    setTimeout(() => {
      response.classList.remove("show");
    }, 4000);
  }
});

