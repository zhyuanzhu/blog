// 创建客户端
const http = require('http')

let responseData = ''
const httpRequest = {
  host: 'localhost',
  port: 8801
}

const request = http.request(httpRequest)

request.on('response', response => {
  response.on('data', chunk => {
    responseData += chunk
  })

  response.on('end', () => {
    console.log(responseData)
  })
}).end()
