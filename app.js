
let express = require('express');
let app = express();
let path = require('path');
const PORT = 3030;

app.use(express.static("public"))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html' ))
})


app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))

/* */

