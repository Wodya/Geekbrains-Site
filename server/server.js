// Modules importing
const express = require('express');
const fs = require('fs');
const basketRouter = require('./basket');
const app = express();

// Middleware
app.use(express.json());
app.use('/', express.static('../public'));
app.use('/api/basket', basketRouter);

const cors = require('cors');
app.use(cors());

app.get('/api/products', (req, res) => {
    fs.readFile('./db/ProductList.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
            // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});

