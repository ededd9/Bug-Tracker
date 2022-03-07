const { render } = require('ejs');
const express = require('express');
const Ticket = require('../models/tickets');
const router = express.Router();
const mainpageController = require('../controllers/mainTicketController');
router.use(express.urlencoded({ extended: true }));
//render mainpage with each ticket from mongoDb
router.get('/', mainpageController.mainpage);
router.post('/', mainpageController.mainpage_post_ticket);

//create new ticket function
router.get('/:id', mainpageController.mainpage_get_Ticket);

router.delete('/:id', mainpageController.mainpage_ticketDel);

module.exports = router;
