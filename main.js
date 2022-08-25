window.addEventListener("scroll", () => {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
});

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  const navigation = document.querySelector("#navigation");
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  const backToTopButton = document.querySelector("#backToTopButton");
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

var slideRight = {
  distance: "50%",
  origin: "right",
  duration: 700,
  opacity: null,
  mobile: false,
};

var slideLeft = {
  distance: "50%",
  origin: "left",
  duration: 700,
  opacity: null,
  mobile: false,
};

var slideTop = {
  distance: "30px",
  origin: "top",
  duration: 700,
  opacity: null,
};

var scaleUp = {
  scale: 0.5,
  duration: 700,
};

ScrollReveal().reveal(
  `
  #home, 
  #home img 
  #home .stats,
  #services,
  #services header,
  #about, 
  #about header, 
  #about .content`,
  slideTop
);

ScrollReveal().reveal(
  "#home .stat, #about .col-b, footer .col-a, footer .col-b",
  scaleUp
);

ScrollReveal().reveal("#services .card, #contact ", scaleUp);

ScrollReveal().reveal("#services .card:nth-child(even)", slideLeft);
ScrollReveal().reveal("#services .card:nth-child(odd)", slideRight);

ScrollReveal().reveal("#contact .col-a", slideRight);
ScrollReveal().reveal("#contact .col-b", slideLeft);
