const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const crypto = require("crypto");

let userSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique:true,
        index: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    roles: {
        type: String,
        default: "user",
    },
    profession: { type: String, required: true },
    isblocked: {
        type: Boolean,
        default: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passswordResetExpires: Date,
    stripe_account_id: String,
    stripe_seller: {},
    stripeSession: {},
},
{
    timestamps:true,
}
);
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.isPasswordMatched = async function (enteredpassword) {
    return await bcrypt.compare(enteredpassword,this.password);
};

userSchema.methods.createPasswordResetToken = async function() {
    const resettoken=crypto.randomBytes(32).toString("hex");
    this.passswordResetExpires=crypto
        .createHash("sha256")
        .update(resettoken)
        .digest("hex");
    this.passswordResetExpires=Date.now() + 38 *68*1000;// 10 minutes
    return resettoken;
}
module.exports = mongoose.model('User', userSchema)