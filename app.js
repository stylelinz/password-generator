const express = require('express')
const app = express()
const exphdb = require('express-handlebars')
const bodyParser = require('body-parser')
const passwordGenerator = require('./password-generator')
const port = 3000

app.engine('handlebars', exphdb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const formBody = req.body
  const password = passwordGenerator(formBody)
  res.render('index', { password })
})

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})
