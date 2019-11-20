const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');

require("../model/LichChieu");
const LichChieu = mongoose.model("LichChieu");

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

router.post('/addlichchieu', (req, res) => {
    if (req.body.TenFilm && req.body.TenPhong && req.body.ThoiGianChieu) {
        var newLich = {
            TenFilm: req.body.TenFilm,
            TenPhong: req.body.TenPhong,
            ThoiGianChieu: req.body.ThoiGianChieu,
        };
        var lichchieu = new LichChieu(newLich);
        lichchieu.save().then(() => {
            console.log("New schedule created!");
            return res.json({ "mess": "New schedule created!" });
        }).catch((err) => {
            if (err) {
                throw err;
            }
        });
    } else {
        res.json({ "mess": "nhap so lieu" });
    }
});

router.post('/getlichbytenfilm', (req, res) => {
    LichChieu.find({ $or: [{ 'TenFilm': req.body.TenFilm }] }).then((lichs) => {
        return res.json(lichs);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

router.get('/getlich', (req, res) => {
    LichChieu.find().then((lichs) => {
        return res.json(lichs);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

module.exports = router;