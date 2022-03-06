import { Router } from 'express'
const router = Router();

// router.get('/', (req, res) => {
//   res.render('tickets/newindex');
// });
// router.post('/', async function (req, res) {
//   let newTicket = new Ticket({
//     department: req.body.department,
//     subject: req.body.subject,
//     severity: req.body.severity,
//     description: req.body.description,
//   });
//   try {
//     newTicket.save();
//     res.redirect('/');
//   } catch (e) {
//     console.log(e);
//   }
// });

export{
  router
}
