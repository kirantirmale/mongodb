const express = require('express')
const router = express.Router()
const productsController = require('../../controller/productsController')

router.get('/getdata', productsController.getdata)
router.post('/adddata', productsController.adddata)
router.post('/updatedata', productsController.updatedata)
router.post('/getonedata', productsController.getonedata)
router.delete('/deletedata', productsController.deletedata)


module.exports = router