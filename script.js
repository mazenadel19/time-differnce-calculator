const root = document.querySelector("#root");
const main = document.querySelector("main");
const date = document.querySelector("input");

const h1 = document.createElement("h1");
const goal = new Date(2022, 08, 22);

function addS(num) {
  return Number(num) !== 1 ? "s" : "";
}

function goalDateFormat(date = goal) {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

setInterval(() => {
  const inputValue = !!date.value && new Date(date.value);
  const GOAL_DATE =
    (inputValue && goalDateFormat(inputValue)) || goalDateFormat();

  const now = new Date();
  const daysDifference =
    ((inputValue || goal).getTime() - now.getTime()) / (1000 * 3600 * 24);

  const timeDotIdx = daysDifference.toString().indexOf(".");
  const timeLeftOfTheDay = "0" + daysDifference.toString().slice(timeDotIdx);
  const hoursLeftOfTheDay = (24 * timeLeftOfTheDay) % 24;

  const hourDotIdx = hoursLeftOfTheDay.toString().indexOf(".");
  const timeLeftOfTheHour =
    "0" + hoursLeftOfTheDay.toString().slice(hourDotIdx);
  const miniutesLeftOfTheHour = (60 * timeLeftOfTheHour) % 60;

  const minuteDotIdx = miniutesLeftOfTheHour.toString().indexOf(".");
  const timeLeftOfTheMinute =
    "0" + miniutesLeftOfTheHour.toString().slice(minuteDotIdx);
  const secondsLeftOfTheMiniute = (60 * timeLeftOfTheMinute) % 60;

  const DAYS = daysDifference.toFixed();
  const HOURS = hoursLeftOfTheDay.toFixed(0);
  const MINUITES = miniutesLeftOfTheHour.toFixed(0);
  const SECONDS = secondsLeftOfTheMiniute.toFixed(0);

  h1.innerHTML = `<span class='time ${DAYS > 0 ? "" : "ahead"}'>
  ${Math.abs(DAYS)} day${addS(DAYS)} ${HOURS} hour${addS(HOURS)}<br/> 
  ${MINUITES} miniute${addS(MINUITES)} and ${SECONDS} second${addS(
    SECONDS
  )}</span><br/>
  ${DAYS >= 0 ? "left till" : "ahead of"}<br/>
  <span class="goal">${GOAL_DATE}</span>`;
  main.appendChild(h1);
}, 1000);
