const fs = require('fs')
const fileBuffer = fs.readFileSync('1-json.json')
const noteJSON = JSON.parse(fileBuffer.toString())

noteJSON.name = 'Neelkanth'
noteJSON.age = '30'

fs.writeFileSync('1-json.json', JSON.stringify(noteJSON))