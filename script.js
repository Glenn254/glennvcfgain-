// --- Auto increment every 10 mins ---
let totalContacts = 968;
let totalAdded = 968;
const contactElement = document.getElementById("totalContacts");
const addedElement = document.getElementById("totalAdded");

function updateStats() {
  totalContacts += 5;
  totalAdded += 5;
  contactElement.textContent = totalContacts;
  addedElement.textContent = totalAdded;
}

setInterval(updateStats, 10 * 60 * 1000); // 10 minutes
window.addEventListener("load", () => {
  updateStats();
});

// --- Generate Link Section ---
const generateBtn = document.getElementById("generateLink");
const generatedSection = document.getElementById("generatedLinkSection");
const copyBtn = document.getElementById("copyLink");
const generatedLink = document.getElementById("generatedLink");
const formSection = document.getElementById("formSection");

generateBtn.addEventListener("click", () => {
  generatedSection.classList.remove("hidden");
  formSection.classList.remove("locked");
  formSection.querySelector(".locked-text").textContent = "✅ Now you can fill the form.";
});

copyBtn.addEventListener("click", () => {
  generatedLink.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy", 2000);
});
