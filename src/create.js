const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  cloud: {
    id: '',
  },
  auth: {
    username: '',
    password: ''
  }
})

client.indices.create({
  index: 'cards',
  body: {
    mappings: {
      properties: {
        "name": { type: 'text' },
        "text": { type: 'text' },
        "type": { type: 'text' },
        "colors": { type: 'text' },


      }
    }
  }
}, { ignore: [400] }).then(console.log('teste')).catch(error => console.log(error))