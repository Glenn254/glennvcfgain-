// === AUTO INCREASE TOTAL CONTACTS & TOTAL ADDED ===

// Start at 973 or load last saved value
let totalContacts = Number(localStorage.getItem("totalContacts")) || 973;
let totalAdded = Number(localStorage.getItem("totalAdded")) || 973;

// Function to show updated numbers and save them
function updateStats() {
  document.getElementById("totalContacts").textContent = totalContacts;
  document.getElementById("totalAdded").textContent = totalAdded;
  localStorage.setItem("totalContacts", totalContacts);
  localStorage.setItem("totalAdded", totalAdded);
}

// Run once when the page loads
updateStats();

// Every 10 seconds, add +10 to both
setInterval(() => {
  totalContacts += 10;
  totalAdded += 10;
  updateStats();
}, 10000); // 10,000ms = 10 seconds


// === GENERATE LINK & LOCK FORM ===
document.getElementById("generateLink").addEventListener("click", () => {
  const phone = document.getElementById("phoneNumber").value.trim();
  if (!phone) {
    alert("Please enter your phone number first.");
    return;
  }

  document.getElementById("generatedLinkSection").classList.remove("hidden");

  // Lock the form immediately
  const formSection = document.getElementById("formSection");
  formSection.classList.add("locked");

  alert("Link generated! Complete the task before adding your contact.");
});


// === COPY LINK ===
document.getElementById("copyLink").addEventListener("click", () => {
  const linkInput = document.getElementById("generatedLink");
  navigator.clipboard.writeText(linkInput.value)
    .then(() => alert("Link copied successfully!"))
    .catch(() => alert("Failed to copy link"));
});
