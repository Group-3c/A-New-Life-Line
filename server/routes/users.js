const express = require('express');
const router = express.Router();

let User = require('../models/users');

router.get('/register', function(req, res){
    res.send({type: 'register'});
});

router.get('/login', function(req, res){
    res.send({type: 'login'});
});

router.post('/register', function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    let newUser = new User({
        name:name,
        email:email,
        username:username,
        password:password
    });

    newUser.save(function(err){
        if(err){
          console.log(err);
          return;
        } else {
          res.redirect('/users/login');
        }
    });
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
                res.send({message: 'REEEEEE'});
            }
        }
        
      });
});

module.exports = router;