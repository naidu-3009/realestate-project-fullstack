import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(errorHandler(400, 'User already exists with this email'));
        }

        // Hash the password
        const hashedPassword = bcryptjs.hashSync(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the new user to the database
        await newUser.save();
        res.status(201).json('User created successfully!');
    } catch (error) {
        next(error);
    }
};


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));

        // Check if the password is correct
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));

        // Generate a JWT token
        const token = jwt.sign(
            { id: validUser._id, email: validUser.email }, // Payload
            process.env.JWT_SECRET, // Secret key
            { expiresIn: '1h' } // Token expiration time
        );
        // Convert the validUser document to a plain object and remove the password
        const userWithoutPassword = validUser.toObject();
        delete userWithoutPassword.password;

        // Send the token in a cookie and respond with user data
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json({ success: true, user: userWithoutPassword });
    } catch (error) {
        next(error);
    }
};

