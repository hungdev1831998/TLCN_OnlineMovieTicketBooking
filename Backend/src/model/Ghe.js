const mongoose = require('mongoose');

var GheSchema = new mongoose.Schema({
    TenPhong: {
        type: String,
        required: true
    },
    TenGhe: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});
var Ghe = mongoose.model('Ghe', GheSchema);
module.exports = Ghe;