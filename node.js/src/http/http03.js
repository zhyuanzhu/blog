const http = require('http')
const port = 8801

const server = http.createServer((request, response) => {
  let data = ''
  request.on('data', chunk => data += chunk)
  request.on('end', () => {
    let {
      method,
      headers,
      httpVersion,
      url
    } = request
    response.writeHead(200, { 'Content-Type': 'text/html' })
    const responseData = `
    <p>method: ${method}</p> 
    <p>headers: ${JSON.stringify(headers)}</p> 
    <p>httpVersion: ${httpVersion}</p> 
    <p>url: ${url}</p>`

    response.end(responseData)
  })
})


server.listen(port, () => {
  console.log(`node.js server start at port: ${port}`)
})