const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  department: String,
  subject: String,
  severity: String,
  description: String,
});

module.exports = mongoose.model('Ticket', ticketSchema);
