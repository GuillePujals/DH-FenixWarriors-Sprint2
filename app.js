const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/login/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/productCart/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'));
});

app.get('/productDetail/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});

app.get('/register/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/template/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/template.html'));
});

app.get('/prueba/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/prueba.html'));
});

app.listen(port, () => {
    console.log('Página de alquiler de casas '+ port);
});
