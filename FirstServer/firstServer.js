const http = require('http')

http.createServer((req, res) => {
  res.end("Olá")
}).listen(3000)
console.log('Server is running')