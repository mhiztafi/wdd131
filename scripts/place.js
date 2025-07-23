document.addEventListener("DOMContentLoaded", () => {
  // Footer year and modified date
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // Static values
  const temperature = 2; // °C
  const windSpeed = 10; // km/h

  const chillOutput = document.getElementById("chill");

  function calculateWindChill(temp, wind) {
    // Wind chill formula for °C and km/h
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
  }

  // Apply condition check
  if (temperature <= 10 && windSpeed > 4.8) {
    chillOutput.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    chillOutput.textContent = "N/A";
  }
});
