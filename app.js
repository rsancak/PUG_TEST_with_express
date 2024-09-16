var pug = require('pug');
var fs = require('fs');
const express = require('express');
const app = express();

app.engine('.pug', require('pug').renderFile);
app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
    var pugView = fs.readFileSync('views/index.pug', 'utf8');
    res.end(pug.render(pugView, { locals: { key: 'value' }}));
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server Ready!');
});
