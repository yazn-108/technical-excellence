const navList = document.querySelectorAll("nav ul li");
const header = document.querySelector("header");
const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");
navList.forEach((item) => {
  item.addEventListener("click", () => {
    navList.forEach((el) => {
      el.classList.remove("active");
      nav.classList.remove("open");
      toggleMenu.classList.remove("open");
    });
    item.classList.add("active");

    document.querySelector(`#${item.dataset.target}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});
toggleMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggleMenu.classList.toggle("open");
});
const hideMobileMenu = (e) => {
  if (!nav.contains(e.target) && !toggleMenu.contains(e.target)) {
    nav.classList.remove("open");
    toggleMenu.classList.remove("open");
  }
};
let scrollValue = window.scrollY;
const HeaderTransform = (element) => {
  window.scrollY > scrollValue
    ? element.classList.add("scroll")
    : element.classList.remove("scroll");
  scrollValue = window.scrollY;
};
document.addEventListener("click", (e) => hideMobileMenu(e));
document.addEventListener("scroll", (e) => {
  hideMobileMenu(e);
  HeaderTransform(header);
});
