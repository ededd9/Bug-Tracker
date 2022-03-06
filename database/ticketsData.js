const mongoose = require('mongoose');
const database = mongoose.connection;
mongoose.connect("mongodb+srv://edhur9:Edward1721@edward-cluster.ot1jn.mongodb.net/tickets_database?retryWrites=true&w=majority")

database.on('connected', ()=>{
    console.log(`Connected to MongoDB ${database.name} at ${database.host}: ${database.port}`);
})

database.on('error', ()=>{
    console.error.bind(console, 'MongoDB connection error:');
})

module.exports = mongoose;