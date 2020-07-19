const { Router } = require('express');
const router = Router();

const controller = require('../controllers/ItemController');

router.get('/items', async (req, res) => {
    await controller.getItems(req, res);
})
.get('/items/:id', async (req, res) => {
    await controller.getItem(req, res);
})
.post('/items', async (req, res) => {
    await controller.newItem(req, res);
})
.put('/items',  async (req, res) => {
	await controller.updateItem(req, res);
})
.delete('/items/:id',  async (req, res) => {
	await controller.deleteItem(req, res);
}); 

module.exports = router;
