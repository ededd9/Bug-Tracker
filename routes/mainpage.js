const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.render('tickets/mainpage', { text : 'ticket, severity, description'})
})

module.exports = router;