const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const PORT = 3000;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

const urlencodeParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/register', (req, res) => {
    res.render('register.html');
});

app.post('/register', urlencodeParser, (req, res) => {
    res.json(req.body);
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`));