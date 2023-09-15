const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 
const env = require('dotenv').config();
const secret = "primopatbojo";

module.exports = ({
    create: (req, res) => {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                req.body.password = hash;
                
                User
                    .create(req.body)
                    .then((newUser) => {
                        const userToken = jwt.sign({
                            id: newUser._id
                        }, process.env.SECRET_KEY);
                
                        res
                            .cookie("usertoken", userToken, { httpOnly: true })
                            .json({ message: "Success on registration!", user: newUser });
                    })
                    .catch((err) => res.status(400).json({ message: "Registration Problem", err }))
            }) 
    },
    
    findAllUsers: (req, res) => {
        User.find()
            .then((allUsers) => res.json(allUsers))
            .catch((err) => res.status(400).json({message: "Something went wrong during find", error: err}))
    }, 

    findOne: (req, res) => {
        console.log(req.body.loginEmail);

        if(!req.body.loginEmail) {
            return res.status(400).json({ message: "Invalid login" });
        }
        
        User.findOne({ email:req.body.loginEmail })
            .then(async oneUser => {

                if (!oneUser) {
                    return res.status(400).json({ message: "Email not found!" });
                }

                const correctPassword = await bcrypt.compare(req.body.loginPw, oneUser.password)
            
                if (!correctPassword) {
                    return res.status(400).json({ message: "Invalid login" });
                }
            
                const userToken = jwt.sign({
                    id: oneUser._id
                }, process.env.SECRET_KEY);
                
                let user = {};
                user._id = oneUser._id;
                user.fname = oneUser.fname;
                user.lname = oneUser.lname;
                user.email = oneUser.email;
            
                res.cookie("userToken", userToken, {httpOnly: true}).json({message: "Success"});
            })
            .catch((err) => res.status(400).json({message: "Something went wrong during find", error: err}))
    }, 

    logout: (req, res) => {
        res.clearCookie("userToken");
        res.json({ message: "logged out" });
    }, 
   
    deleteUsers: (req, res) => {
        User.deleteMany({})
            .then((deletedUsers) => res.json(deletedUsers))
            .catch((err) => res.status(400).json({message: "Something went wrong during delete", error: err}))
    },

    authCheck: (req, res) => {
        res.json({ message: "checked" });
    }

}); 