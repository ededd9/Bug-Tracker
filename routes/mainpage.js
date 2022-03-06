import { Router } from 'express'
import * as ticketCtrl from '../controller/tickets.js'
const router = Router();
// const Ticket = require('./models/tickets')

router.get('/',ticketCtrl.index)
router.get('/addnewticket',ticketCtrl.new)
router.post('/newindex',ticketCtrl.create)

export{
    router
}
