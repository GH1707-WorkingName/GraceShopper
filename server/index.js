const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const PORT = 3000
const path = require('path')

//const db = require('');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(volleyball)

app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api'))

//if doesn't hit backend routes, send index.html
app.get('*', (req, res, next) => res.sendFile(path.join(__dirname, '../public/index.html')))

//error-handler
app.use((err, req, res, next) => {
  console.error(err)
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error');
})

// db.sync()
// .then( () => {
  app.listen(3000, () => console.log(`Listening on port 3000...`))
//   }
// )
// .catch( () => console.log('Error with database sync') )
