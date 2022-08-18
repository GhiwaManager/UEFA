// variable section
const bars = document.getElementById("bars");
const links = document.getElementById("links");
// variable VIP calc
const vipMoney = document.getElementById("vip-money");
const vipDays = document.getElementById("vip-days");
const vipRate = document.getElementById("vip-rate");
const vipBtn = document.getElementById("vip-btn");
const vipResult = document.getElementById("vip-answer");
// variable Regular calc
const regMoney = document.getElementById("reg-money");
const regDays = document.getElementById("reg-days");
const regRate = document.getElementById("reg-rate");
const regBtn = document.getElementById("reg-btn");
const regResult = document.getElementById("reg-answer");
//start
bars.addEventListener("click", (e) => {
  if (e.target.id === "bars") {
    if (links.style.display == "none" || links.style.display == "") {
      links.style.display = "flex";
      bars.style.transform = "rotate(90deg)";
      bars.style.transition = ".3s";
      links.style.transition = "1s";
    } else if (links.style.display == "flex") {
      links.style.display = "none";
      links.style.transition = ".3s";
      bars.style.transform = "rotate(0deg)";
    }
  }
});
// start VIP calc
vipBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(getCalc(vipMoney.value, vipDays.value, vipRate.value));
  vipResult.innerHTML = `You need <span class = 'vip-dollar'>${
    vipDays.value
  } </span>days to get : <span class = 'vip-dollar'>${getCalc(
    vipMoney.value,
    vipDays.value,
    vipRate.value
  )} $</span>`;
});
// start regular calc
regBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // getCalc(regMoney.value, regDays.value, regRate.value);

  regResult.innerHTML = `You need <span class = 'vip-dollar'>${
    regDays.value
  } </span>days to get :<span class = 'vip-dollar'>${getCalc(
    regMoney.value,
    regDays.value,
    regRate.value
  )} $ </span>`;
});
function getCalc(money, days, rate) {
  // let result = parseFloat(money);
  for (let i = 1; i <= parseInt(days); i++) {
    money = parseFloat(money) + (parseFloat(money) * parseFloat(rate)) / 100;
  }
  return money.toFixed(2);
}
