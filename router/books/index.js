const express = require('express')
const router = express.Router()
const bookControllers = require('../../controller/bookControllers')
const validate = require('../../utils/validate')

router.get('/getdata', bookControllers.getdata)
router.post('/adddata',validate("bookValidation"), bookControllers.adddata)
router.post('/getonedata', bookControllers.getonedata)
router.post('/updatedata', bookControllers.updatedata)
router.delete('/deletedata', bookControllers.deletedata)


module.exports = router