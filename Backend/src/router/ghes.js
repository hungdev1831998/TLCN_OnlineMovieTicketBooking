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


// router.get('/add', (req, res) => {
//     var a = [
//         {TenPhong: '1', TenGhe: 'A1'},
//         {TenPhong: '1', TenGhe: 'A2'},
//         {TenPhong: '1', TenGhe: 'A3'},
//         {TenPhong: '1', TenGhe: 'A4'},
//         {TenPhong: '1', TenGhe: 'A5'}, 
//         {TenPhong: '1', TenGhe: 'A6'}, 
//         {TenPhong: '1', TenGhe: 'A7'}, 
//         {TenPhong: '1', TenGhe: 'A8'}, 
//         {TenPhong: '1', TenGhe: 'A9'}, 
//         {TenPhong: '1', TenGhe: 'A10'}, 
//         {TenPhong: '1', TenGhe: 'A11'}, 
//         {TenPhong: '1', TenGhe: 'A12'}, 
//         {TenPhong: '1', TenGhe: 'B1'}, 
//         {TenPhong: '1', TenGhe: 'B2'}, 
//         {TenPhong: '1', TenGhe: 'B3'},
//         {TenPhong: '1', TenGhe: 'B4'},
//         {TenPhong: '1', TenGhe: 'B5'},
//         {TenPhong: '1', TenGhe: 'B6'},
//         {TenPhong: '1', TenGhe: 'B7'},
//         {TenPhong: '1', TenGhe: 'B8'},
//         {TenPhong: '1', TenGhe: 'B9'},
//         {TenPhong: '1', TenGhe: 'B10'},
//         {TenPhong: '1', TenGhe: 'B11'},
//         {TenPhong: '1', TenGhe: 'B12'},
//         {TenPhong: '1', TenGhe: 'C1'},
//         {TenPhong: '1', TenGhe: 'C2'},
//         {TenPhong: '1', TenGhe: 'C3'},
//         {TenPhong: '1', TenGhe: 'C4'},
//         {TenPhong: '1', TenGhe: 'C5'},
//         {TenPhong: '1', TenGhe: 'C6'},
//         {TenPhong: '1', TenGhe: 'C7'},
//         {TenPhong: '1', TenGhe: 'C8'},
//         {TenPhong: '1', TenGhe: 'C9'},
//         {TenPhong: '1', TenGhe: 'C10'},
//         {TenPhong: '1', TenGhe: 'C11'},
//         {TenPhong: '1', TenGhe: 'C12'},
//         {TenPhong: '1', TenGhe: 'D1'},
//         {TenPhong: '1', TenGhe: 'D2'},
//         {TenPhong: '1', TenGhe: 'D3'},
//         {TenPhong: '1', TenGhe: 'D4'},
//         {TenPhong: '1', TenGhe: 'D5'},
//         {TenPhong: '1', TenGhe: 'D6'},
//         {TenPhong: '1', TenGhe: 'D7'},
//         {TenPhong: '1', TenGhe: 'D8'},
//         {TenPhong: '1', TenGhe: 'D9'},
//         {TenPhong: '1', TenGhe: 'D10'},
//         {TenPhong: '1', TenGhe: 'D11'},
//         {TenPhong: '1', TenGhe: 'D12'},
//         {TenPhong: '1', TenGhe: 'E1'},
//         {TenPhong: '1', TenGhe: 'E2'},
//         {TenPhong: '1', TenGhe: 'E3'},
//         {TenPhong: '1', TenGhe: 'E4'},
//         {TenPhong: '1', TenGhe: 'E5'},
//         {TenPhong: '1', TenGhe: 'E6'},
//         {TenPhong: '1', TenGhe: 'E7'},
//         {TenPhong: '1', TenGhe: 'E8'},
//         {TenPhong: '1', TenGhe: 'E9'},
//         {TenPhong: '1', TenGhe: 'E10'},
//         {TenPhong: '1', TenGhe: 'E11'},
//         {TenPhong: '1', TenGhe: 'E12'}]
//     Ghe.insertMany(a, (err) => {
//         if(err) {
//             throw err;
//         } else {
//             res.json({mess: 'add success!'});
//         }
//     })
// });

router.post('/getGhebyPhong', (req, res) => {
    Ghe.find({ $or: [{ 'TenPhong': req.body.TenPhong }] }, 'TenGhe status').then((ghes) => {
        return res.json(ghes);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

router.put('/updatestatus', (req, res) => {
    
    Ghe.updateMany(
        {$and: [{'TenPhong': req.body.TenPhong}, {'TenGhe': req.body.TenGhe}]},
        {$set: {'status': req.body.status}}, 
        (err) => {
            if(err) {
                throw err;
            } else {
                res.json({mess: 'update success!'});
            }

        }
    )
})

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