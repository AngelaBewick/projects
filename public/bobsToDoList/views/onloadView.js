const mainContainer = document.querySelector("#to-do");
const insertHTML = function (data) {
  data["rows"].forEach((element) => {
    // console.log(element);

    let priority = function () {
      if (element.priority === "high-priority") {
        return 1;
      } else if (element.priority === "mid-priority") {
        return 2;
      } else {
        return 3;
      }
    };
    priority();
    // console.log(priority);
    mainContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <div id="${element["item_id"]}" class="row mb-3 ml-1">
            <div class="list-item ${
              element["priority"]
            } col col-sm-11" data-id="${priority()}">
                <h5 class="item-name" data-name="${element["type"]}">${
        element["type"]
      }:</h5>
                <p class="item">
                  ${element["item_description"]} <br />
                  <span
                    class="small-text date"
                    >${element["date"]}</span>
                </p>
            </div>
            <button data-name="remove" class="btn col col-sm-1 bg-dark text-white">X</button>
        </div>
        `
    );
  });
};

export const displayData = async function () {
  const response = await fetch(
    "https://angela-bewicks-api.onrender.com/api/v1"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  // console.log(data);
  insertHTML(data);
};
