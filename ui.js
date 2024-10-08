import { retrieveData, retrieveGifs } from "./api.js";

const searchBox = document.querySelector(".search-box");
const searchSubmitButton = document.querySelector(".search-submit-button");
const clearButton = document.querySelector(".clear-button");
const locationHeading = document.querySelector(".location-heading");
const todayCardLeft = document.querySelector(".today-card-left");
const todayCardRight = document.querySelector(".today-card-right");
const forecastDays = document.querySelectorAll(".forecast-cards > div");
const toggleButton = document.querySelector(".toggle-button");

const todaysDate = new Date();
const todayIsoString = todaysDate.toISOString();

const nextWeeksDate = new Date();
nextWeeksDate.setDate(todaysDate.getDate() + 7);
const nextWeekIsoString = nextWeeksDate.toISOString();

const todaysDateString = todayIsoString.slice(0, 10);
const nextWeeksDateString = nextWeekIsoString.slice(0, 10);

toggleButton.addEventListener("click", (e) => {
  const temperature = document.querySelector(".temp");
  const maxTemperature = document.querySelector(".max-temp");
  const minTemperature = document.querySelector(".min-temp");
  if (toggleButton.innerHTML === "<b>C°</b>/F°") {
    toggleButton.innerHTML = "C°/<b>F°</b>";
    temperature.textContent = Math.round((temperature.textContent * (9 / 5) + 32) * 10) / 10;
    maxTemperature.textContent = Math.round((maxTemperature.textContent * (9 / 5) + 32) * 10) / 10;
    minTemperature.textContent = Math.round((minTemperature.textContent * (9 / 5) + 32) * 10) / 10;
  } else if (toggleButton.innerHTML === "C°/<b>F°</b>") {
    toggleButton.innerHTML = "<b>C°</b>/F°";
    temperature.textContent = Math.round(((temperature.textContent - 32) * 5 / 9) * 10) / 10;
    maxTemperature.textContent = Math.round(((maxTemperature.textContent - 32) * 5 / 9) * 10) / 10;
    minTemperature.textContent = Math.round(((minTemperature.textContent - 32) * 5 / 9) * 10) / 10;
  }
});

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchSubmitButton.click();
  }
});

searchSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let value = searchBox.value;

  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    const retrievedPromise = retrieveData(
      value,
      todaysDateString,
      nextWeeksDateString,
      "metric"
    );

    updateView(retrievedPromise);

    searchBox.value = "";
    searchBox.placeholder = "Search for your city...";
  } else {
    console.log("wrong input");
  }
});

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchBox.value = "";
});

const clearSearchBox = function clearSearchBoxContent() {
  searchBox.value = "";
};

const updateHeading = function updateLocationHeading(location) {
  locationHeading.textContent = location.resolvedAddress;
};


const updateToday = async function updateTodaysWeatherCard(locationObject) {
  const locationName = locationObject.address;
  const today = locationObject.days[0];
  const todaysWeather = today.icon;
  const todaysWeatherIcon = document.createElement("img");

  const todaysWeatherGif = await retrieveGifs(todaysWeather)

  todaysWeatherIcon.src = `${todaysWeatherGif.data.images.original.url}`;
  todayCardLeft.textContent = "";
  todayCardLeft.appendChild(todaysWeatherIcon);

  todayCardRight.querySelector(".temp").textContent = today.feelslike;
  todayCardRight.querySelector(".max-temp").textContent = today.feelslikemax;
  todayCardRight.querySelector(".min-temp").textContent = today.feelslikemin;
  todayCardRight.querySelector(
    ".rain-prob"
  ).textContent = `${today.precipprob}%`;
  todayCardRight.querySelector(".moon-phase").textContent = today.moonphase;
};

const updateForecast = async function updateSevenDayForecastCard(
  locationObject
) {
  forecastDays.forEach(async function(day, index, listObj) {
    let weatherIcon = document.createElement("img");
    let weatherOfDay = locationObject.days[index + 1].icon
    let weatherGif = await retrieveGifs(weatherOfDay)
    let weatherGifUrl = weatherGif.data.images.original.url
    weatherIcon.src = weatherGifUrl;
    day.textContent = "";
    day.appendChild(weatherIcon);
  });
};

const updateView = async function displayRetrievedWeatherDataOnPage(promise) {
  const locationObject = await promise;
  clearSearchBox();
  updateHeading(locationObject);
  updateToday(locationObject);
  updateForecast(locationObject);
};

const returnTopLocation = function returnTopLocationFromDropdownList() {};

const returnClickedLocation =
  function returnClickedLocationFromDropdownList() {};

export { updateView };
