import express from "express";
const router = express.Router();
import  UserDetails from '../model/userDetails.js';



router.get('/users', async (req, res) => {
  try {
    const users = await UserDetails.find();
    console.log(users)
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});



router.get('/users/:id', async (req, res) => {
  try {
    const user = await UserDetails.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
});



export default router;

