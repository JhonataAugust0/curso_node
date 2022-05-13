const express = require('express')
const app = express()


app.listen(3000, () => {
  console.log('Server is running')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/public/sobreNos.html')
})

app.get('/redes', (req, res) => {
  res.send('Acompanhe-nos nas redes!')
})

app.get('/ola/:nome/:cargo', (req, res) => {
  res.send('<h1>Olá!'+ req.params.nome+'</h1>' + '<h2>Seu cargo é de' + req.params.cargo+'</h2>')
})