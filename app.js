// @ts-nocheck

let express = require('express');
let app = express();
let path = require('path');
const PORT = 3001;


app.use(express.static("public"))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/babbage', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/babbage.html'));
})

app.get('/berners-lee', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/berners-lee.html'));
})

app.get('/clarcke', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/clarcke.html'));
})

app.get('/hamilton', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/hamilton.html'));
})

app.get('/hopper', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/hopper.html'))
})

app.get('/lovelace', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/lovelace.html'))
})

app.get('/turing', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/turing.html'))
})












app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))