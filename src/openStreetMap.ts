import axios from 'axios';

export async function geocode(query: string) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;
  const { data } = await axios.get(url);
  if (!data?.length) throw new Error('No results found');

  return {
    latitude: parseFloat(data[0].lat),
    longitude: parseFloat(data[0].lon),
    displayName: data[0].display_name,
    raw: data[0],
  };
}

export async function reverseGeocode(lat: number, lon: number) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
  const { data } = await axios.get(url);
  return {
    address: data.display_name,
    raw: data,
  };
}
