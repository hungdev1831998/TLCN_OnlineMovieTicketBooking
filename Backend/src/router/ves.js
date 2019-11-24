const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');

require("../model/Ve");
const Ve = mongoose.model("Ve");

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

router.post('/addve', (req, res) => {
    if (req.body.email && req.body.TenFilm &&
        req.body.TenPhong && req.body.TenGhe && req.body.ThoiGianChieu) {
        var newVe = {
            email: req.body.email,
            TenFilm: req.body.TenFilm,
            TenPhong: req.body.TenPhong,
            TenGhe: req.body.TenGhe,
            ThoiGianChieu: req.body.ThoiGianChieu
        };
        var ve = new Ve(newVe);
        ve.save().then(() => {
            console.log("Them ghe thanh cong!");
            return res.json({ "mess": "Them ve thanh cong!" });
        }).catch((err) => {
            if (err) {
                throw err;
            }
        });
    } else {
        res.json({ "mess": "nhap so lieu" });
    }
});

router.put('/updatestatus', (req, res) => {
    Ve.updateMany(
        {$and: [{'email': req.body.email}, {'TenFilm': req.body.TenFilm},
                {"TenPhong": req.body.TenPhong} ,{"TenGhe": req.body.TenGhe},
                {'ThoiGianChieu': req.body.ThoiGianChieu}]},
        {$set: {'status': req.body.status}}, 
        (err) => {
            if(err) {
                throw err;
            } else {
                res.json({mess: 'update status success!'});
            }
        }
    )
})

router.delete('/delete', (req, res) => {
    Ghe.deleteMany({'TenPhong': req.body.TenPhong}, (err)=> {
        if(err)
            throw err;
        res.json({mess: "delete success!"});
    });
});

router.post('/getvebyemail', (req, res) => {
    Ve.find({ $and: [{ 'email': req.body.email }, {'status': false}]}).then((ves) => {
        return res.json(ves);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

module.exports = router;