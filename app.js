require('./config/db')
const express = require('express')
const app = express()
const port = 3000
const router = require('./router/index')
const {errorHandler} = require("./utils/errarHandler")
app.use(express.json());

app.use('/api', router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})