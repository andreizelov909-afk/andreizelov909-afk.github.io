(function () {
  "use strict";

  var engageButton = document.getElementById("engage");
  var engageFeedback = document.getElementById("engage-feedback");
  if (engageButton && engageFeedback) {
    engageButton.addEventListener("click", function () {
      engageFeedback.hidden = false;
    });
  }

  var pickButtons = document.querySelectorAll(".pick");
  var pickFeedback = document.getElementById("pick-feedback");
  if (pickButtons.length && pickFeedback) {
    pickButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        pickFeedback.hidden = false;
        pickFeedback.textContent =
          "Selected: " + (button.getAttribute("data-tier") || "unknown");
      });
    });
  }

  var contactForm = document.getElementById("contact-form");
  var contactFeedback = document.getElementById("contact-feedback");
  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      contactFeedback.hidden = false;
    });
  }
})();
