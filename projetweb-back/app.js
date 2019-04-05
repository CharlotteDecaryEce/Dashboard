const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/database.config');

// on se connecte à la base de données
mongoose.connect("mongodb://localhost:27017/Music", { useNewUrlParser: true }).then(
  ()=>{console.log('Database is connected')},
  err => {console.log('Can not connect to the database'+err)
});
const app = express();
var db = mongoose.connection;
db.once('open',function(){
  console.log("connexion ok");
})

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const artistesRouter = require('./routes/artistes');
const albumsRouter = require('./routes/albums');
const tracksRouter = require('./routes/tracks');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artistes', artistesRouter);
app.use('/albums',albumsRouter);
app.use('/tracks',tracksRouter);



module.exports = app;