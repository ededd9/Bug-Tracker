import { Router } from 'express'
import *  as ticketsCtrl from '../controller/tickets.js'
const router = Router()

/* GET users listing. */
router.get('/', ticketsCtrl.index)
router.post('/', ticketsCtrl.index)


export {
  router
}