const mongoose = require('mongoose');

var PhongChieuSchema = new mongoose.Schema({
    TenPhong: {
        type: String,
        required: true
    },
    TongSoGhe: {
        type: Number,
        required: true
    }
});
var PhongChieu = mongoose.model('PhongChieu', PhongChieuSchema);
module.exports = PhongChieu;