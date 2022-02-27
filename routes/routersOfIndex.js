import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('tickets/indexFront', { title: 'Express' })
})

export { 
  router
}