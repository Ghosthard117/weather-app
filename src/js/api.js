
const api_key = '421f6c52da47e0336b3269900a85aa82'

/** 
 * fetch data from server
 * 
 * @param {string} URL API url
 * @param {Function} Callback Function to handle the fetched data
 * */ 


export function fetchData(URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((response) => {
      if (!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json()
    })
    .then((data) => callback(data))
}

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
  },
  airPollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
  },
  reverseGeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
  },
  /**
   * 
   * @param {string} query Search query e.g.: "London", "New York"
   */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
  }
}