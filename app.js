document.querySelector(".addfiles").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#requestForm__file").click();
  return false;
});
const links = document.querySelectorAll(".linkList__listItem a");
const icons = document.querySelectorAll(".socialList__listItem i");
const navbarLogo = document.querySelector(".navbar__logoImg");

window.addEventListener("scroll", function (e) {
  if (window.scrollY > 0) {
    document.querySelector(".navbar").classList.add("light");
    links.forEach((el) => {
      el.style.color = "#000";
    });
    icons.forEach((el) => {
      el.style.color = "#000";
    });
    navbarLogo.src = "./img/logo.svg";
  } else {
    document.querySelector(".navbar").classList.remove("light");
    links.forEach((el) => {
      el.style.color = "#fff";
    });
    icons.forEach((el) => {
      el.style.color = "#fff";
    });
    navbarLogo.src = "./img/logo-light.svg";
  }
});
