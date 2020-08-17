const express = require('express');
const app = express();
const PORT = 3000;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/register', (req, res) => {
    res.render('register.html');
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`));