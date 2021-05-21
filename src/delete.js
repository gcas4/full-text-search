const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })
client.indices.delete({
    index: 'cards'
    
}, { ignore: [400] }).then(console.log('teste')).catch(error => console.log(error))