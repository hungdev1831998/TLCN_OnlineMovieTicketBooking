const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

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
            Ve.find({ $and: [{ 'email': req.body.email }, {'TenFilm': req.body.TenFilm},
                             {'TenGhe': req.body.TenGhe}, {'ThoiGianChieu': req.body.ThoiGianChieu}]}).then((ves) => {
                if(ves.length === 0) {
                    var newVe = {
                        email: req.body.email,
                        TenFilm: req.body.TenFilm,
                        TenPhong: req.body.TenPhong,
                        TenGhe: req.body.TenGhe,
                        ThoiGianChieu: req.body.ThoiGianChieu,
                        ThoiGianDat: req.body.ThoiGianDat
                    };
                    var ve = new Ve(newVe);
                    ve.save().then(() => {
                        console.log("Them ghe thanh cong!");
                        var mailOptions = {
                            from: 'tuanhungcinema@gmail.com',
                            to: req.body.email,
                            subject: 'Dat ve thanh cong',
                            html: '<body><form >' +
                                    '<div className="form-group">' +
                                        '<label htmlFor=""><span className="glyphicon glyphicon-user" /> Tên phim: ' + newVe.TenFilm +'</label><br />' +
                                        '<label htmlFor="psw"><span className="" /> Tên phòng chiếu: 0'+ newVe.TenPhong +'</label><br />' +
                                        '<label htmlFor="psw"><span className="" /> ghế: '+ newVe.TenGhe +'</label><br />' +
                                        '<label htmlFor=""><span className="" /> Thời gian chiếu: ' + newVe.ThoiGianChieu +'</label><br />' +
                                        '<label htmlFor=""><span className="" /> Thời gian đặt vé: ' + newVe.ThoiGianDat +'</label><br />' +
                                    '</div>' +
                                  '</form></body>'
                        }
                
                        transporter.sendMail(mailOptions, (info) => {
                            console.log('email sent: ' + info.response);
                        });
                        return res.json({ "mess": "Them ve thanh cong!" });
                    }).catch((err) => {
                        if (err) {
                            throw err;
                        }
                    });
                } else {
                    return res.json({ "mess": "Ve da ton tai!" });
                }
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
        {$set: {'status': req.body.status, 'ThoiGianXacNhan': req.body.ThoiGianXacNhan}}, 
        (err) => {
            if(err) {
                throw err;
            } else {
                res.json({mess: 'update status success!'});
            }
        }
    )
})

router.put('/updatestatusbyTen', (req, res) => {
    Ve.updateMany(
        {$and: [{"TenPhong": req.body.TenPhong}, , {'TenFilm': req.body.TenFilm}, {'ThoiGianChieu': req.body.ThoiGianChieu}]},
        {$set: {'status': true, 'ThoiGianXacNhan': Date.now()}}, {multi: true},
        (err) => {
            if(err) {
                throw err;
            } else {
                res.json({mess: 'update status success!'});
            }
        }
    )
})

router.post('/delete', (req, res) => {
    Ve.deleteMany({$and: [{"TenPhong": req.body.TenPhong}, {'TenFilm': req.body.TenFilm}, {'ThoiGianChieu': req.body.ThoiGianChieu}]}, (err)=> {
        if(err)
            throw err;
        res.json({mess: "delete success!"});
    });
});

router.post('/getvebyemail', (req, res) => {
    Ve.find({ $and: [{ 'email': req.body.email }, {'status': req.body.status}]}).then((ves) => {
        return res.json(ves);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tuanhungcinema@gmail.com',
        pass: 'tuanhung123'
    }
});


module.exports = router;