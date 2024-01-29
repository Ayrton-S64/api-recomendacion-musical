import express from "express";
import dotenv from 'dotenv';
import artistRoutes from './routes/artist'
import songRoutes from './routes/song'
import albumRoutes from './routes/album'
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
app.use('/songs', songRoutes);
app.use('/albums', albumRoutes);  
app.use('/artists', artistRoutes);  

app.use('*',(req,res)=>res.status(404).json({error:"not found"}))

app.listen(3000, ()=>{
  console.log(artistRoutes.stack)
  console.log('the server is running');
})