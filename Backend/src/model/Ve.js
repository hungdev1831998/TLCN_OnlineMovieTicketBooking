const mongoose = require('mongoose');

var VeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    TenFilm: {
        type: String,
        required: true
    },
    TenPhong: {
        type: String,
        required: true
    },
    TenGhe: {
        type: [String],
        required: true
    },
    ThoiGianChieu: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    ThoiGianDat: {
        type: Date,
        default: Date.now()
    },
    ThoiGianXacNhan: {
        type: Date,
        default: Date.now()
    },
});
var Ve = mongoose.model('Ve', VeSchema);
module.exports = Ve;