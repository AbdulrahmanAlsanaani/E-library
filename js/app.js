var login_click = document.getElementById("login-click");
var close = document.getElementById("close");
var model = document.getElementById("model");
var btn_login = document.getElementById("btn-login");
var btn_signup = document.getElementById("btn-signup");
var model_login = document.getElementById("model-login");
var model_signup = document.getElementById("madel-signup");

login_click.addEventListener('click', (e) => {
    e.preventDefault();
    model.style.display = " flex";
})
close.addEventListener('click', (e) => {
    e.preventDefault();
    model.style.display = " none";
})
btn_login.addEventListener('click', (e) => {
    e.preventDefault();
    btn_login.style.borderBottom = "3px solid #222";
    btn_signup.style.borderBottom = "#999 1px solid";
    model_signup.style.display = " none";
    model_login.style.display = " flex";


})
btn_signup.addEventListener('click', (e) => {
    e.preventDefault();
    btn_login.style.borderBottom = "#999 1px solid";
    btn_signup.style.borderBottom = "#222 3px solid";
    model_signup.style.display = " flex";
    model_login.style.display = " none";
})

const counter = () => {
    const upperDate = new Date('Jan 30, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate - currentDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remain_days = Math.floor(diffDate / days);
    const remain_hours = Math.floor((diffDate % days) / hours);
    const remain_minutes = Math.floor((diffDate % hours) / minutes);
    const remain_seconds = Math.floor((diffDate % minutes) / seconds);

    var d = document.getElementById('days');
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');

    d.innerHTML = remain_days;
    h.innerHTML = remain_hours;
    m.innerHTML = remain_minutes;
    s.innerHTML = remain_seconds;
}

setInterval(counter, 1000);

var prev = document.getElementById("prev");
var next = document.getElementById("next");
var img = document.getElementById("img");
var dots = document.getElementsByClassName("dot");
let count = 1;
var imgsArr = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg"];
prev.addEventListener('click', (e) => {
    e.preventDefault();
    ++count;
    if (count > dots.length) {
        count = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#555555";
    }
    dots[count - 1].style.backgroundColor = "#ffffff";
    img.src = imgsArr[count - 1];
});
next.addEventListener('click', (e) => {
    e.preventDefault();
    --count;
    if (count < 1) {
        count = dots.length;
    }
    for (let i = dots.length - 1; i >= 0; i--) {
        dots[i].style.backgroundColor = "#555555";
    }
    dots[count - 1].style.backgroundColor = "#ffffff";
    img.src = imgsArr[count - 1];

});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', (e) => {
        for (let x = 0; x < dots.length; x++) {
            dots[x].style.backgroundColor = "#555";
        }
        dots[i].style.backgroundColor = "#fff";
        img.src = imgsArr[i];
    })
}

var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");
var row = document.getElementsByClassName("row");
var x = 0;
for (let i = 0; i < prev.length; i++) {
    next[i].addEventListener('click', () => {
        x -= 22;

        if (x < 0) {
            x = 0;
        }
        row[i].style.transform = "translateX(" + x + "%)"
    })
    prev[i].addEventListener('click', () => {
        x += 22;
        if (x > 76) {
            x = 76;
        }

        if (i == 0) {
            if (x > 29.2) {
                x = 29.2;
            }
        }
        row[i].style.transform = "translateX(" + x + "%)"
    })
}
var countar = 0;
var countClick = document.getElementsByClassName("cart-ico");
var ornageCount = document.getElementById("ornage-count");
for (let i = 0; i < countClick.length; i++) {
    countClick[i].addEventListener('click', (e) => {
        e.preventDefault();
        countar++;
        ornageCount.innerHTML = countar;
    })
}

var lang =document.getElementById("lang");
var body = document.getElementsByTagName("body")[0];
lang.addEventListener('click',()=>{
    body.classList.toggle("eng");
})
