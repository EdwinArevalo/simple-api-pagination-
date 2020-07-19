const express = require('express');
const router = express.Router();

const controller = require('../controllers/ItemController');

router.get('/items', (req, res) => {
    controller.getItems(req, res);
})
.get('/item/:id', (req, res) => {
    controller.getItem(req, res);
})
.post('/items', (req, res) => {
    controller.newItem(req, res);
})
.put('/items', function(req, res) {
	controller.updateItem(req, res);
})
.delete('/items/:id', function(req, res) {
	controller.deleteItem(req, res);
}); 

module.exports = router;
