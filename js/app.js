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
    btn_login.style.borderBottom ="3px solid #999";
    btn_signup.style.borderBottom="#999 1px solid";
    model_signup.style.display = " none";
    model_login.style.display = " flex";
    
    
})
btn_signup.addEventListener('click', (e) => {
    e.preventDefault();
    btn_login.style.borderBottom="#999 1px solid";
    btn_signup.style.borderBottom="#999 3px solid";
    model_signup.style.display = " flex";
    model_login.style.display = " none";
})

const counter = ()=>{
    const upperDate = new Date('Jan 20, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate-currentDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remain_days = Math.floor(diffDate/days);
    const remain_hours = Math.floor((diffDate%days)/hours);
    const remain_minutes = Math.floor((diffDate%hours)/minutes);
    const remain_seconds = Math.floor((diffDate%minutes)/seconds);

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


