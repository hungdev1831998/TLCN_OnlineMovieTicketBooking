const mongoose = require('mongoose');

var LichChieuSchema = new mongoose.Schema({
    TenFilm: {
        type: String,
        required: true
    },
    TenPhong: {
        type: String,
        required: true
    },
    ThoiGianChieu: {
        type: Date,
        required: true
    }
});
var LichChieu = mongoose.model('LichChieu', LichChieuSchema);
module.exports = LichChieu;