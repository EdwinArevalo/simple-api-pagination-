const mongoose = require('mongoose');

const {DB_URI} = process.env;

mongoose.connect(DB_URI , {useUnifiedTopology: true, useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
    

    