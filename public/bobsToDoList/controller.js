// const axios = require("axios");
import * as prioritySort from "./views/priorityView.js";
import { typeAZ } from "./views/typeView.js";
import * as dateSort from "./views/dateView.js";
import { deleteBTN } from "./views/deleteView.js";
import * as addView from "./views/modalView.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const typeBTN = document.querySelector("#type");
const highBTN = document.querySelector("#high");
const lowBTN = document.querySelector("#low");
const dateOldBTN = document.querySelector("#dateOld");
const dateNewBTN = document.querySelector("#dateNew");
const openModal = document.querySelector("#modal-open");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

openModal.addEventListener("click", function (e) {
  addView.clearModal();
});
typeBTN.addEventListener("click", function (e) {
  typeAZ();
});
highBTN.addEventListener("click", function (e) {
  prioritySort.priorityHigh();
});
lowBTN.addEventListener("click", function (e) {
  prioritySort.priorityLow();
});
dateOldBTN.addEventListener("click", function (e) {
  dateSort.dateOld();
});
dateNewBTN.addEventListener("click", function (e) {
  dateSort.dateNew();
});
document.addEventListener("click", function (e) {
  deleteBTN(e);
});
