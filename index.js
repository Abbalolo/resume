const nav = document.querySelector("nav")
const close = document.querySelector(".close")
const menu = document.querySelector(".menu")
const darkMode = document.querySelector(".moon")
const lightMode = document.querySelector(".son")
// const body = document.querySelector("body")


const header = document.querySelector(".header")
const logo = document.querySelector(".logo")


menu.addEventListener("click", () => {
    nav.classList.toggle("open-nav")

})

close.addEventListener("click", () => {
    nav.style.transform= " translateX(-100%)";
})

const dark = document.querySelector(".darklolo-about")
const light = document.querySelector(".lightlolo-about")
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    dark.classList.toggle("dark")
    light.classList.toggle("light")
   
 })

 
lightMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    dark.classList.toggle("dark")
    light.classList.toggle("light")

   
 })

// body.addEventListener("click", (e) => {
//     e.target.nav.classList.remove("open-nav")
// })