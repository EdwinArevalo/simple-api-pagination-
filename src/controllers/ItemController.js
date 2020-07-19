const Item = require('../models/Item');

module.exports = {

    getItems: async (req, res) => {
        try {
            //http://localhost:3000/api/items?limit=6&page=5
            const options = {
                limit: parseInt(req.query.limit, 10) || 5,
                page : parseInt(req.query.page, 10) || 1,
                sort: {
                    createdAt: 'desc'
                }
            }
            //const items = await Item.find({}).sort({createdAt: 'desc'});
            const items = await Item.paginate({},options);
            res.json(items);
        } catch(err) {
            console.error(err);
			res.sendStatus(500);
        }
    },

    getItem: async (req, res) => {
        try{
            const {id} = req.params;
            const item = await Item.findOne({_id:id});
            res.json(item);
        } catch(err) {
            console.error(err);
			res.sendStatus(500);
        } 
    },

    newItem: async (req, res)=> {
        try{
            const item = new Item(req.body);
            const itemSaved = await item.save();
            res.json(itemSaved); 
        } catch(err){
            console.error(err);
            res.sendStatus(500);
        }
    },

    updateItem: async (req, res) => {
        try {
            const {_id} = req.body;
            const item = {
                name : req.body.name,
                price : req.body.price, 
            }
            const resp = await Item.updateOne({_id}, item);
            res.json(resp);
        } catch(err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    deleteItem: async (req, res) => {
        try{
            const {id} = req.params;
            const resp = await Item.deleteOne({_id:id}); 
            res.send(resp); 
        } catch(err) {
            console.error(err);
            res.sendStatus(404);
        }
    }
}