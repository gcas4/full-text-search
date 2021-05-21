const fs = require('fs');
const { Client } = require('@elastic/elasticsearch')

const client = new Client({ node: 'http://localhost:9200' })
const FILE_PATH = '/Users/rafaelferrazrodrigues/Documents/hackaday/newfile.json'
const cards = JSON.parse(fs.readFileSync(FILE_PATH).toString())
console.log(`${cards.length} realties in xml file. ${JSON.stringify(cards[0])}`)

cards.forEach( card => {client.create({
    id: card.id,
    index: "cards",
    body: {
        "name": card.name,
        "text": card.text,
        "type": card.type,
        "colors" : card.colors,
    }
}).then( response => console.log("SHOW" , response)).catch(error => console.log(error))})
