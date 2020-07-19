if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express'); 
const logger = require('morgan');
const cors = require('cors');
require('./db');

const itemRouter = require('./routes/item');

const app = express();

app.use(cors())
.use(logger('dev'))
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use('/api/', itemRouter)

.set('port', process.env.PORT || 3000)

.get('/', (req, res) => {
    res.send('API for items');
} )
.use( (req, res, next) => {
    res.status(404).send('Sorry cant find that!');
})

.listen(app.get('port'), () => {
    console.log('API on port '+app.get('port'));
});