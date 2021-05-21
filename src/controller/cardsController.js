import { cardsServices } from "../services/cardsServices.js"

export class CardsController {
    async getCards(req, res) {
        try {
            const colors = req.query.colors
            const name = req.query.name
            const type = req.query.type
            const text = req.query.text
            console.log("req: ", req.query)

            const cards = await cardsServices(colors, name, type, text)
            res.status(200).send({ cards })
        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }
}