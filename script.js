/* all models */
document.addEventListener("DOMContentLoaded", () => {
    initializeModals();
    initializeTheme();
});

/* open and close modal */
function initializeModals() {
    const openButtons = document.querySelectorAll("[data-modal-target]");
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modalTarget;
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = "flex";
            }
        });
    });
    const closeButtons = document.querySelectorAll(".close-modal");
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            if (modal) {
                modal.style.display = "none";
            }
        });
    });
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
}
/*  acesiblity */

function initializeTheme() {
    const savedTheme = localStorage.getItem("garageTheme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
}
function toggleTheme() {
    document.body.classList.toggle("light-mode");
    const isLightMode =
        document.body.classList.contains("light-mode");
    localStorage.setItem(
        "garageTheme",
        isLightMode ? "light" : "dark"
    );
}
/* 
   directory */

function openDirectory() {
    const directoryModal =
        document.getElementById("directoryModal");
    if (directoryModal) {
        directoryModal.style.display = "flex";
    }
}
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}
document.querySelectorAll(".hotspot").forEach(hotspot => {
    hotspot.addEventListener("click", () => {
        const modalId = hotspot.dataset.modalTarget;
        const modal = document.getElementById(modalId);
        if(modal){
            modal.style.display = "flex";
        }
    });
});