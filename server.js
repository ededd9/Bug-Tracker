import "dotenv/config.js"
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import('./database/mongooseDatabase.js')

//import routers
import { router as indexRouter } from './routes/routersOfIndex.js'
import { router as  mainpageRouter } from './routes/routersOfMainpage.js'
const app = express();


// view engine setup
app.set(
    'views',
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
  )
  app.set('view engine', 'ejs')

// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
app.get('/mainpageFront', (req,res) =>{
    res.send('main')
})
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404))
//   })
  
app.listen(3000 , ()=>{
    console.log('app is listening on port ' + 3000);
})


app.use('/login', indexRouter)
app.use('tickets/mainpageFront', mainpageRouter)
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
  
    // render the error page
    res.status(err.status || 500)
    res.render('Error')
  })
  
  export {
    app
  }
  