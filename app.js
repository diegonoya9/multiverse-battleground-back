const express = require('express')
const app = express()
const apiRoutes = require('./routes/apiRoutes')
const cors = require('cors')
const port = process.env.PORT || 3009

app.use(cors())
app.use(express.json())
app.use(express.static('public'));
app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log('listen multiverse in port 3009')
})