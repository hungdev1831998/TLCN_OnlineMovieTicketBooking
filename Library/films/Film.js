const mongoose = require('mongoose');

mongoose.model("Film", {
    TenFilm: {
        type: String,
        require: true
    },
    DaoDien: {
        type: String,
        require: true
    },
    TenNuocSX: {
        type: String,
        require:true
    },
    TongThu: {
        type:Number,
        default : 0
    },
    TongChi: {
        type: Number,
        default: 0
    },
    NgayChieu: {
        type: Date,
        require: false
    },
    NgayKetThuc: {
        type: Date,
        require:false
    },
    AnhBia: {
        type: String,
        require: true
    }
});