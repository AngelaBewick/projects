const mainContainer = document.querySelector("#to-do");

const callDOM = function () {
  const item = document.querySelectorAll(".list-item");
  const items = Array.from(item);
  return items;
};

export const priorityHigh = function () {
  const items = callDOM();
  mainContainer.innerHTML = "";

  function byName(a, b) {
    return parseInt(a.dataset.id) - parseInt(b.dataset.id);
  }
  const sortDOM = items.sort(byName);

  sortDOM.forEach((elem) => {
    let domString = elem.closest(".row").outerHTML;
    mainContainer.insertAdjacentHTML("beforeend", domString);
  });
};

export const priorityLow = function () {
  const items = callDOM();

  mainContainer.innerHTML = "";

  function byName(a, b) {
    return parseInt(b.dataset.id) - parseInt(a.dataset.id);
  }
  const sortDOM = items.sort(byName);

  sortDOM.forEach((elem) => {
    let domString = elem.closest(".row").outerHTML;
    mainContainer.insertAdjacentHTML("beforeend", domString);
  });
};
