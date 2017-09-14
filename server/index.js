if (process.env.NODE_ENV === 'development') {
  require('./secrets'); // this will mutate the process.env object with your secrets.
}
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });

const app = express()

dbStore.sync();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(volleyball)

app.use(require('./middleware/statics'))

app.use(session({
  secret: process.env.SESSION_SECRET || "eggplant",
  store: dbStore,
  resave: false,
  saveUninitialized: true
}));
app.use(require('./middleware/passport'))

// app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

//if doesn't hit backend routes, send index.html
app.get('*', (req, res, next) => res.sendFile(path.join(__dirname, '../public/index.html')))

//error-handler
app.use((err, req, res, next) => {
  console.error(err)
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error');
})

db.sync()
.then( () => {
   app.listen(3000, () => console.log(`KEEPING IT ON port 3000...`))
  }
)
.catch( () => console.log('Error with database sync') )

module.exports = app
