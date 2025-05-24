
  // Get the current page's filename
  const currentPage = window.location.pathname.split("/").pop() || "home.html";

  // Select all navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    // Check if the current page matches the link
    if (linkPage === currentPage || (linkPage === "" && currentPage === "home.html")) {
      link.classList.add("text-black",  "md:text-blue-700");
      link.setAttribute( "aria-current", "page");
    } else {
      link.classList.remove("text-white", "md:text-blue-700");
      link.removeAttribute("aria-current");
    }
  });



// date now

 const year = new Date().getFullYear();
document.getElementById("footer-text").innerHTML = `&copy; ${year} Ascenda. All rights reserved.`;


// Get the current page's filename
  function updateDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dayofWeek = now.toLocaleString('default', { weekday: 'long' });
    const dayofWeekAbbr = now.toLocaleString('default', { weekday: 'short' });
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // months start from 0
    const year = now.getFullYear();

    const formatted = `${hours} : ${minutes} : ${seconds} , ${dayofWeekAbbr} / ${day} / ${month} / ${year}`;
    document.getElementById('datetimenow').textContent = formatted;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();