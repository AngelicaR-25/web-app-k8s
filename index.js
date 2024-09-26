const express = require('express');
const app = express();
const port = 8082;

app.get('/', (req, res) => {
    res.send('¡Hola, Kubernetes!');
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
});
