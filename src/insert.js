const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

client.create({
    id: "383ui4571j=0423m,fmf--2349144",
    index: "cards",
    body: {
        "name": "ja deu certo",
        "text": "qualquer coisa",
        "type": ["Tipo"],
        "colors" : ["VERMELHO", "VERDE"],
    }
}).then( response => console.log("SHOW" , response)).catch(error => console.log(error))