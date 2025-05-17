export const getLocationData = async (lat, lon) => {
  try {
    const response = fetch(
      `https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
export const getLocationLatLongList = async () => {
  try {
    const response = fetch(`https://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
export const getLocationLatLong = async (locationName) => {
  try {
    const response = fetch(
      `https://localhost:3000/api/location/${locationName}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
