import { Router } from 'express'
import *  as moviesCtrl from '../controller/tickets.js'
const router = Router()

/* GET users listing. */
router.get('/', moviesCtrl.index)
router.get('/new', moviesCtrl.new)
router.post('/', moviesCtrl.create)


export {
  router
}