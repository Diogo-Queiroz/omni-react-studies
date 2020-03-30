const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// Responsavel por converter o JSON do request em um objeto javascript
app.use(express.json());

app.use(routes);

app.listen(3333); // port 3333 for nodejs