// makes modals work listens for clicks on hotspots and close buttons. 
document.addEventListener("DOMContentLoaded", () => {
initializeModals();
initializeTheme();
});
//modals 
function initializeModals() {
const hotspots = document.querySelectorAll("[data-modal-target]");
hotspots.forEach(hotspot => {
hotspot.addEventListener("click", () => {
const modalId = hotspot.dataset.modalTarget;
const modal = document.getElementById(modalId);
if (modal) {
modal.classList.add("active");
}
});
});
//close modals when clicking outside of them
const closeButtons = document.querySelectorAll(".close-modal");
closeButtons.forEach(button => {
button.addEventListener("click", () => {
const modal = button.closest(".modal");
if (modal) {
modal.classList.remove("active");
}
});
});
const modals = document.querySelectorAll(".modal");
modals.forEach(modal => {
modal.addEventListener("click", (event) => {
if (event.target === modal) {
modal.classList.remove("active");
}
});
});
}

// modal functions for opening and closing modals programmatically
function openModal(modalId) {
const modal = document.getElementById(modalId);
if (modal) {
modal.classList.add("active");
}
}
function closeModal(modalId) {
const modal = document.getElementById(modalId);
if (modal) {
modal.classList.remove("active");
}
}

// light and dark modes
function initializeTheme() {
const savedTheme =
localStorage.getItem("garageTheme");
if (savedTheme === "light") {
document.body.classList.add("light-mode");
    }
}
function setLightMode() {
document.body.classList.add("light-mode");
localStorage.setItem(
"garageTheme",
"light"
);
}
function setDarkMode() {

    document.body.classList.remove("light-mode");

    localStorage.setItem(
        "garageTheme",
        "dark"
    );
}
// transition betwen garage pages with fade out and in effects. 
document.addEventListener("DOMContentLoaded", () => {
const links = document.querySelectorAll("a");
links.forEach(link => {
const href = link.getAttribute("href");
if (
href &&
!href.startsWith("#") &&
!href.startsWith("http")
) {
link.addEventListener("click", (event) => {
event.preventDefault();
document.body.style.opacity = "0";
setTimeout(() => {
window.location.href = href;
}, 250);
});
}
});
});

// fade in effect when page loads
window.addEventListener("load", () => {
document.body.style.opacity = "1";
});

// links to external websites open in a new tab
function openExternal(url) {
window.open(url, "_blank");
}