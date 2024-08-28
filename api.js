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
    return response.json();
  } catch {
    console.log("error");
  }
};

const retrieveGifs = async function retrieveWeatherGifs(searchWord) {
  return fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=zp0ecQhtLxdwIVhhEbzSXRs2PP1tP251&s=${searchWord}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    });
};

export { retrieveData, retrieveGifs };
