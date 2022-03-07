const Ticket = require('../models/tickets');

const mainpage = (req, res) => {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/mainpage', {
      tickets,
    });
  }).sort({ createdAt: -1 });
};

const mainpage_post_ticket = async (req, res) => {
  let newTicket = new Ticket({
    department: req.body.department,
    subject: req.body.subject,
    severity: req.body.severity,
    description: req.body.description,
  });
  try {
    Ticket = await newTicket.save();
    res.render('tickets/mainpage');
    res.send(Ticket);
  } catch (e) {
    console.log(e);
    res.redirect('/mainpage');
  }
};

const mainpage_get_Ticket = (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Ticket.findById(id)
    .then((result) => {
      res.render('tickets/ticketDetails', { ticket: result });
    })
    .catch((err) => {
      console.log(err);
      console.log('ERROR');
    });
};
const mainpage_ticketDel = async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  console.log(`${req.params.id} was deleted`);
  res.redirect('/mainpage');
};

module.exports = {
  mainpage,
  mainpage_post_ticket,
  mainpage_ticketDel,
  mainpage_get_Ticket,
};
