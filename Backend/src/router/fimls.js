const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const DateOnly = require('date-only');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');

require("../model/Film");
const Film = mongoose.model("Film");



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

router.get('/getfilms', (req, res) => {
    Film.find({ $and: [{ NgayChieu: { $lte: Date.now() } }, { NgayKetThuc: { $gte: Date.now() } }, {deleted: false}] }, 'TenFilm DaoDien TomTat TenNuocSX AnhBia NgayChieu NgayKetThuc').then((films) => {
        res.json(films);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});
router.get('/allfilms', (req, res) => {
    Film.find({deleted: false}).then((films) => {
        res.json(films);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

const multer = require('multer');
const storage = multer.diskStorage({
    destination: '../myweb-ticket-booking-movie/public/img/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// const myFunc = (res) => {
//     console.log("abc");
//     Film.find({ $or: [{ 'TenFilm': "Lật Mặt" }] }, 'TenFilm DaoDien TenNuocSX AnhBia').then((films) => {
//         console.log(films);
//         res.render('pages/viewfilm', {
//             AnhBia: films[0].AnhBia
//         })
//     }).catch((err) => {
//         if (err) {
//             throw err;
//         }
//     });
// }

router.post('/upload',upload.single('AnhBia'), (req, res) => {
            var newFilm = {
                TenFilm: req.body.TenFilm,
                DaoDien: req.body.DaoDien,
                TenNuocSX: req.body.TenNuocSX,
                TongThu: req.body.TongThu,
                TongChi: req.body.TongChi,
                NgayChieu: req.body.NgayChieu,
                NgayKetThuc: req.body.NgayKetThuc,
                AnhBia: "img/" + req.file.path.split('\\')[4],
                TomTat: req.body.TomTat
            };
            var film = new Film(newFilm);
            film.save().then(() => {
                console.log("New film created!");
            }).catch((err) => {
                if (err) {
                    throw err;
                }
            });
            res.json({message: "New film created!"});
});

router.post('/getImageByName', (req, res)=>{
    Film.find({ $and: [{ TenFilm: req.body.TenFilm }, {deleted: false}] }, 'TenFilm AnhBia').then((films) => {
        res.json(films);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
})

router.post('/getFilmByName', (req, res)=>{
    Film.find({ $and: [{ TenFilm: req.body.TenFilm }, {deleted: false}] }).then((films) => {
        res.json(films);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
})

router.put('/delete', (req, res) => {
    Film.updateMany({
        $and: [{'TenFilm': req.body.TenFilm}]},
        {$set: {'deleted': true}}, 
        (err) => {
            if(err) {
                throw err;
            } else {
                console.log("delete film success!");
                res.json({"mess" : "delete film success!"});
        }
    });
});


router.put('/update', (req, res) => {
    Film.updateMany({
        $and: [{'TenFilm': req.body.TenFilm}]},
        {$set: {'DaoDien': req.body.DaoDien, 'TenNuocSX': req.body.TenNuocSX,
                'TomTat': req.body.TomTat, 'NgayChieu': req.body.NgayChieu,
                'NgayKetThuc': req.body.NgayKetThuc, 'TongChi': req.body.TongChi}}, 
        (err) => {
            if(err) {
                throw err;
            } else {
                console.log("update film success!");
                res.json({message: 'update film success!'});
        }
    });
});

router.put('/updateTongThu', (req, res) =>{
    Film.find({$and: [{ TenFilm: req.body.TenFilm }, {deleted: false}]}, 'TongThu').then((films) => {
        if(films.length !== 0) {
            const tongthu = films[0]["TongThu"] + (req.body.TongThu * 50000);
            Film.updateMany({
                $and: [{'TenFilm': req.body.TenFilm}]},
                {$set: {'TongThu': tongthu}}, 
                (err) => {
                    if(err) {
                        throw err;
                    } else {
                        console.log("update tong thu success!");
                        res.json({message: 'update tong thu success!'});
                }
            });
        }
        else {
            console.log("Khong co film nay!");
            res.json({message: 'Khong co film nay!'});
        }
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
    
});

router.get("/thuchi", (req, res) => {
    Film.find({$and: [{deleted: false}]}, 'TenFilm TongChi TongThu').then((films) => {
        res.json(films);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

module.exports = router;