const next = document.getElementById("next-btn");
const prev = document.getElementById("prev-btn");
const progress = document.getElementById("progress");
const steps = document.querySelectorAll(".cercal");
let index = 1;
next.addEventListener("click", function () {
    index++;
    if (index >= steps.length) {
        index = steps.length;
    }
    chstats();
})
prev.addEventListener("click", function () {
    index--;
    if (index <= 0) {
        index = 1;
    }
    chstats();
})
function chstats() {
    steps.forEach((items, i) => {
        if (i < index) {
            items.classList.add("active");
            items.classList.add("activepro");
            
        }
        else {
            items.classList.remove("active");
            items.classList.remove("activepro");
        }
    }
    )
    
}


