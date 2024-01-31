const hamburguer = document.querySelector("")
const navmenu = document.querySelector("")

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active")
  navmenu.classList.toggle("active")
})