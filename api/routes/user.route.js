import express from 'express';
import { test, updateUser,deleteUser,getUserListings,getUser } from '../controllers/user.controller.js'; // Import the test function
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// Define a test route to return a message
router.get('/test', test); // Use the imported function as the handler for this route
router.get('/listings/:id', verifyToken,getUserListings); // Use the imported function as the handler for this route
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/:id',verifyToken,getUser)

export default router;
