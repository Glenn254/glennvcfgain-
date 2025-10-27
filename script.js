// --- Initial values ---
let totalContacts = 973;
let totalAdded = 973;

const contactElement = document.getElementById("totalContacts");
const addedElement = document.getElementById("totalAdded");

// Load saved values if available
const savedContacts = localStorage.getItem("totalContacts");
const savedAdded = localStorage.getItem("totalAdded");

if (savedContacts && savedAdded) {
  totalContacts = parseInt(savedContacts);
  totalAdded = parseInt(savedAdded);
}

// Display initial values
contactElement.textContent = totalContacts;
addedElement.textContent = totalAdded;

// --- Function to increase numbers every 3 minutes ---
function increaseStats() {
  totalContacts += 10;
  totalAdded += 10;
  contactElement.textContent = totalContacts;
  addedElement.textContent = totalAdded;

  // Save updated values so they persist after reload
  localStorage.setItem("totalContacts", totalContacts);
  localStorage.setItem("totalAdded", totalAdded);
}

// Run automatically every 3 minutes (180,000 ms)
setInterval(increaseStats, 3 * 60 * 1000);

// --- Generate Link behavior ---
const generateBtn = document.getElementById("generateLink");
const generatedSection = document.getElementById("generatedLinkSection");
const copyBtn = document.getElementById("copyLink");
const generatedLink = document.getElementById("generatedLink");
const formSection = document.getElementById("formSection");

generateBtn.addEventListener("click", () => {
  // Show generated link area
  generatedSection.classList.remove("hidden");

  // Immediately lock the form
  formSection.classList.add("locked");
  formSection.querySelector(".locked-text").textContent =
    "🔒 Uploading your contact and name... Please complete the sharing step.";

  // Smooth scroll to WhatsApp link
  generatedSection.scrollIntoView({ behavior: "smooth" });
});

// --- Copy WhatsApp link button ---
copyBtn.addEventListener("click", () => {
  generatedLink.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
});
