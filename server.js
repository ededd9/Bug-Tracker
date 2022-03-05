const express = require('express');
const mainpageRouter = require('./routes/mainpage');
const addTicketRouter = require('./routes/addTicketRouter');
const mongooseDB = require('./database/ticketsData');
const Ticket = require('./models/tickets');
const methodOverride = require('method-override');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use('/mainpage', mainpageRouter);
app.use('/addTicketScreen', addTicketRouter);

app.get('/', (req, res) => {
  res.render('tickets/index');
});

app.get('/mainpage', (req, res) => {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/mainpage', {
      ticketsList: tickets,
    });
  });
});

app.listen('3000', (req, res) => {
  console.log(`Server is running at port 3000`);
});
