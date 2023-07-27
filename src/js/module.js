export const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

/**
 * @param {*} dateUnix Unix date in seconds
 * @param {*} timeZone TImezone shift from UTC in seconds
 * @returns Date string. Formate: "Monday 7, Jul"
 */
export function getDate(dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000)
  const weekDay = weekDays[date.getUTCDay()]
  const month = months[date.getUTCMonth()]

  return `${weekDay} ${date.getUTCDate()}, ${month}`
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timeZone Timezone shift form UTC in seconds
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */
export function getTime(timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000)
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  const period = hours >= 12 
  ? 'PM'
  : 'AM'

  return `${hours % 12 || 12}:${minutes} ${period}`
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift form UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */
export function getHours(timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000)
  const hours = date.getUTCHours()
  const period = hours >= 12 
  ? 'PM'
  : 'AM'

  return `${hours % 12 || 12} ${period}`
}

/**
 * @param {number} mps Meter per seconds
 * @returns {number} Kilometer per hour
 */
export const mps_to_kmh = (mps) => {
  const mph = mps * 3600
  return mph / 1000
}

export const aqiText = {
  1: {
    level: 'Good',
    message: 'Air quality is satisfactory'
  },
  2: {
    level: 'Fair',
    message: 'Air quality is acceptable'
  },
  3: {
    level: 'Moderate',
    message: 'Members of sensitive groups may experience health effects'
  },
  4: {
    level: 'Poor',
    message: 'Everyone may begin to experience health effects'
  },
  5: {
    level: 'Very poor',
    message: 'Health warnings of emergency conditions'
  }
}