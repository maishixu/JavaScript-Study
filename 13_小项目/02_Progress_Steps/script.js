const prev = document.querySelector(".btn .btn01")
const next = document.querySelector(".btn .btn02")
const progresses = document.querySelectorAll(".container .box")
let tag = 0
//点击下一个事件
next.onclick = function () {
    const active = document.querySelector(".container .active")
    if (tag < progresses.length - 1) {
        tag++
        // 线条变化
        progresses[tag].classList.add("active")
        //prev变化
        prev.classList.remove("fail")
        prev.classList.add("success")
        //判断是否为最后一个
        if (tag === progresses.length - 1) {
            next.classList.remove("success")
            next.classList.add("fail")
        }
    }
}
//点击下一个事件
prev.onclick = function () {
    const active = document.querySelector(".container .active")
    if (tag > 0) {
        //线条变化
        progresses[tag].classList.remove("active")
        tag--
        //next变化
        next.classList.remove("fail")
        next.classList.add("success")
        //prev变化
        if (tag === 0) {
            prev.classList.remove("success")
            prev.classList.add("fail")
        }
    }
}
// 按下上一个按键时
prev.addEventListener("mousedown", function () {
    prev.classList.add("shrink")
})
prev.addEventListener("mouseup", function () {
    prev.classList.remove("shrink")
})
prev.addEventListener("mouseleave", function () {
})
document.addEventListener("mouseup", function () {
    prev.classList.remove("shrink")
})
//按下下一个按键时
next.addEventListener("mousedown", function () {
    next.classList.add("shrink")
})
next.addEventListener("mouseup", function () {
    next.classList.remove("shrink")
})
next.addEventListener("mouseleave", function () {
})
document.addEventListener("mouseup", function () {
    next.classList.remove("shrink")
})