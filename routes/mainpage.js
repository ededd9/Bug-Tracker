const express = require('express');
const router = express.Router();
// const Ticket = require('./models/tickets')

router.get('/', (req,res) =>{
    res.render('tickets/mainpage')
})

module.exports = router;