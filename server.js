const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const tokens = [];

function generateToken() {
    const token = uuid.v4();
    tokens.push(token);
    return token;
}

app.get('/generate-token', (req, res) => {
    const token = generateToken();
    res.render('token', { token });
});

app.get('/token', (req, res) => {
    const token = generateToken();
    res.render('token', { token });
});

app.get('/', (req, res) => {
    res.render('tokens', { tokens });
});

app.listen(port, () => {
    console.log('Server is running');
});