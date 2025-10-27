// --- Auto increment every 5 minutes or on refresh ---
let totalContacts = 973;
let totalAdded = 973;

const contactElement = document.getElementById("totalContacts");
const addedElement = document.getElementById("totalAdded");

// Get last update time from localStorage (to persist between refreshes)
const lastUpdate = localStorage.getItem("lastUpdateTime");
const now = Date.now();

if (!lastUpdate || now - lastUpdate > 5 * 60 * 1000) {
  // Increase by 10 every 5 minutes or on first visit
  totalContacts += 10;
  totalAdded += 10;
  localStorage.setItem("lastUpdateTime", now);
}

contactElement.textContent = totalContacts;
addedElement.textContent = totalAdded;

// --- Generate Link Section ---
const generateBtn = document.getElementById("generateLink");
const generatedSection = document.getElementById("generatedLinkSection");
const copyBtn = document.getElementById("copyLink");
const generatedLink = document.getElementById("generatedLink");
const formSection = document.getElementById("formSection");

generateBtn.addEventListener("click", () => {
  generatedSection.classList.remove("hidden");
  formSection.classList.add("locked");
  formSection.querySelector(".locked-text").textContent =
    "🔒 Uploading your contact and name... Please complete the sharing step.";
});

copyBtn.addEventListener("click", () => {
  generatedLink.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
});
