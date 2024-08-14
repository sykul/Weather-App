const updateToday = async function updateTodaysWeatherCard(promise) {
  const locationName = await promise.address
  console.log("forecast data:")
  console.log(locationName);
};

const updateForecast = async function updateSevenDayForecastCard(promise) {
  const data = await promise;
  console.log("forecast data:")
  console.log(promise)
};

const appendFave = function appendToFavouritesSidebar() {};

const removeFave = function removeFromFavouritesSidebar() {};

const clickOnFave = function callApiWhenFaveClicked() {};

const displayLocationDropdown = function displayDropdownListOfLocations() {};

const updateView = async function displayRetrievedWeatherDataOnPage(promise) {
  updateToday(promise);
  updateForecast(promise);
};

const returnTopLocation = function returnTopLocationFromDropdownList() {};

const returnClickedLocation =
  function returnClickedLocationFromDropdownList() {};

export { updateView }