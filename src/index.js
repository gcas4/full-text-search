import express from 'express'
import { cardsRouter } from './router.js'
// const express = require('express')

const app = express()
app.use(express.json())
app.use("/cards", cardsRouter)
app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost: 3000`)
})
