// 使用http创建客户端
const http = require('http')

// 需要启动对应port和host的服务端

let responseData = ''
const httpRequest = {
  host: 'localhost',
  port: 8801
}

// get 请求
http.get(httpRequest, response => {
  
  response.on('data', chunk => {
    responseData += chunk
  })

  response.on('end', () => {
    console.log(responseData)
  })

}).end()