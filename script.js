import { retrieveData } from "./api.js";
import { favourites } from "./db.js";
import { updateView } from "./ui.js"

const colours = [
  "#003f5c",
  "#58508d",
  "#8a508f",
  "#bc5090",
  "#de5a79",
  "#ff6361",
  "#ff8531",
  "#ffa600",
];

const retrievedPromise = retrieveData(
  "Paris",
  "2024-08-11",
  "2024-08-18",
  "metric"
);
/* 
updateView(retrievedPromise)

 */
console.log(retrievedPromise)