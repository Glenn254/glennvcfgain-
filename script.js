// === AUTO INCREASE TOTAL CONTACTS & TOTAL ADDED (SAVED IN LOCAL STORAGE) ===

// Load saved values or start from 973
let totalContacts = parseInt(localStorage.getItem("totalContacts")) || 973;
let totalAdded = parseInt(localStorage.getItem("totalAdded")) || 973;

function updateStats() {
  document.getElementById("totalContacts").textContent = totalContacts;
  document.getElementById("totalAdded").textContent = totalAdded;
  localStorage.setItem("totalContacts", totalContacts);
  localStorage.setItem("totalAdded", totalAdded);
}

// Increase both by 10 every 3 minutes (180000ms)
setInterval(() => {
  totalContacts += 10;
  totalAdded += 10;
  updateStats();
}, 180000);

// Run immediately on load
updateStats();


// === GENERATE LINK & LOCK FORM ===
document.getElementById("generateLink").addEventListener("click", () => {
  const phone = document.getElementById("phoneNumber").value.trim();

  if (!phone) {
    alert("Please enter your phone number first.");
    return;
  }

  // Show link section
  document.getElementById("generatedLinkSection").classList.remove("hidden");

  // Lock the form section immediately
  const formSection = document.getElementById("formSection");
  formSection.classList.add("locked");

  // Optional visual confirmation
  alert("Link generated! Complete the task before adding your contact.");
});


// === COPY LINK ===
document.getElementById("copyLink").addEventListener("click", () => {
  const linkInput = document.getElementById("generatedLink");
  linkInput.select();
  document.execCommand("copy");
  alert("Link copied successfully!");
});
