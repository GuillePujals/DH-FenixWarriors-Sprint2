const express = require('express')
const app = express()

const path = require('path');
const puerto = process.env.PORT;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.post('/', (req, res) => {
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
    res.sendFile(path.join(__dirname, './views/porueba.html'));
});

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});
