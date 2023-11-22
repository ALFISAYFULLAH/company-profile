function navbar() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
  const nav1 = document.getElementById("nav1");
  const nav2 = document.getElementById("nav2");
  if (menu.classList.contains("hidden")) {
    nav1.classList.remove("hidden");
    nav2.classList.remove("hidden");
  } else {
    nav1.classList.add("hidden");
    nav2.classList.add("hidden");
  }
}
