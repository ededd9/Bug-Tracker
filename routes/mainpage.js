const express = require('express');
const Ticket = require('../models/tickets');
const router = express.Router();
const mainpageCtrl = require('../controllers/ticketCtrl');
router.use(express.urlencoded({ extended: true }));

router.get('/', mainpageCtrl.mainpage);
router.get('/newTicket', (req, res) => {
  res.render('tickets/newTicket');
});
router.get('/editTicket/:id', mainpageCtrl.edit);
router.post('/', mainpageCtrl.create);
router.get('/:id', mainpageCtrl.mainpage_get_Ticket);
router.delete('/:id', mainpageCtrl.deleteTicket);
router.put('/:id', mainpageCtrl.update);

module.exports = router;
