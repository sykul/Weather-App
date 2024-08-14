const updateToday = async function updateTodaysWeatherCard(promise) {
  const location = await promise;
  const locationName = location.address;
  console.log("today's data:");
  console.log(locationName);
};

const updateForecast = async function updateSevenDayForecastCard(promise) {
  const data = await promise;
  console.log("forecast data:");
  console.log(data);
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

export { updateView };
