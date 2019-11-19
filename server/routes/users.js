const express = require('express');
const router = express.Router();

let User = require('../models/users');

router.get('/register', function(req, res){
    res.send({type: 'register'});
});

router.get('/login', function(req, res){
    res.send({type: 'login'});
});

router.post('/register', async function(req, res){
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
        return re.test(password);
    }

    var add = true;

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const permission = "user";

    let query = {username:username};
    await User.findOne(query, function(err, user){
        if (user) {
            add = false;
            res.write("Username already exists\n");
        }
    });

    if (!validateEmail(email)) {
        add = false;
        res.write("Not a valid email\n");
    }

    let query2 = {email:email};
    await User.findOne(query2, function(err, email){
        if (email) {
            add = false;
            res.write("An account with that email already exists\n");
        }
    });

    if (!validatePassword(password)) {
        add = false;
        res.write("Pass word must be 6 - 20 characters and contain at least:\n -one lowercase letter\n -one uppercase letter\n -one numeric digit\n -one special character\n");
    }

    if (password !== confirmPassword) {
        add = false;
        res.write("Passwords do not match\n");
    }

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
                } else {
                  res.redirect('/users/login');
                }
            });
        } else {
            res.write("Not added");
            res.end();
        }        
    }, 500);
    
});

router.post('/login', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let query = {username:username};
    User.findOne(query, function(err, user){
        if(err) throw err;
        if(!user){
            res.send({message: 'No user found'});
        } else {
            if (password === user.password){
                res.send({message: 'Login'});
            } else {
                res.send({message: 'Incorrect Password'});
            }
        }
        
      });
});

module.exports = router;