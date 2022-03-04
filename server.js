const express = require('express');
const mainpageRouter = require('./routes/mainpage')
const mongooseDB = require('./database/ticketsData')
const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/mainpage', mainpageRouter)

app.get('/', (req,res) =>{
    res.render('tickets/index')
})

app.listen('3000', (req,res) =>{
    console.log(`Server is running at port 3000`);
})