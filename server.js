const express = require('express');
const app = express()
const PORT = 4000 || process.env.port;

app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))