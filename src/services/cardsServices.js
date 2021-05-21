// const { Client } = require('@elastic/elasticsearch');
// const { CLIENT_ID, PASSWORD, USERNAME } = require("../config")
import { Client } from '@elastic/elasticsearch'
import { CLIENT_ID, PASSWORD, USERNAME } from '../../config.js'

// require('dotenv').config();

const client = new Client({
    cloud: {
        id: process.env.CLIENT_ID,
    },
    auth: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

export const cardsServices = async (colors, name, type, text) => {
    const result = await client.search({
        index: 'cards',
        type: '_doc',
        body: {
            query: {
                bool: {
                    filter: [
                        {
                            term: {
                                'name.keyword': name
                            }
                        }
                    ]
                }
            }
        }
    })
        .then(res => console.log("FOI"))
        .catch(error => console.error(" Não foi :(", error))
    console.log("result:", result)
    return result
}