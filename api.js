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

export { retrieveData }