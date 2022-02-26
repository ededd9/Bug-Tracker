import mongoose from 'mongoose';
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.on('connected', () =>{
    console.log(`Connected to MongoDB ${database.name} at ${database.host}:${database.port}`);
})