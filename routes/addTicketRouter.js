const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.render('tickets/addTicketScreen', { text : 'testing connection'})
})

module.exports = router;