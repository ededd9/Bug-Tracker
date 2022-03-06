const express = require('express');
const mainpageRouter = require('./routes/mainpage');
const addTicketRouter = require('./routes/addTicketRouter');
const mongooseDB = require('./database/ticketsData');
const bodyParser = require('body-parser');

const methodOverride = require('method-override');
const Ticket = require('./models/tickets');
const app = express();
//register view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/mainpage', mainpageRouter);
app.use('/addTicketScreen', addTicketRouter);

// app.get('/', (req, res) => {
//   res.render('tickets/index');
// });
app.get('/', async (req, res) => {
  const Tickets = await Ticket.find();
  res.render('tickets/index');
});
app.listen('3000', (req, res) => {
  console.log(`Server is running at port 3000`);
});
