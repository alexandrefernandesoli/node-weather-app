const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const key = '76134d22dd166fdad584166bd7eb0ee4'
  const url = `https://api.darksky.net/forecast/${key}/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}?units=si`

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location!', undefined)
    } else {
      callback(undefined, `${body.daily.data[0].summary} `
        + `It's currently ${body.currently.temperature} degrees celcius out. `
        + `There is a ${body.currently.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast
