const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


// Cookie banerio
const cookieContainer = document.querySelector(".cookie-container")
const cookieBtn = document.querySelector(".cookie-btn")

cookieBtn.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookiePranesimas", "paspaustaSutinku")
})

setTimeout( () => {
    if(!localStorage.getItem("cookiePranesimas"))
    cookieContainer.classList.add("active");
}, 2000);
