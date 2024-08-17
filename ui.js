const searchBox = document.querySelector(".search-box");
const locationHeading = document.querySelector(".location-heading");
const todayCardLeft = document.querySelector(".today-card-left");
const todayCardRight = document.querySelector(".today-card-right");

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
  todayCardLeft.textContent = todaysWeather;

  todayCardRight.querySelector(".temp").textContent = today.temp;
  locationObject.console.log("today's data:");
  console.log(locationName);
};

const updateForecast = async function updateSevenDayForecastCard(
  locationObject
) {
  console.log("forecast data:");
  console.log(locationObject);
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
