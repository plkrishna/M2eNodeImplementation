const express = require('express');
const routes = require('./routes/index');
const path=require('path');

const app = express();


app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(express.static(path.join(__dirname, 'cssDir')));
app.use('/', routes);

module.exports = app;
