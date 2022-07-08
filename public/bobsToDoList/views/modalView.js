const description = document.querySelector("#item-description");
const select = document.querySelector("#item-type");
const radioHigh = document.querySelector("#high-priority");
const radioMid = document.querySelector("#mid-priority");
const radioLow = document.querySelector("#low-priority");
const modalSubmit = document.querySelector("#modal-submit");
const modalClose = document.querySelector("#modal-close");
const mainContainer = document.querySelector("#to-do");

export const clearModal = function () {
  description.value = "";
  select.value = document.querySelector("#select-default").value;
};

const currentDate = function () {
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  let year = new Date().getFullYear();
  let date = `${month.toString().padStart(2, 0)}.${day
    .toString()
    .padStart(2, 0)}.${year}`;
  // console.log(date);
  return date;
};
currentDate();

const priority = function () {
  let priorityArr = [];
  if (radioHigh.checked) {
    priorityArr.push(radioHigh.id, 1);
  } else if (radioMid.checked) {
    priorityArr.push(radioMid.id, 2);
  } else if (radioLow.checked) {
    priorityArr.push(radioLow.id, 3);
  }
  return priorityArr;
};

const addItem = async function () {
  const requestOptions = {
    priority: `${priority()[0]}`,
    date: `${currentDate()}`,
    type: `${select.value}`,
    description: `${description.value}`,
  };
  // console.log(requestOptions);
  const response = await fetch(
    "https://angela-bewicks-api.onrender.com/api/v1",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestOptions),
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);

  mainContainer.insertAdjacentHTML(
    "afterbegin",
    `
    <div id="${data}" class="row mb-3 ml-1">
        <div class="list-item ${priority()[0]} col col-sm-11" data-id="${
      priority()[1]
    }">
            <h5 class="item-name" data-name="${select.value}">${
      select.value
    }:</h5>
            <p class="item">
              ${description.value} <br />
              <span
                class="small-text date"
                >${currentDate()}</span>
            </p>
        </div>
        <button data-name="remove" class="btn col col-sm-1 bg-dark text-white">X</button>
    </div>
    `
  );
};

modalSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  // saveItem();
  addItem();
  modalClose.click();
});

// const object = `
// <div class="row mb-3 ml-1">
//     <div class="list-item ${priority()[0]} col col-sm-11" data-id="${
//   priority()[1]
// }">
//         <h5 class="item-name" data-name="${select.value}">${select.value}:</h5>
//         <p class="item">
//           ${description.value} <br />
//           <span
//             class="small-text date"
//             >${currentDate()}</span>
//         </p>
//     </div>
//     <button data-name="remove" class="btn col col-sm-1 bg-dark text-white">X</button>
// </div>
// `;
// const jsonObt = JSON.stringify(object);
// console.log(jsonObt);

// const htmlEl = JSON.parse(jsonObt);
// console.log(htmlEl);
