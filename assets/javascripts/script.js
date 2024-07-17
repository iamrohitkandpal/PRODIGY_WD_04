'use strict';

/* ==== Preloader ====*/
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }



/* ==== Navbar Class Toggler - Mobile ====*/
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
});