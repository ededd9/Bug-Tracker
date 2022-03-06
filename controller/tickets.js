import {Ticket} from '../models/tickets.js';


function index(req, res) {
  Ticket.find({},function(error, tickets) {
    res.render('tickets/newindex',{
      tickets,
      title:"hello edward biofg cosk"
    })
  })
}
function ticketNew(req, res) {
  res.render('tickets/addnewticket')
}
function create(req, res) {
  const ticket =new Ticket(req.body)
  ticket.save((error)=>{
    if(error) return res.redirect('/tickets/newindex')
    res.redirect('/tickets')
  })
}


// app.get('/mainpage', (req, res) => {
//   Ticket.find({}, function (error,tickets) {
//     res.render('tickets/index', {
//       title:'edwards but cheeks'
//       tickets,
//     });
//   });
// });

// import {Ticket}  from '../models/tickets'


// function index(req, res) {
//   Ticket.find({}, function(error, tickets) {
//     res.render('tickets/mainpage',{
//       tickets,
//     })
//   })
// }

export{
  index,
  ticketNew as new,
  create
}