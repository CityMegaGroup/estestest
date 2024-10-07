// function generateReservationId() {
//   let reservationId = "";

//   // Generate the first digit of the ID between 1 and 9
//   reservationId += Math.floor(Math.random() * 9) + 1;

//   // Generate the remaining 5 digits of the ID between 0 and 9
//   for (let i = 0; i < 5; i++) {
//     reservationId += Math.floor(Math.random() * 10);
//   }

//   return reservationId;
// }

// function sendEmail() {
//   const templateParams = {
//     name: document.getElementById("reserve-name").value,
//     email: document.getElementById("reserve-email").value,
//     phone: document.getElementById("reserve-phone").value,
//     date: document.getElementById("reserve-date").value,
//     time: document.getElementById("time-select").value,
//     persons: document.getElementById("reserve-persons").value,
//     // message: document.getElementById("reserve-message").value,
//     reservation_id: generateReservationId(),
//   };
//   emailjs.init("xukjPYHTqVJeuSXwr");

//   emailjs.send("service_g81zhdv", "template_n9e1b1d", templateParams).then(
//     function (response) {
//       console.log("Email sent!", response.status, response.text);
//     },
//     function (error) {
//       console.error("Error sending email:", error);
//     }
//   );
//   emailjs.send("service_g81zhdv", "template_sp3lebf", templateParams).then(
//     function (response) {
//       console.log("Email sent!", response.status, response.text);
//     },
//     function (error) {
//       console.error("Error sending email:", error);
//     }
//   );
// }

// function makeReservation() {
//   const form = document.getElementById("reservation-form");
//   const formData = new FormData(form);
//   const xhr = new XMLHttpRequest();
//   const url = "https://ristoranteestestest.com/api/reservations"; // Replace with your API endpoint

//   xhr.open("POST", url);
//   //   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       // Success!
//       console.log(xhr.responseText);
//       // window.location.reload();
//     } else {
//       // Error
//       console.error("Error making reservation:", xhr.status);
//     }
//   };
//   xhr.send(new URLSearchParams(formData));
//   sendEmail();
// }

// function isDateToday(dateInput) {
//   const today = new Date();
//   const date = new Date(dateInput.value);
//   return (
//     date.getDate() === today.getDate() &&
//     date.getMonth() === today.getMonth() &&
//     date.getFullYear() === today.getFullYear()
//   );
// }

// function getRecentHours() {
//   const hours = [];
//   const now = new Date();
//   const startHour = Math.max(now.getHours() + 3, 6);
//   for (let i = startHour; i <= 24; i++) {
//     hours.push(`${i < 10 ? "0" : ""}${i}:00`);
//   }
//   for (let i = 1; i <= 2; i++) {
//     hours.push(`0${i}:00`);
//   }
//   return hours;
// }

// function getHours24() {
//   const hours = [];
//   for (let i = 6; i <= 24; i++) {
//     hours.push(`${i < 10 ? "0" : ""}${i}:00`);
//   }
//   for (let i = 1; i <= 2; i++) {
//     hours.push(`0${i}:00`);
//   }
//   return hours;
// }

// function updateHours() {
//   const dateInput = document.getElementById("reserve-date");
//   const hourSelect = document.getElementById("time-select");
//   const isToday = isDateToday(dateInput);
//   const hours = isToday ? getRecentHours() : getHours24();
//   hourSelect.innerHTML = "";
//   for (let hour of hours) {
//     const option = document.createElement("option");
//     option.value = hour;
//     option.text = hour;
//     hourSelect.add(option);
//   }
// }
// document.getElementById("reserve-date").addEventListener("input", updateHours);
// updateHours();

// const dateInput = document.querySelector('input[type="date"]');

// // Get today's date and format it as yyyy-mm-dd
// const today = new Date().toISOString().split("T")[0];

// // Set the minimum date to today
// dateInput.setAttribute("min", today);

// // Get the form and the modal
// const myForm = document.getElementById("reservation-form");
// const myModal = document.getElementById("myModal");

// // When the form is submitted, show the modal
// myForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent the form from submitting normally
//   myModal.style.display = "block"; // Show the modal
// });

// // When the user clicks on the close button, hide the modal
// const closeBtn = document.getElementsByClassName("close")[0];
// closeBtn.addEventListener("click", function () {
//   myModal.style.display = "none"; // Hide the modal
//   window.location.reload();
// });

const reservationForm = document.getElementById("reservation-form");
const contactForm = document.getElementById("contact-form");
const collapseBtn = document.querySelector(".header-style-one .collapse-btn");
const sidebar = document.querySelector(".menu-box");

reservationForm.addEventListener("focusin", function () {
  if (sidebar.classList.contains("appeared")) {
    collapseBtn.click();
  }
});

contactForm.addEventListener("focusin", function () {
  if (sidebar.classList.contains("appeared")) {
    collapseBtn.click();
  }
});
