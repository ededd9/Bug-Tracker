import { Movie } from './../models/tickets.js'


function newMovie(req,res){
  res.render('movies/new')
}

function keys(req, res) {

  req.body.nowShowing = !!req.body.nowShowing

  if (req.body.cast) {
    req.body.cast = req.body.cast.split(', ')
  }
  const movie = new Movie(req.body)
  movie.save(function(err) {
		if (err) return res.redirect('/movies/new')

    res.redirect('/movies/new')
  })
}


function index(req,res){
  Movie.find({}, function(error,movies){
    res.render('movies/index',{
        movies,
    error
    })
  })
}




export{
  newMovie as new,
  keys as create,
  index,
}