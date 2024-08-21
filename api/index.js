import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

const app = express();
app.use(cookieParser());

// Middleware to parse JSON
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(err);
    });

    app.use('/api/user', userRouter);
    app.use('/api/auth', authRouter);
// Start the server



app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });