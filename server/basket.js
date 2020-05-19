const express = require('express');
const fs = require('fs');
const router = express.Router();

const cors = require('cors');
router.use(cors());

function read(req, res, func) {
    fs.readFile('./db/Basket.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        }
        func(JSON.parse(data));
    });
}
function write(res, basket) {
    fs.writeFile('./db/Basket.json', JSON.stringify(basket,null,4), (err) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            res.send('{"result": 1}');
        }
    });
}
router.get('/', (req, res) => {
    console.log('get');
    fs.readFile('./db/Basket.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

router.post('/', (req, res) => {
    console.log('post');
    read(req, res, (basket) =>{
        basket.push(req.body);
        write(res,basket);
    });
});
router.put('/:id', (req, res) => {
    console.log('put');
    read(req, res, (basket) =>{
      const find = basket.find(el => el.id === +req.params.id);
      find.quantity += req.body.quantity;
      write(res,basket);
    })
});
router.delete('/:id', (req, res) => {
    console.log('delete');
    read(req, res, (basket) =>{
        const find = basket.find(el => el.id === +req.params.id);
        find.quantity -= req.body.quantity;
        if(find.quantity === 0)
            basket.splice(basket.indexOf(find),1);
        write(res,basket);
    })
});

module.exports = router;
