import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import userRoutes from './routes/userDetailsRoute.js'
import mongoose from 'mongoose'
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URI, {
  
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


app.use('/api', userRoutes);




app.listen(PORT, ()=>{
    console.log(`Server start from port ${PORT}`)
})