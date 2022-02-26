import mongoose from "mongoose";
const Schema = mongoose.Schema;

//used to createa  modoel and organice things
const movieSchema = new Schema({
  title: String,
  relaseYear: Number,
  mpaaRating: String,
  cast: [String],
  nowShowing: Boolean
  
},{
  timestamp: true
})

const Movie = mongoose.model('Movie', movieSchema)

export {
  Movie
}