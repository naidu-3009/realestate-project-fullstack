import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'; // Correctly import the userRouter
import authRouter from './routes/auth.route.js'; // Correct import
dotenv.config();

const app = express();

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

// Use the user routes under the /api/user path
app.use("/api/user", userRouter); // Mount the user routes under /api/user
app.use("/api/auth",authRouter);
// Start the server
app.listen(3000, () => {
    console.log("Server is running at port 3000!");
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