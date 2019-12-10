const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

let User = require('../models/users');

//test functions
router.get('/register', function(req, res){
    res.send({type: 'register'});
});

router.get('/login', function(req, res){
    res.send({type: 'login'});
});

//returns list of users for admin profile page
router.get('/list', function(req, res){
    User.find({}, function(err, users) {
        var userArray = [];

        users.forEach(function(user) {
          userArray.push(user);
        });
    
        res.send(userArray);  
      });
});

//registers the user
router.post('/register', async function(req, res){

    //checks if email is valid
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //checks if password satisfies conditions (listed later)
    function validatePassword(password) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
        return re.test(password);
    }

    var add = true;

    var errors =[];

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const permission = "user";

    //self explanatory error codes
    if (name === '')
    {
        add = false;
        errors.push("Name must not be empty");
    }

    if (username === '')
    {
        add = false;
        errors.push("Userame must not be empty");
    }

    let query = {username:username};
    await User.findOne(query, function(err, user){
        if (user) {
            add = false;
            errors.push("Username already exists");
        }
    });

    if (!validateEmail(email)) {
        add = false;
        errors.push("Not a valid email");
    }

    let query2 = {email:email};
    await User.findOne(query2, function(err, email){
        if (email) {
            add = false;
            errors.push("An account with that email already exists");
        }
    });

    if (!validatePassword(password)) {
        add = false;
        errors.push("Password must be 6 - 20 characters and contain at least:\n -one lowercase letter\n -one uppercase letter\n -one numeric digit\n -one special character\n");
    }

    if (password !== confirmPassword) {
        add = false;
        errors.push("Passwords do not match");
    }

    //waits for all validation before creating user
    await setTimeout(() => {
        if(add) {
            let newUser = new User({
                name:name,
                email:email,
                username:username,
                password:password,
                permission:permission
            });
        
            newUser.save(function(err){
                if(err){
                  console.log(err);
                  return;
                }
            });
            res.send('Added');
        } else {
            res.send(errors);
        }        
    }, 500);
    
});

//logging the user in
router.post('/login', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let query = {username:username};
    let token = '';

    //self explanatory verification
    User.findOne(query, function(err, user){
        if(err) throw err;
        if(!user){
            res.send({message: 'No user found'});
        } else {
            if (password === user.password){
                //keeps user logegd in for 1 hour
                token = jwt.sign({user:user}, "SECRET", {expiresIn: "1h"});
                res.send({message: 'Login', token: token});
            } else {
                res.send({message: 'Incorrect Password'});
            }
        }
        
      });
});

//admin can change user permissions
router.post('/permission', async function(req,res){
    const username = req.body.username;
    const currPerm = req.body.permission;

    let query = {username:username};

    //switches the user permissions
    if (currPerm === 'user') {
        let updateUser = await User.findOneAndUpdate(query, {permission : 'mentor'}, {new: true, upsert: true});
        res.send({message: 'mentor'});
    } else {
        let updateUser = await User.findOneAndUpdate(query, {permission : 'user'}, {new: true, upsert: true});
        res.send({message: 'user'});
    }
});


module.exports = router;