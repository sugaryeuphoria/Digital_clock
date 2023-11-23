const clock = document.getElementById("clock");
const dt = document.getElementById("date");
const today = document.getElementById("day");

function digital_clock() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if(hh == 0) {
       hh = 12;
    }
    if(hh > 12) {
        hh = hh - 12;
        session = "PM";
    }
 
    hh = (hh < 10) ? `0${hh}` : hh; 
    mm = (mm < 10) ? `0${mm}` : mm; 
    ss = (ss < 10) ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${ss} ${session}`;
    clock.innerText = time;

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let today_date = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    dt.innerText = ` ${months[month]} ${today_date} ,${year}`;

    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = date.getDay();
    today.innerText = `${week[day]}`;
}

setInterval(digital_clock, 1000);


