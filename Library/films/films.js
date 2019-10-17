const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mongoose = require('mongoose');

require("./Film");
const Film = mongoose.model("Film");

mongoose.connect("mongodb+srv://tuan:tuan@cluster0-uq3xz.mongodb.net/Movie", () => {
    console.log("Database is connected");
});

app.get('/', (req, res) => {
    res.send("This is our main endpoit!");
});

app.post('/film', (req, res) => {
    var newFilm = {
        TenFilm: req.body.TenFilm,
        DaoDien: req.body.DaoDien,
        TenNuocSX: req.body.TenNuocSX,
        TongThu: req.body.TongThu,
        TongChi: req.body.TongChi,
        NgayChieu: req.body.NgayChieu,
        NgayKetThuc: req.body.NgayKetThuc,
        AnhBia: req.body.AnhBia
    };
    
    var film = new Film(newFilm);

    film.save().then(() => {
        console.log("New film created!");
    }).catch((err) => {
        if(err) {
            throw err;
        }
    });
    res.send("A new film created with success!");
});


app.get('/films', (req, res)  => {
    Film.find().then((films) => {
        res.json(films);
    }).catch((err) => {
        if(err) {
            throw err;
        }
    });
});

app.get('/film/:id', (req, res) => {
    Film.findById(req.params.id).then((film) => {

        if(film) {
            res.json(film);
        } else {
            res.sendStatus(404);
        }

    }).catch((err) => {
        if(err) {
            throw err;
        }
    });
});

app.delete('/film/:id', (req, res) => {
    Film.findOneAndRemove(req.params.id).then(() => {
        res.send("Film removed with success!");
    }).catch((err) => {
        if(err) {
            throw err;
        }
    });
});


app.listen(4545, () => {
    console.log("Up and running on port 4545! -- This is our Films service!");
})