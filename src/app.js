import express from 'express';
import   'dotenv/config.js';
import AuthRouter from './routes/auth.route.js';
import morgan from 'morgan'

export const app=express();

app.use(express.json());
app.use(morgan('dev'));


app.use('/api/auth',AuthRouter);