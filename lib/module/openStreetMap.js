import axios from 'axios';
export async function geocode(query) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;
  const {
    data
  } = await axios.get(url);
  if (!(data !== null && data !== void 0 && data.length)) throw new Error('No results found');
  return {
    latitude: parseFloat(data[0].lat),
    longitude: parseFloat(data[0].lon),
    displayName: data[0].display_name,
    raw: data[0]
  };
}
export async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
  const {
    data
  } = await axios.get(url);
  return {
    address: data.display_name,
    raw: data
  };
}
//# sourceMappingURL=openStreetMap.js.map