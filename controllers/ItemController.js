const Item = require('../models/Item');

module.exports = {

    getItems: async (req, res) => {
        await Item.find({}).sort({createdAt: 'desc'})
            .then(items => {
                res.json(items);
            })
            .catch(err => { 
                console.error(err);
				res.sendStatus(500);
            });
    },

    getItem: async (req, res) => {
        const {id} = req.params;
        await Item.findOne({_id:id})
            .then(item => {
                res.json(item);
            })
            .catch(err => { 
                console.error(err);
				res.sendStatus(500);
            });
    },

    newItem: async (req, res)=> {
        let item = new Item;
        item.name = req.body.name;
        item.price = req.body.price; 
        await item.save()
            .then(data => {
                res.json('Inserted Item');
            })
            .catch(err => { 
                console.error(err);
                res.sendStatus(500);
            });
    },

    updateItem: (req, res) => {
        const id = req.body._id;
        let item = {
            name : req.body.name,
            price : req.body.price, 
        }
        
        Item.updateOne({_id: id}, item)
            .then( data => {
                res.json(data);
            })
            .catch(err => {
                console.error(err);
                res.sendStatus(500);
            } );

    },

    deleteItem: async (req, res) => {
        const id = req.params.id;
        await Item.deleteOne({_id: id})
            .then( data => {
                res.json('Deleted Item');
            })
            .catch(err => {
                console.error(err);
                res.sendStatus(404);
            } );
    }

}