// 事件监听的方式创建一个 http Server

const { Server } = require('http')
const server = new Server()
const port = 8000

server.on('request', (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  response.end('Hello node.js')
})

server.listen(port, () => {
  console.log(`node.js server start at port: ${port}`)
})