import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';

const app = express();
dotenv.config(); 
app.use(cors());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
  
app.get('/api/',(req,res)=>{
    res.json({"backend":"backend is running"})
})



app.listen(process.env.PORT,()=>console.log(`backend is running on port ${process.env.PORT}`))