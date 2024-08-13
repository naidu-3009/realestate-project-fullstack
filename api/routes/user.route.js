import express from 'express';
import { test } from '../controllers/user.controller.js'; // Import the test function

const router = express.Router();

// Define a test route to return a message
router.get('/test', test); // Use the imported function as the handler for this route

export default router;
