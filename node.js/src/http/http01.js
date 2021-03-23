// 创建一个简单的http服务

const http = require('http')
const port = 8801

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  response.end('Hello node.js')
  // 等价于  response.write('Hello node.js') response.end()
})

// http.createServer 是对 http 一些事件对监听

server.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`node.js server start at port: ${port}`)
})

server.on('listening', () => {
  console.log(`node.js server listening`)
})

server.on('connection', () => {
  console.log(`node.js connection`)
})
