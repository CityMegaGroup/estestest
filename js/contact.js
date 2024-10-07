function sendEmailContact() {
  const templateParams = {
    name: document.getElementById("contact-name").value,
    email: document.getElementById("contact-email").value,
    phone: document.getElementById("contact-phone").value,
    message: document.getElementById("contact-message").value,
  };
  emailjs.init("xukjPYHTqVJeuSXwr");

  emailjs.send("service_g81zhdv", "template_6krl52g", templateParams).then(
    function (response) {
      console.log("Email sent!", response.status, response.text);
    },
    function (error) {
      console.error("Error sending email:", error);
    }
  );
  emailjs.send("service_g81zhdv", "template_cq59nhq", templateParams).then(
    function (response) {
      console.log("Email sent!", response.status, response.text);
    },
    function (error) {
      console.error("Error sending email:", error);
    }
  );
}
// Get the form and the modal
const contactForm = document.getElementById("contact-form");
const contactModal = document.getElementById("myModal2");

// When the form is submitted, show the modal
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally
  contactModal.style.display = "block"; // Show the modal
});

// When the user clicks on the close button, hide the modal
const closeBtn2 = document.getElementsByClassName("close2")[0];
closeBtn2.addEventListener("click", function () {
  contactModal.style.display = "none"; // Hide the modal
  window.location.reload();
});

export { sendEmailContact };
