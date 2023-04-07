let hrsEl = document.getElementById("hrs");
let minEl = document.getElementById("min");
let secEl = document.getElementById("sec");
let ampmEl = document.getElementById("ampm");
let tilesEl = document.getElementById("tiles");
let hoursEl = document.querySelector(".Hours");
let minutesEl = document.querySelector(".Minutes");
let secondsEl = document.querySelector(".Seconds");
let dateEl = document.querySelector(".date");
let AmPmEl = document.querySelector(".AmPm");
let bodyEl = document.querySelector("body");



function timeNow() {

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  let dmy = new Date().toLocaleDateString("en-US",options);

  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  };

  if (h < 10) {
    h = "0" + h;
  };

  if (m < 10) {
    m = "0" + m;
  };

  if (h >= 6 && ampm === "PM") {
    bodyEl.style.backgroundImage =
      "url('images/aurora.jpg')";
    
  } else {
    bodyEl.style.backgroundImage =
      "url('images/sunrise.png')";
  };

  hrsEl.innerHTML = h;
  minEl.innerHTML = m;
  secEl.innerHTML = s;
  ampmEl.innerHTML = ampm;
  dateEl.innerHTML = dmy;

  setTimeout(() => {
    timeNow();
  }, 1000);

}

timeNow();
