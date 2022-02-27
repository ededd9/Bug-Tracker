import mongoose from "mongoose";
const Schema = mongoose.Schema;

//used to createa  modoel and organice things
const ticketSchema = new Schema({
  description: String,
  severity: String,
  assignedTo: String, 
},{
  timestamp: true
})

const Ticket = mongoose.model('Ticket', ticketSchema)

export {
  Ticket
}