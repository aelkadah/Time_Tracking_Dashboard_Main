let menuLis = document.querySelectorAll(".menu li");
let dailyBtn = document.querySelector(".dailyBtn");
let weeklyBtn = document.querySelector(".weeklyBtn");
let monthlyBtn = document.querySelector(".monthlyBtn");
let hourHeadings = document.querySelectorAll(".nums h1");
let lastTimeParagraph = document.querySelectorAll(".nums p");

document.onload = weeklyData();

function activeRemove() {
  menuLis.forEach((li) => {
    li.classList.remove("active");
  });
}
function dailyData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      hourHeadings.forEach((e, i) => {
        hourHeadings[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
        lastTimeParagraph[
          i
        ].innerHTML = `Last Day - ${data[i].timeframes.daily.previous}hrs`;
      });
    });
  activeRemove();
  dailyBtn.classList.add("active");
}
function weeklyData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      hourHeadings.forEach((e, i) => {
        hourHeadings[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
        lastTimeParagraph[
          i
        ].innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
      });
    });
  activeRemove();
  weeklyBtn.classList.add("active");
}
function monthlyData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      hourHeadings.forEach((e, i) => {
        hourHeadings[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
        lastTimeParagraph[
          i
        ].innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
      });
    });
  activeRemove();
  monthlyBtn.classList.add("active");
}
dailyBtn.onclick = dailyData;
weeklyBtn.onclick = weeklyData;
monthlyBtn.onclick = monthlyData;
