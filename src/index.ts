import express from "express";
import songRoutes from './routes/song'
import authRoutes from './routes/auth'

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/songs', songRoutes);

export default app;