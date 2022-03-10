const Ticket = require('../models/tickets');

const mainpage = (req, res) => {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/mainpage', {
      tickets,
    });
  }).sort({ createdAt: -1 });
};
const create = async (req, res) => {
  let newTicket = new Ticket({
    department: req.body.department,
    subject: req.body.subject,
    severity: req.body.severity,
    description: req.body.description,
  });
  try {
    Ticket = await newTicket.save();
    res.redirect('/mainpage');
  } catch (e) {
    console.log(e);
    res.redirect('/mainpage');
  }
};
const mainpage_get_Ticket = (req, res) => {
  const id = req.params.id;
  Ticket.findById(id)
    .then((result) => {
      res.render('tickets/ticketDetails', { ticket: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteTicket = async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.redirect('/mainpage');
};

const update = (req, res) => {
  Ticket.findByIdAndUpdate(req.params.id, req.body, function (err, ticket) {
    res.redirect('/mainpage');
  });
};

const edit = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  res.render('tickets/editTicket', { ticket: ticket });
};

module.exports = {
  mainpage,
  create,
  deleteTicket,
  mainpage_get_Ticket,
  update,
  edit,
};
