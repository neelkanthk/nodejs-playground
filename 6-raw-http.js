const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=f8e6c1943ffa24d160b462ba84293168&query=' + '45' + ','+ '70'

const request = http.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)

        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()