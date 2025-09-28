import User from './models/user.model.js';
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