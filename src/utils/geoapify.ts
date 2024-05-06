import { GeoapifyReverseResponse } from "../types";

export async function getTimezoneByLatlng(lat: number, lng: number) {
  const resp = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=${
      import.meta.env.VITE_GEOAPIFY_KEY
    }`
  );
  if (!resp.ok) {
    return null;
  }
  const json = await resp.json();
  const results: GeoapifyReverseResponse = json.results;
  if (!results.length) {
    return null;
  } else {
    return results[0];
  }
}
