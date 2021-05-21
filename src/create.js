const { Client } = require('@elastic/elasticsearch')
const client = new Client({
    cloud: {
      id: 'hackaday-full-text-search:c291dGhhbWVyaWNhLWVhc3QxLmdjcC5lbGFzdGljLWNsb3VkLmNvbSRiZGM2OWFhZDA1ZGU0MjQ1OWI3YzM1ZWU1MDIwNDQ5MyQ0MGVjNjE2NzJjMzU0NDM4OWFlZTFjODg1NTFhYzI5Mw==',
    },
    auth: {
      username: 'elastic',
      password: '20qgjcVdJTZwi8OzWrVyxKTp'
    }
  })

client.indices.create({
    index: 'cards',
    body: {
        mappings: {
            properties: {
                "name": {type: 'text'},
                "text": {type: 'text'},
                "type": {type: 'text'},
                "colors" : {type: 'text'},
                

            }    
        }
    }
}, { ignore: [400] }).then(console.log('teste')).catch(error => console.log(error))