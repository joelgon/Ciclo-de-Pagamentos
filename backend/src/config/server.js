const port = 3003
const express = require('express')
const server = express()
const cors = require('cors')
const queryParse = require('express-query-int')

server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(queryParse())

server.listen(port, function() {
    console.log(`Back-end is running on port: ${port}.`)
})

server.use(cors())

module.exports = server