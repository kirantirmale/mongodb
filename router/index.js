const express = require('express')
const router = express.Router()

const book = require('./books')
const products = require('./products')
const students = require('./students')

router.use('/book',book)
router.use('/products',products)
router.use('/students',students)

module.exports = router