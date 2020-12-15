const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a6068b328e140d7bd1f7b38f660affbe&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.temperature + ' degress . The weather details for '+ body.location.region +' as at timestamp of ' + body.location.localtime +' Latitude: ' + body.location.lat + ' Longtude: ' + body.location.lon  )
        }
    })
}

module.exports = forecast