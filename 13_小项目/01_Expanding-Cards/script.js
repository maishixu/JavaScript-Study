const panels = document.querySelectorAll(".container .panel")  
for(let panel of panels){
    panel.addEventListener("click",function(){
        const active = document.querySelector(".container .active")
        if(panel.className.includes("active")===false){
            panel.classList.add("active")
            active.classList.remove("active")
        }

    })
}