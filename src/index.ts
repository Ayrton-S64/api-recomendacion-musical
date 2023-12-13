import express from "express";
import dotenv from 'dotenv';
import songRoutes from './routes/song'
import authRoutes from './routes/auth'

const cors = require('cors')

dotenv.config();

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.get('/',(req, res)=>{  console.log("prueba de ruta");
  res.send('hola mundo');
})

app.use('/auth', authRoutes);
// app.use('/songs', songRoutes);

app.use('*',(req,res)=>res.status(404).json({error:"not found"}))

app.listen(3000, ()=>{
  console.log(authRoutes.stack)
  // console.log(app._router.stack)
  console.log('the server is running');
})