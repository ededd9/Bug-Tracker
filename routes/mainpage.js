const express = require('express');
const Ticket = require('../models/tickets');
const router = express.Router();


//render mainpage with each ticket from mongoDb
router.get('/', (req, res) => {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/mainpage', {
      tickets,
    });
  });
});
//create new ticket function
router.post('/', async function (req, res) {
  //defining Tickets properties
  let newTicket = new Ticket({
    department: req.body.department,
    subject: req.body.subject,
    severity: req.body.severity,
    description: req.body.description,
  });
  try {
    Ticket = await newTicket.save();
    res.render('tickets/mainpage');
  } catch (e) {
    console.log(e);
    res.redirect('/mainpage');
  }
});

module.exports = router;
