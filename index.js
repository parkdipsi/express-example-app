const http = require('http')
const api = require('./bin/api/server')
require('dotenv').config();
const port = process.env.PORT

const server = http.createServer(api)

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})