const Location = class LocationClass {
  constructor(apiData) {
    
  }
};

const Favourites = class FavouriteList {
  constructor() {
    this.list = [];
  }

  addFave = async function addFavouriteToDb(promiseToAdd) {
    const itemToAdd = await promiseToAdd;
    this.list.push(itemToAdd);
  };

  deleteFave = function deleteFavouriteToDb() {};
};

const favourites = new Favourites();

const currentLocation = new Location();

export { favourites, Location };