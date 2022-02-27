import { Ticket } from './../models/tickets.js'


function newTicket(req,res){
  res.render('tickets/mainpageFront')
}

function keys(req, res) {

    // res.render('tickets/mainpageFront')
  req.body.nowShowing = !!req.body.nowShowing

  if (req.body.cast) {
    req.body.cast = req.body.cast.split(', ')
  }
  const ticket = new Ticket(req.body)
  ticket.save(function(err) {
		if (err) return res.redirect('/tickets')

    res.redirect('/tickets')
  })
}


function index(req,res){
  Ticket.find({}, function(error,tickets){
    res.render('tickets/mainpageFront',{
        tickets,
    error
    })
  })
}




export{
  newTicket as new,
  keys as create,
  index,
}