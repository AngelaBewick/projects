const mainContainer = document.querySelector("#to-do");

export const typeAZ = function () {
  const type = document.querySelectorAll(".item-name");
  const types = Array.from(type);

  mainContainer.innerHTML = "";

  function byName(a, b) {
    if (a.dataset.name > b.dataset.name) {
      return 1;
    } else if (b.dataset.name > a.dataset.name) {
      return -1;
    } else {
      return 0;
    }
  }

  const sortDOM = types.sort(byName);
  //   console.log(sortDOM);

  sortDOM.forEach((elem) => {
    // console.log(elem.closest(".row").outerHTML);
    let domString = elem.closest(".row").outerHTML;
    mainContainer.insertAdjacentHTML("beforeend", domString);
  });
};
