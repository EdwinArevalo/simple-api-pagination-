const {Schema , model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
 
const ItemSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}, 
}, {
    timestamps: true,
    versionKey: false
});

ItemSchema.plugin(mongoosePaginate);

module.exports = model('Item', ItemSchema);