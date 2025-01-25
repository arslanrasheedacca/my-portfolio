// JavaScript for handling the recommendation section

document.getElementById("recommendation-form").onsubmit = function (event) {
    event.preventDefault(); // Prevent page reload

    const nameInput = document.getElementById("recommenation-input").value.trim();
    const messageInput = document.querySelector("#recommendation-form textarea").value.trim();

    if (messageInput) {
        // Add new recommendation to the list
        const recommendationSection = document.querySelector(".recommendation-section");
        const newRecommendation = document.createElement("div");
        newRecommendation.className = "recommendation-box";

        // Format recommendation text
        const recommendationText = nameInput
            ? `${messageInput} - ${nameInput}`
            : messageInput;

        newRecommendation.textContent = recommendationText;
        recommendationSection.appendChild(newRecommendation);

        // Show confirmation popup
        showConfirmationPopup();

        // Clear inputs
        document.getElementById("recommenation-input").value = "";
        document.querySelector("#recommendation-form textarea").value = "";
    } else {
        alert("Please enter a message before submitting.");
    }
};

function showConfirmationPopup() {
    // Create popup container
    const popup = document.createElement("div");
    popup.id = "popup-message";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#f3e5f5"; // Light purple
    popup.style.color = "#000";
    popup.style.padding = "20px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";
    popup.style.width = "300px";

    // Add tick icon
    const tickIcon = document.createElement("div");
    tickIcon.style.width = "50px";
    tickIcon.style.height = "50px";
    tickIcon.style.margin = "0 auto 15px auto";
    tickIcon.style.border = "3px solid purple"; // Green border
    tickIcon.style.borderRadius = "50%";
    tickIcon.style.display = "flex";
    tickIcon.style.alignItems = "center";
    tickIcon.style.justifyContent = "center";

    const tickSymbol = document.createElement("span");
    tickSymbol.textContent = "✓";
    tickSymbol.style.fontSize = "24px";
    tickSymbol.style.color = "##f3e5f5"; // loight purple

    tickIcon.appendChild(tickSymbol);
    popup.appendChild(tickIcon);

    // Add message text
    const message = document.createElement("p");
    message.textContent = "Thanks for leaving a recommendation!";
    message.style.marginBottom = "15px";
    message.style.fontweight= "bold";
    popup.appendChild(message);

    // Add OK button
    const okButton = document.createElement("button");
    okButton.textContent = "Ok";
    okButton.style.padding = "10px 20px";
    okButton.style.backgroundColor = "#9c27b0";
    okButton.style.color = "#fff";
    okButton.style.border = "none";
    okButton.style.borderRadius = "5px";
    okButton.style.cursor = "pointer";
    okButton.onclick = function () {
    document.body.removeChild(popup);
    };
    popup.appendChild(okButton);

    // Add popup to the body
    document.body.appendChild(popup);
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}