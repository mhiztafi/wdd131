const yearSpan = document.getElementById('currentyear');
const lastMod = document.getElementById('lastModified');

const today = new Date();
yearSpan.textContent = today.getFullYear();
lastMod.textContent = `Last Modified: ${document.lastModified}`;

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
