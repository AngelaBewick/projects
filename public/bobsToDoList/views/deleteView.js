export const deleteBTN = async function (e) {
  if (e.target.dataset.name === "remove") {
    const btn = e.target;
    const parent = btn.closest(".row");
    const id = parent.getAttribute("id");
    parent.remove();
    await fetch(`https://angela-bewicks-api.onrender.com/api/v1/${id}`, {
      method: "DELETE",
    });
  }
};
