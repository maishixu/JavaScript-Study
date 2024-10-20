const btn = document.querySelector(".container button")
const input = document.querySelector(".container input")
btn.addEventListener("click",()=>{
    btn.classList.toggle("activeBtn")
    input.classList.toggle("activeInput")
})