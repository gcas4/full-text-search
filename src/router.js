import express from 'express'
import { CardsController } from './controller/cardsController.js'
// const express = require('express')

export const cardsRouter = express.Router()
const cardsController = new CardsController()
cardsRouter.get("/", cardsController.getCards)