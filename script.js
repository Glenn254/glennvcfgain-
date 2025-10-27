// === AUTO INCREASE TOTAL CONTACTS, TOTAL ADDED & TOTAL VIEWS WITH DAILY LIMIT ===

// Load stored values or set defaults
let totalContacts = Number(localStorage.getItem("totalContacts")) || 973;
let totalAdded = Number(localStorage.getItem("totalAdded")) || 973;
let totalViews = Number(localStorage.getItem("totalViews")) || 109;

// Track daily progress
let dailyAdded = Number(localStorage.getItem("dailyAdded")) || 0;
let lastUpdateDate = localStorage.getItem("lastUpdateDate") || new Date().toDateString();
const DAILY_LIMIT = 200; // maximum contacts added per day

// Reset daily progress when a new day starts
const today = new Date().toDateString();
if (today !== lastUpdateDate) {
  dailyAdded = 0;
  lastUpdateDate = today;
  localStorage.setItem("dailyAdded", dailyAdded);
  localStorage.setItem("lastUpdateDate", lastUpdateDate);
}

// Update displayed stats and save them
function updateStats() {
  document.getElementById("totalContacts").textContent = totalContacts;
  document.getElementById("totalAdded").textContent = totalAdded;
  document.getElementById("totalViews").textContent = totalViews;

  localStorage.setItem("totalContacts", totalContacts);
  localStorage.setItem("totalAdded", totalAdded);
  localStorage.setItem("totalViews", totalViews);
}

// Run immediately when the page loads
updateStats();

// === AUTO INCREASE EVERY 60 SECONDS ===
setInterval(() => {
  // Stop if daily limit reached
  if (dailyAdded >= DAILY_LIMIT) return;

  // Add values
  totalContacts += 5;
  totalAdded += 5;
  totalViews += 7;
  dailyAdded += 5;

  // Save and update display
  updateStats();
  localStorage.setItem("dailyAdded", dailyAdded);
  localStorage.setItem("lastUpdateDate", new Date().toDateString());
}, 60000); // 60 seconds



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

  // Lock the form immediately after generating
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
