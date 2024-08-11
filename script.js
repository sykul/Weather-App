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

/* UI functions (view) */

const createCard = function createTodaysWeatherCard() {};

const createForecast = function createSevenDayForecastCard() {};

const appendFave = function appendToFavouritesSidebar() {};

const removeFave = function removeFromFavouritesSidebar() {};

const displayLocationDropdown = function displayDropdownListOfLocations() {};

const displayData = function displayRetrievedWeatherDataOnPage() {};

const returnTopLocation = function returnTopLocationFromDropdownList() {};

const returnClickedLocation =
  function returnClickedLocationFromDropdownList() {};

/* API functions (model) */

const returnDefaultLocation = function defaultLocation() {};

const retrieveData = async function retrieveWeatherDataFromApi(
  location,
  todayDate,
  endDate,
  metricUkUs
) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${todayDate}/${endDate}?unitGroup=${metricUkUs}&include=days&key=YA24L3VQXAWW22R59U2KSCXTQ`
    );
    const locationData = await response.json();
    return locationData;
  } catch {
    console.log("error");
  }
};

/* 'Database' functions (model) */

const Location = class LocationClass {
  constructor(apiData) {}
};

const Favourites = class FavouriteList {
  constructor() {
    this.list = [];
  }

  addFave = function addFavouriteToDb(itemToAdd) {
    this.list.push(itemToAdd);
  };

  deleteFave = function deleteFavouriteToDb() {};
};

const favourites = new Favourites();

favourites.addFave("item");

console.log(retrieveData("Gardanne", "2024-08-11", "2024-08-18", "metric"))