(function ($) {
  "use strict";

  //Change Header Style
  function headerStyle() {
    if ($(".main-header").length) {
      var topBanner = $("#main-slider").innerHeight();
      var windowpos = $(window).scrollTop();
      if (windowpos >= topBanner) {
        $(".main-header").addClass("scrolled");
        $(".go-to-top").fadeIn(300);
      } else {
        $(".main-header").removeClass("scrolled");
        $(".go-to-top").fadeOut(300);
      }
    }
  }

  if ($("#main-slider").length) {
    var topBanner = $("#main-slider").innerHeight();
  }
  if ($(window).scrollTop() >= topBanner) {
    $(".main-header").addClass("scrolled");
  }

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(500).fadeOut(500);
    }
  }

  //Add OnepageNav / Navigation Bar Style One
  function onePageNavOne() {
    if ($(".menu-box .menu").length) {
      $(".menu-box .menu ul").onePageNav();
    }
  }

  //Add OnepageNav / Navigation Bar Style Two
  function onePageNavTwo() {
    if ($("#nav-menu").length) {
      $("#nav-menu .left-nav > ul,#nav-menu .right-nav > ul").onePageNav();
    }
  }

  //Main Slider
  if ($("#main-slider").length) {
    jQuery(".tp-banner")
      .show()
      .revolution({
        dottedOverlay: "yes",
        delay: 10000,
        startwidth: 1170,
        startheight: 600,
        hideThumbs: 200,

        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,

        navigationType: "bullet",
        navigationArrows: "0",
        navigationStyle: "preview4",

        touchenabled: "on",
        onHoverStop: "off",

        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,

        parallax: "mouse",
        parallaxBgFreeze: "on",
        parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

        keyboardNavigation: "off",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,

        shadow: 0,
        fullWidth: "on",
        fullScreen: "on",

        spinner: "spinner4",

        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,

        shuffle: "off",

        autoHeight: "off",
        forceFullWidth: "on",

        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "on",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
        videoJsPath: "../video/",
        fullScreenOffsetContainer: "#main-slider",
      });
  }

  // Navbar Height for side Nav
  function navbarHeight() {
    if ($(".header-style-one").length) {
      var windowHeight = $(window).height();

      if (windowHeight > 600) {
        $(".menu-box").css("height", windowHeight);
      }
      if (windowHeight < 600) {
        $(".header-style-one").css({ position: "absolute" });
      } else {
        $(".header-style-one").css({ position: "fixed" });
      }
    }
  }

  // Check Scrren height for Main Menu
  function navbarHeightTwo() {
    if ($(".header-style-two").length) {
      var windowHeight = $(window).height();

      if (windowHeight < 600) {
        $(".header-style-two").css({ position: "absolute" });
      } else {
        $(".header-style-two").css({ position: "fixed" });
      }
    }
  }

  // Navbar Hide / Show
  if ($(".header-style-one").length) {
    $(".header-style-one .menu-toggle").on("click", function () {
      $(this).fadeToggle(500);
      $(".menu-box").toggleClass("appeared");
    });

    $(".header-style-one .collapse-btn").on("click", function () {
      $(".menu-box").toggleClass("appeared");
      $(".header-style-one .menu-toggle").fadeToggle(1000);
    });

    $(".header-style-one ul li .toggle-icon").on("click", function () {
      $(this).parent("li").children("ul").fadeToggle(500);
    });
  }

  // Datepicker
  if ($(".date-picker").length) {
    $(".date-picker").datepicker();
  }

  //Jquery Prettyphoto Lightbox
  function prettyPhoto() {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
      animation_speed: "normal",
      slideshow: 3000,
      autoplay_slideshow: false,
      fullscreen: true,
      social_tools: false,
    });
  }

  //Testimonial Slider
  if ($(".testimonials").length) {
    $(".testimonials .slider").owlCarousel({
      items: 2,
      loop: true,
      autoplay: true,
      margin: 100,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },

        600: {
          items: 1,
        },

        768: {
          items: 2,
        },

        1024: {
          items: 2,
        },

        1200: {
          items: 2,
        },

        1600: {
          items: 2,
        },
      },
    });
  }

  //Dish Of the week Slider
  if ($(".dish-of-week").length) {
    $(".dish-of-week .slider").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      nav: true,
      margin: 25,
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },

        600: {
          items: 3,
        },

        768: {
          items: 2,
        },

        1024: {
          items: 3,
        },

        1200: {
          items: 3,
        },

        1600: {
          items: 3,
        },
      },
    });
  }
  function generateReservationId() {
    let reservationId = "";

    // Generate the first digit of the ID between 1 and 9
    reservationId += Math.floor(Math.random() * 9) + 1;

    // Generate the remaining 5 digits of the ID between 0 and 9
    for (let i = 0; i < 5; i++) {
      reservationId += Math.floor(Math.random() * 10);
    }

    return reservationId;
  }

  function sendEmail() {
    const templateParams = {
      name: document.getElementById("reserve-name").value,
      email: document.getElementById("reserve-email").value,
      phone: document.getElementById("reserve-phone").value,
      date: document.getElementById("reserve-date").value,
      time: document.getElementById("time-select").value,
      persons: document.getElementById("reserve-persons").value,
      // message: document.getElementById("reserve-message").value,
      reservation_id: generateReservationId(),
    };
    emailjs.init("xukjPYHTqVJeuSXwr");

    emailjs.send("service_hwqyawi", "template_n9e1b1d", templateParams).then(
      function (response) {
        console.log("Email sent!", response.status, response.text);
      },
      function (error) {
        console.error("Error sending email:", error);
      }
    );
    emailjs.send("service_fi8lkvi", "template_sp3lebf", templateParams).then(
      function (response) {
        console.log("Email sent!", response.status, response.text);
      },
      function (error) {
        console.error("Error sending email:", error);
      }
    );
  }

  function makeReservation() {
    const form = document.getElementById("reservation-form");
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    const url = "https://ristoranteestestest.com/api/reservations"; // Replace with your API endpoint

    xhr.open("POST", url);
    //   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Success!
        console.log(xhr.responseText);
        // window.location.reload();
      } else {
        // Error
        console.error("Error making reservation:", xhr.status);
      }
    };
    xhr.send(new URLSearchParams(formData));
    sendEmail();
  }

  function isDateToday(dateInput) {
    const today = new Date();
    const date = new Date(dateInput.value);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  function getRecentHours() {
    const hours = [];
    const now = new Date();
    const currentHour = now.getHours();

    // Check if the time is between 12 am and 3 am
    if (currentHour >= 0 && currentHour < 3) {
      for (let i = 8; i <= 24; i++) {
        hours.push(`${i < 10 ? "0" : ""}${i}:00`);
      }
      for (let i = 1; i <= 2; i++) {
        hours.push(`0${i}:00`);
      }
      return hours;
    } else {
      const startHour = Math.max(currentHour + 3, 8);
      for (let i = startHour; i <= 24; i++) {
        hours.push(`${i < 10 ? "0" : ""}${i}:00`);
      }
      for (let i = 1; i <= 2; i++) {
        hours.push(`0${i}:00`);
      }
      return hours;
    }
  }

  function getHours24() {
    const hours = [];
    for (let i = 8; i <= 24; i++) {
      hours.push(`${i < 10 ? "0" : ""}${i}:00`);
    }
    for (let i = 1; i <= 2; i++) {
      hours.push(`0${i}:00`);
    }
    return hours;
  }

  function updateHours() {
    const dateInput = document.getElementById("reserve-date");
    const hourSelect = document.getElementById("time-select");
    const isToday = isDateToday(dateInput);
    const hours = isToday ? getRecentHours() : getHours24();
    hourSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.text = "Time: ";
    hourSelect.add(defaultOption);
    for (let hour of hours) {
      const option = document.createElement("option");
      option.value = hour;
      option.text = hour;
      hourSelect.add(option);
    }
  }
  document
    .getElementById("reserve-date")
    .addEventListener("input", updateHours);
  updateHours();

  const dateInput = document.querySelector("#reserve-date");

  // Get today's date and format it as yyyy-mm-dd
  const today = new Date().toISOString().split("T")[0];

  // Set the minimum date to today
  dateInput.setAttribute("min", today);

  function displayModal() {
    // Get the form and the modal
    // const myForm = document.getElementById("reservation-form");
    const myModal = document.getElementById("myModal");
    myModal.style.display = "block"; // Show the modal

    // When the form is submitted, show the modal
    // myForm.addEventListener("submit", function (event) {
    //   event.preventDefault(); // Prevent the form from submitting normally
    // });

    // When the user clicks on the close button, hide the modal
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", function () {
      myModal.style.display = "none"; // Hide the modal
      window.location.reload();
    });
  }

  //Reservation Form Validation
  if ($("#reservation-form").length) {
    $("#reservation-form").validate({
      // initialize the plugin
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        date: {
          required: true,
        },
        phone: {
          required: true,
        },
        time: {
          required: true,
        },
        persons: {
          required: true,
        },
      },
      submitHandler: function (form) {
        makeReservation();
        displayModal();
        // alert("Your Reservation Has Been Submitted Successfully");
        return true;
      },
    });
  }

  function sendEmailContact() {
    const templateParams = {
      name: document.getElementById("contact-name").value,
      email: document.getElementById("contact-email").value,
      phone: document.getElementById("contact-phone").value,
      message: document.getElementById("contact-message").value,
    };
    emailjs.init("xukjPYHTqVJeuSXwr");

    emailjs.send("service_hwqyawi", "template_6krl52g", templateParams).then(
      function (response) {
        console.log("Email sent!", response.status, response.text);
      },
      function (error) {
        console.error("Error sending email:", error);
      }
    );
    emailjs.send("service_fi8lkvi", "template_cq59nhq", templateParams).then(
      function (response) {
        console.log("Email sent!", response.status, response.text);
      },
      function (error) {
        console.error("Error sending email:", error);
      }
    );
  }
  function showModal() {
    // Get the form and the modal
    // const contactForm = document.getElementById("contact-form");
    const contactModal = document.getElementById("myModal2");
    contactModal.style.display = "block"; // Show the modal

    // When the form is submitted, show the modal
    // contactForm.addEventListener("submit", function (event) {
    //   event.preventDefault(); // Prevent the form from submitting normally
    //   contactModal.style.display = "block"; // Show the modal
    // });

    // When the user clicks on the close button, hide the modal
    const closeBtn2 = document.getElementsByClassName("close2")[0];
    closeBtn2.addEventListener("click", function () {
      contactModal.style.display = "none"; // Hide the modal
      window.location.reload();
    });
  }

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      // initialize the plugin
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
        },
      },
      submitHandler: function (form) {
        // alert("Your Reservation Has Been Submitted Successfully");
        showModal();
        sendEmailContact();
        return true;
      },
    });
  }

  // Go to Top
  if ($(".go-to-top").length) {
    $(".go-to-top").on("click", function () {
      // animate
      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        1500
      );
    });
  }

  // Elements Animation
  function elementsAnimations() {
    var wow = new WOW({
      mobile: true,
    });
    wow.init();
  }

  /* ==========================================================================
   When document is ready, do
   ========================================================================== */

  $(document).on("ready", function () {
    headerStyle();
    navbarHeight();
    navbarHeightTwo();
    onePageNavOne();
    onePageNavTwo();
    prettyPhoto();
    elementsAnimations();
  });

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
  });

  /* ==========================================================================
When document is Resize, do
========================================================================== */

  $(window).on("resize", function () {
    navbarHeight();
    navbarHeightTwo();
  });
})(window.jQuery);
