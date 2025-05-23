   
    const navItems = document.querySelectorAll('.nav-links li a');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(link => link.classList.remove('active'));
      item.classList.add('active');
    });
  });
    const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });