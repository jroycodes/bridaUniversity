"use strict";

// Opens sidebar when clicked
function openNav() {
  document.getElementById("mySidebar").style.width = "15.625rem";
  document.getElementById("main").style.marginRight = "15.625rem";
  document.getElementById("button").classList.add("hide");

  //close sidebar when clicking outside
  document.addEventListener("click", closeSidebarOutside);
}

// Closes sidebar when clicked
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("button").classList.remove("hide");

  // Close sidebar when clicking outside
  document.removeEventListener("click", closeSidebarOutside);
}

// Close sidebar when clicking outside
    function closeSidebarOutside(event) {
      const sidebar = document.getElementById("mySidebar");
      const button = document.getElementById("button");

      if (!sidebar.contains(event.target) && event.target !== button) {
        closeNav();
      }
    }
// Toggles hidden div
// function toggleDiv() {
//   let div = document.getElementById("hide");
//   div.style.display = div.style.display === "none" ? "block" : "none";
// }
