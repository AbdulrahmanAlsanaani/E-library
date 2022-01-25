const next = document.getElementById("next-btn");
const prev = document.getElementById("prev-btn");
const progress = document.getElementById("progress");
const steps = document.querySelectorAll(".cercal");
const madel_signup = document.getElementsByClassName("madel-signup1");
let index = 1;
next.addEventListener("click", function () {
    ++index;
    prev.classList.remove('prev-btn');
    prev.classList.add('next-btn');
    if (index >= steps.length) {
        index = steps.length;
        next.classList.add('prev-btn');
    }
    for (let i = 0; i < steps.length; i++) {
        madel_signup[i].style.display = "none";
    }
    madel_signup[index - 1].style.display = "flex";
    for (let i = 1; i < index; i++) {
        steps[i].classList.add("active");
        steps[i - 1].classList.add("activepro");
    }

})
prev.addEventListener("click", function () {
    --index;
    next.classList.remove('prev-btn');
    if (index <= 1) {
        prev.classList.add('prev-btn');
        index = 1;
    }
    for (let i = 0; i < steps.length; i++) {
        madel_signup[i].style.display = "none";
    }
    madel_signup[index - 1].style.display = "flex";
    for (let i = steps.length - 1; i >= index; i--) {
        steps[i].classList.remove("active");
        steps[i - 1].classList.remove("activepro");
    }

})
/* function chstats() {
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

} */


