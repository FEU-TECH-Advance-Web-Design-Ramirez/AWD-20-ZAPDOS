// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Get all buttons with the class 'review-btn'
    const reviewButtons = document.querySelectorAll(".feedback-card");
    
    // Add click event listeners to each button
    reviewButtons.forEach(div => {
        div.addEventListener("click", function () {
            // Show the modal
            document.querySelector(".modal-container").style.display = "block";
        });
    });

    // Close the modal when clicking the close button
    document.querySelector(".close-btn").addEventListener("click", function () {
        document.querySelector(".modal-container").style.display = "none";
    });

    // Close the modal when clicking outside the modal
    window.addEventListener("click", function (event) {
        const modal = document.querySelector(".modal-container");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// 🎯 Logout Function
function logoutUser() {
    // ✅ Clear stored user data
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_role");

    // ✅ Redirect to login page
    window.location.href = "../../login/index.html";
}

// 🎯 Attach Logout Event Listener
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link action
            logoutUser();
        });
    }
});

