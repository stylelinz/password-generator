const express = require('express')
const app = express()
const exphdb = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000

app.engine('handlebars', exphdb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // TODO: Finish this block.
  const formBody = req.body
  console.log(formBody)
  res.render('index', { formBody })
})

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})
