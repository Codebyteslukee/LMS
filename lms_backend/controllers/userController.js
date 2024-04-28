const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel');

/*Create A user */
const registerAUser = asyncHandler( async(req, res) => {
    /*Get the email from req.body and find whether a user with this email exist or not */
    const email = req.body.email;
    /*find the user with this email get from req.body */
    const finduser = await User.findOne({ email: email });
    if (!finduser) {
    /*Create a user */
    const createUser = await User.create(req.body);
    res.status(200).json({
        status: true,
        message: "user created successfully!",
        createUser,
    });
    }else {
        throw new Error("User already exists!");
    }
})
// @desc Authenticate a user 
// @route POST /api/users/login
// @access Public

/*login a User */

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    /*Check if User exists or not*/ 
    const finduser = await  User.findOne({email: email });
    if (finduser && (await finduser.ispasswordsMatched(password))) {
        res.status(200).json({
            status: true,
            message: "Logged In Successfully!",
            token: generateToken(finduser?._id),
            role: finduser?.roles,
            username: finduser?.Name,
        });
    }else {
        throw new Error('invalid credentials');
    }
});

//@desc Get user data 
//@route GET /api/users/me
//@access Public

const getMe = asyncHandler( async(req, res) => {
    try{
    const {_id, name, email}= await User.findById(req.user.id)

    res.status(200).json({ status: true, 
    message: "All users Fetched successfully",
    });
} catch (Error) {
    throw new Error(error);
}
});


// Generate JWT

const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',

    })
}


module.exports = {
    registerAUser,
    loginUser,
    getMe,
    // updateUser,

}
