const searchBox = document.querySelector(".search-box");
const searchSubmitButton = document.querySelector(".search-submit-button");
const clearButton = document.querySelector(".clear-button");
const locationHeading = document.querySelector(".location-heading");
const todayCardLeft = document.querySelector(".today-card-left");
const todayCardRight = document.querySelector(".today-card-right");
const forecastDays = document.querySelectorAll(".forecast-cards > div");

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
    console.log(value);

    searchBox.value = "";
    searchBox.placeholder = "Search for your city...";
  } else {
    console.log("wrong input");
  }
});

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchBox.value = "";
  searchBox.placeholder = "Search for your city...";
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
  todaysWeatherIcon.src = `icons/${todaysWeather}.svg`;
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
  forecastDays.forEach((day, index, listObj) => {
    let weatherIcon = document.createElement("img");
    weatherIcon.src = `icons/${locationObject.days[index + 1].icon}.svg`;
    day.textContent = "";
    day.appendChild(weatherIcon);
  });
};

const appendFave = function appendToFavouritesSidebar() {};

const removeFave = function removeFromFavouritesSidebar() {};

const clickOnFave = function callApiWhenFaveClicked() {};

const displayLocationDropdown = function displayDropdownListOfLocations() {};

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
