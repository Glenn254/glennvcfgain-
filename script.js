// === AUTO INCREASE TOTAL CONTACTS & TOTAL ADDED ===

// Start at 973 or load last saved value
let totalContacts = Number(localStorage.getItem("totalContacts")) || 973;
let totalAdded = Number(localStorage.getItem("totalAdded")) || 973;

// Function to update displayed numbers and save them
function updateStats() {
  document.getElementById("totalContacts").textContent = totalContacts;
  document.getElementById("totalAdded").textContent = totalAdded;
  localStorage.setItem("totalContacts", totalContacts);
  localStorage.setItem("totalAdded", totalAdded);
}

// Run once when the page loads
updateStats();

// Every 60 seconds, add +5 to both
setInterval(() => {
  totalContacts += 5;
  totalAdded += 5;
  updateStats();
}, 60000); // 60,000ms = 1 minute


// === GENERATE LINK & LOCK FORM ===
document.getElementById("generateLink").addEventListener("click", () => {
  const phone = document.getElementById("phoneNumber").value.trim();
  if (!phone) {
    alert("Please enter your phone number first.");
    return;
  }

  // WhatsApp group link
  const groupLink = "https://chat.whatsapp.com/Im2XUCpXXyeIh4LiRjLcII?mode=wwt";
  const linkInput = document.getElementById("generatedLink");
  linkInput.value = groupLink;

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
