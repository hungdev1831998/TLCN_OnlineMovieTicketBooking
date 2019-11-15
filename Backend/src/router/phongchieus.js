const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const mongoose = require('mongoose');

require("../model/PhongChieu");
const PhongChieu = mongoose.model("PhongChieu");

router.get('/', function(req, res) {
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

router.get('/getphong', (req, res)  => {
    PhongChieu.find().then((phongs) => {
        return res.json(phongs);
    }).catch((err) => {
        if(err) {
            throw err;
        }
    });
});



router.post('/addphongchieu', (req, res) => {
    if(req.body.TenPhong && req.body.TongSoGhe)  {
        var newPhong = {
            TenPhong: req.body.TenPhong,
            TongSoGhe: req.body.TongSoGhe,
        };
        var phongchieu = new PhongChieu(newPhong);
        phongchieu.save().then(() => {
            console.log("New room created!");
            return res.json({"mess": "New room created!"});
        }).catch((err) => {
            if(err) {
                throw err;
            }
        });
    }  else {
        res.json({"mess": "nhap so lieu"});
    }
});

module.exports = router;
