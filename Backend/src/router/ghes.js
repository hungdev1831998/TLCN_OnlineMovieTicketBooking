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

router.delete('/delete', (req, res) => {
    Ghe.deleteMany({'TenPhong': req.body.TenPhong}, (err)=> {
        if(err)
            throw err;
        res.json({mess: "delete success!"});
    });
});

router.get('/add', (req, res) => {
    // var a = [
    //     {TenPhong: '7', TenGhe: 'A1'},
    //     {TenPhong: '7', TenGhe: 'A2'},
    //     {TenPhong: '7', TenGhe: 'A3'},
    //     {TenPhong: '7', TenGhe: 'A4'},
    //     {TenPhong: '7', TenGhe: 'A5'}, 
    //     {TenPhong: '7', TenGhe: 'A6'}, 
    //     {TenPhong: '7', TenGhe: 'A7'}, 
    //     {TenPhong: '7', TenGhe: 'A8'}, 
    //     {TenPhong: '7', TenGhe: 'A9'}, 
    //     {TenPhong: '7', TenGhe: 'A10'}, 
    //     {TenPhong: '7', TenGhe: 'A11'}, 
    //     {TenPhong: '7', TenGhe: 'A12'}, 
    //     {TenPhong: '7', TenGhe: 'B1'}, 
    //     {TenPhong: '7', TenGhe: 'B2'}, 
    //     {TenPhong: '7', TenGhe: 'B3'},
    //     {TenPhong: '7', TenGhe: 'B4'},
    //     {TenPhong: '7', TenGhe: 'B5'},
    //     {TenPhong: '7', TenGhe: 'B6'},
    //     {TenPhong: '7', TenGhe: 'B7'},
    //     {TenPhong: '7', TenGhe: 'B8'},
    //     {TenPhong: '7', TenGhe: 'B9'},
    //     {TenPhong: '7', TenGhe: 'B10'},
    //     {TenPhong: '7', TenGhe: 'B11'},
    //     {TenPhong: '7', TenGhe: 'B12'},
    //     {TenPhong: '7', TenGhe: 'C1'},
    //     {TenPhong: '7', TenGhe: 'C2'},
    //     {TenPhong: '7', TenGhe: 'C3'},
    //     {TenPhong: '7', TenGhe: 'C4'},
    //     {TenPhong: '7', TenGhe: 'C5'},
    //     {TenPhong: '7', TenGhe: 'C6'},
    //     {TenPhong: '7', TenGhe: 'C7'},
    //     {TenPhong: '7', TenGhe: 'C8'},
    //     {TenPhong: '7', TenGhe: 'C9'},
    //     {TenPhong: '7', TenGhe: 'C10'},
    //     {TenPhong: '7', TenGhe: 'C11'},
    //     {TenPhong: '7', TenGhe: 'C12'},
    //     {TenPhong: '7', TenGhe: 'D1'},
    //     {TenPhong: '7', TenGhe: 'D2'},
    //     {TenPhong: '7', TenGhe: 'D3'},
    //     {TenPhong: '7', TenGhe: 'D4'},
    //     {TenPhong: '7', TenGhe: 'D5'},
    //     {TenPhong: '7', TenGhe: 'D6'},
    //     {TenPhong: '7', TenGhe: 'D7'},
    //     {TenPhong: '7', TenGhe: 'D8'},
    //     {TenPhong: '7', TenGhe: 'D9'},
    //     {TenPhong: '7', TenGhe: 'D10'},
    //     {TenPhong: '7', TenGhe: 'D11'},
    //     {TenPhong: '7', TenGhe: 'D12'},
    //     {TenPhong: '7', TenGhe: 'E1'},
    //     {TenPhong: '7', TenGhe: 'E2'},
    //     {TenPhong: '7', TenGhe: 'E3'},
    //     {TenPhong: '7', TenGhe: 'E4'},
    //     {TenPhong: '7', TenGhe: 'E5'},
    //     {TenPhong: '7', TenGhe: 'E6'},
    //     {TenPhong: '7', TenGhe: 'E7'},
    //     {TenPhong: '7', TenGhe: 'E8'},
    //     {TenPhong: '7', TenGhe: 'E9'},
    //     {TenPhong: '7', TenGhe: 'E10'},
    //     {TenPhong: '7', TenGhe: 'E11'},
    //     {TenPhong: '7', TenGhe: 'E12'}]
    // var a = [
    //     {TenPhong: '7', TenGhe: 'L1'},
    //     {TenPhong: '7', TenGhe: 'L2'},
    //     {TenPhong: '7', TenGhe: 'L3'},
    //     {TenPhong: '7', TenGhe: 'L4'},
    //     {TenPhong: '7', TenGhe: 'L5'}, 
    //     {TenPhong: '7', TenGhe: 'L6'}, 
    //     {TenPhong: '7', TenGhe: 'L7'}, 
    //     {TenPhong: '7', TenGhe: 'L8'}, 
    //     {TenPhong: '7', TenGhe: 'L9'}, 
    //     {TenPhong: '7', TenGhe: 'L10'}, 
    //     {TenPhong: '7', TenGhe: 'L11'}, 
    //     {TenPhong: '7', TenGhe: 'L12'}, 
    //     {TenPhong: '7', TenGhe: 'M1'}, 
    //     {TenPhong: '7', TenGhe: 'M2'}, 
    //     {TenPhong: '7', TenGhe: 'M3'},
    //     {TenPhong: '7', TenGhe: 'M4'},
    //     {TenPhong: '7', TenGhe: 'M5'},
    //     {TenPhong: '7', TenGhe: 'M6'},
    //     {TenPhong: '7', TenGhe: 'M7'},
    //     {TenPhong: '7', TenGhe: 'M8'},
    //     {TenPhong: '7', TenGhe: 'M9'},
    //     {TenPhong: '7', TenGhe: 'M10'},
    //     {TenPhong: '7', TenGhe: 'M11'},
    //     {TenPhong: '7', TenGhe: 'M12'},
    //     {TenPhong: '7', TenGhe: 'N1'},
    //     {TenPhong: '7', TenGhe: 'N2'},
    //     {TenPhong: '7', TenGhe: 'N3'},
    //     {TenPhong: '7', TenGhe: 'N4'},
    //     {TenPhong: '7', TenGhe: 'N5'},
    //     {TenPhong: '7', TenGhe: 'N6'},
    //     {TenPhong: '7', TenGhe: 'N7'},
    //     {TenPhong: '7', TenGhe: 'N8'},
    //     {TenPhong: '7', TenGhe: 'N9'},
    //     {TenPhong: '7', TenGhe: 'N10'},
    //     {TenPhong: '7', TenGhe: 'N11'},
    //     {TenPhong: '7', TenGhe: 'N12'},
    //     {TenPhong: '7', TenGhe: 'O1'},
    //     {TenPhong: '7', TenGhe: 'O2'},
    //     {TenPhong: '7', TenGhe: 'O3'},
    //     {TenPhong: '7', TenGhe: 'O4'},
    //     {TenPhong: '7', TenGhe: 'O5'},
    //     {TenPhong: '7', TenGhe: 'O6'},
    //     {TenPhong: '7', TenGhe: 'O7'},
    //     {TenPhong: '7', TenGhe: 'O8'},
    //     {TenPhong: '7', TenGhe: 'O9'},
    //     {TenPhong: '7', TenGhe: 'O10'},
    //     {TenPhong: '7', TenGhe: 'O11'},
    //     {TenPhong: '7', TenGhe: 'O12'}]
    Ghe.insertMany(a, (err) => {
        if(err) {
            throw err;
        } else {
            res.json({mess: 'add success!'});
        }
    })
});

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
                res.json({mess: 'update status success!'});
            }
        }
    )
});

router.put('/updatestatusbyTenPhong', (req, res) => {
    Ghe.updateMany(
        {$and: [{'TenPhong': req.body.TenPhong}]},
        {$set: {'status': false}}, 
        (err) => {
            if(err) {
                throw err;
            } else {
                res.json({mess: 'update status success!'});
            }
        }
    )
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