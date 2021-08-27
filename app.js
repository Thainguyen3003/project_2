const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();
const port = 3000;
const homeRouter = require('./routers/home');

console.log('PATH : ' + path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'))

// HTTP logger
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/login', (req, res) => {
  res.render('auth/login', { title: 'Minh la trang login', message: 'Hello there!' })
})

app.use('/', homeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})