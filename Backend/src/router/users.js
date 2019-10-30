const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const mongoose = require('mongoose');

require("../model/User");
const User = mongoose.model("User");

 requiresLogin = (req, res, next) => {
    if (req.session && req.session.userId) {
      return next();
    } else {
      res.send('You must be logged in to view this page.');
    }
  }

router.get('/', (req, res) => {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

router.post('/register', (req, res) => {
    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {
        if(req.body.password === req.body.passwordConf) {
            User.find({$or: [{"email": req.body.email}, {"username": req.body.username}]}).then((user) => {
                if(user.length > 0) {
                    return res.json({"message": "User exist!"});
                } else {
                    var userData = {
                        email: req.body.email,
                        username: req.body.username,
                        password: req.body.password
                    }
                    var user = new User(userData);
                    user.save().then(() => {
                        console.log("New account created!");
                        return res.json({"message": "New account created!"});
                    }).catch((err) => {
                        if(err) {
                            throw err;
                        }
                    });
                }
            }).catch((err) => {
                if(err) {
                    throw err;
                }
            });
        }
    } else {
        res.send("passwords dont match");
    }
});

router.post('/login', (req, res, next) => {
    if (req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, (error, user) => {
            if (error || !user) {
              var err = new Error('Wrong email or password.');
              err.status = 401;
              return next(err);
            } else {
              req.session.userId = user._id;
              res.json({"message": "login success!"});
            }

        });
    }
});

router.get('/alluser', (req, res)  => {
    User.find({}).then((users) => {
        res.json(users);
    }).catch((err) => {
        if(err) {
            throw err;
        }
    });
});

router.get('/user', requiresLogin, (req, res) => {
    User.findById(req.session.userId).then((user) => {
        if(user) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }

    }).catch((err) => {
        if(err) {
            throw err;
        }
    });
});

router.get('/logout', (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy((err) => {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/user');
      }
    });
  }
});

module.exports = router;