const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');

require("../model/Ghe");
const Ghe = mongoose.model("Ghe");

router.get('/', function (req, res) {
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

router.post('/addghe', (req, res) => {
    if (req.body.TenPhong && req.body.TenGhe) {
        var newGhe = {
            TenPhong: req.body.TenPhong,
            TenGhe: req.body.TenGhe,
        };
        var ghe = new Ghe(newGhe);
        ghe.save().then(() => {
            console.log("Them ghe thanh cong!");
            return res.json({ "mess": "Them ghe thanh cong!" });
        }).catch((err) => {
            if (err) {
                throw err;
            }
        });
    } else {
        res.json({ "mess": "nhap so lieu" });
    }
});

router.post('/getGhebyPhong', (req, res) => {
    Ghe.find({ $or: [{ 'TenPhong': req.body.TenPhong }] }, 'TenGhe').then((ghes) => {
        return res.json(ghes);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

router.get('/getGhes', (req, res) => {
    Ghe.find().then((ghes) => {
        return res.json(ghes);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

module.exports = router;