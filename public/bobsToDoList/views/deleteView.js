export const deleteBTN = function (e) {
  if (e.target.dataset.name === "remove") {
    const btn = e.target;
    const parent = btn.closest(".row");
    parent.remove();
  }
};
