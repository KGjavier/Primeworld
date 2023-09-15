const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Firstname is required."]
    },

    lname: {
        type: String,
        required: [true, "Lastname is required."]
    },
    
    email: {
        type: String,
        required: [true, "Email is required."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },

    password: {
        type: String,
        required: [true, "Password is required."],
        minLength: [8, "Password must be 8 characters or longer."]
    }
}, { timestamps: true }) 



module.exports = mongoose.model("User", UserSchema); 