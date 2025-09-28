import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import User from './models/user.model.js';

const app = express();
dotenv.config(); 
app.use(cors());
app.use(cors());
app.use(express.json());


console.log("Connecting with URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
  
app.get('/api/',(req,res)=>{
    res.json({"backend":"backend is running"})
})

app.post('/api/user', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key error
      res.status(400).json({ message: 'Username or email already exists' });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});


app.get('/api/getUser',async(req,res)=>{
  const users =await User.find();
  console.log("my Users:",users);
  res.status(201).json(users);
})



app.listen(process.env.PORT,()=>console.log(`backend is running on port ${process.env.PORT}`))