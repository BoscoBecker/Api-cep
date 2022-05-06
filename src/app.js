const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const index = require('./routes/index');
const cep = require('./routes/cep.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(helmet());
app.use(cors());

app.use(index);
app.use('/api', cep);


module.exports = app;
