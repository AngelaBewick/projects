const mainContainer = document.querySelector("#to-do");
const date = document.querySelectorAll(".date");
const dates = Array.from(date);

const callDOM = function () {
  const date = document.querySelectorAll(".date");
  const dates = Array.from(date);
  return dates;
};

export const dateOld = function () {
  const dates = callDOM();
  mainContainer.innerHTML = "";

  function byDate(a, b) {
    return (
      new Date(a.textContent).valueOf() - new Date(b.textContent).valueOf()
    ); //timestamps
  }

  const sortDOM = dates.sort(byDate);

  sortDOM.forEach((elem) => {
    let domString = elem.closest(".row").outerHTML;
    console.log(elem.closest(".row").outerHTML);
    mainContainer.insertAdjacentHTML("beforeend", domString);
  });
};
export const dateNew = function () {
  const dates = callDOM();
  mainContainer.innerHTML = "";

  function byDate(a, b) {
    return (
      new Date(b.textContent).valueOf() - new Date(a.textContent).valueOf()
    ); //timestamps
  }

  const sortDOM = dates.sort(byDate);

  sortDOM.forEach((elem) => {
    let domString = elem.closest(".row").outerHTML;
    console.log(elem.closest(".row").outerHTML);
    mainContainer.insertAdjacentHTML("beforeend", domString);
  });
};
/*

object.sort(byDate)
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

console.log(new Date());
const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
console.log(month, day, year);
console.log(new Date("05.05.2022").valueOf());
console.log(new Date("11.23.2021").valueOf());

const timestamp1 = 1651726800000;
const timestamp2 = 1637647200000;

const date1 = new Date(timestamp1);
const date2 = new Date(timestamp2);

console.log(date1, date2);
*/
