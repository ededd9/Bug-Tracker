import "dotenv/config.js"
import express from 'express'
import methodOverride from 'method-override'
import {Ticket}  from './models/tickets.js'
import('./database/ticketsData.js')

import { router as mainpageRouter } from './routes/mainpage.js'
import { router as addTicketRouter } from './routes/addTicketRouter.js'
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use('/newindex', mainpageRouter);
app.use('/addTicketScreen', addTicketRouter);

// app.get('/', (req, res) => {
//   res.render('tickets/index');
// });

// app.get('/mainpage', (req, res) => {
//   Ticket.find({}, function (error,tickets) {
//     res.render('tickets/index', {
//       title:'edwards but cheeks'
//       tickets,
//     });
//   });
// });

app.listen('3000', (req, res) => {
  console.log(`Server is running at port 3000`);
});
