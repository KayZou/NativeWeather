export class MeteoApi {
  static async getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&current_weather=true&timezone=auto`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  static async getCity(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  static async fetchCityByName(city) {
    console.log('kanqlbo 3la', city);
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0];
    } else {
      throw new Error('City not found');
    }
  }
}
