import React from 'react';
import "./History.scss";
import Header from '../header/header';
import axios from "axios";
var images = [];
class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ve: [],
            image: []
        }
        this.getVebyemail = this.getVebyemail.bind(this);
        this.renderVe = this.renderVe.bind(this);
        this.getImageByFilmName = this.getImageByFilmName.bind(this);
    }

    componentDidMount() {
        this.getVebyemail();
    }

    getVebyemail = () => {
        if (localStorage.getItem('user')) {
            var email = {
                email: JSON.parse(localStorage.getItem('user'))['email'],
                status: true
            }
            axios.post('http://localhost:3001/ve/getvebyemail', email)
                .then((res) => {
                    this.setState({ ve: res.data });
                    this.state.ve.forEach(item => {
                        this.getImageByFilmName(item["TenFilm"]);
                    });
                });
            
        }
    }
    
    getImageByFilmName = (tenfilm) => {
        var Tenfilm = {
            TenFilm: tenfilm
        }
        axios.post('http://localhost:3001/film/getImageByName', Tenfilm)
            .then((res) => {
                if(images.length === 0) {
                    images.push(res.data[0]);
                    this.setState({image: images});
                } else {
                    var exist = false;
                    for(var i = 0; i < images.length; i++) {
                        if(res.data[0]["TenFilm"] === images[i]["TenFilm"]) {
                            exist = true;
                        }
                    }
                    if(!exist) {
                        images.push(res.data[0]);
                        this.setState({image: images});
                    }
                }
                
            });
    }


    renderVe = () => {
        if (this.state.ve.length !== 0) {
            return this.state.ve.map((item, index) => {
                var tenghe = "";
                item['TenGhe'].forEach((ghe) => {
                    tenghe += ghe + ", ";
                });
                var thoigianchieu = item['ThoiGianChieu'].split('T')[1];
                var giodat = item['ThoiGianDat'].split('T')[1];
                var thoigiandat = giodat.substring(0, giodat.length - 5) + " " + item['ThoiGianDat'].split('T')[0];
                var gioxacnhan = item['ThoiGianXacNhan'].split('T')[1];
                var thoigianxacnhan = gioxacnhan.substring(0, gioxacnhan.length - 5) + " " + item['ThoiGianXacNhan'].split('T')[0];
                return (
                    <div className="ticket-wrap" key={index}>
                        <div className="ticket-center" >
                            <div className="row">
                                <div className="col-md-4" >
                                    {this.state.image.map(items => 
                                        (item["TenFilm"] === items["TenFilm"]) ?
                                            <img key={index + 100} src={items["AnhBia"]} alt={items.TenFilm} style={{ width: 383, height: 315 }}></img>
                                        :
                                        null
                                    )}
                                    
                                </div>
                                <div className="col-md-8" >
                                    <div className="ticket-info" >
                                        <h2>THÔNG TIN VÉ</h2>
                                        <ul>
                                            <div className="col-title">Phim:</div><div className="col-value">{item['TenFilm']}</div> <br />
                                            <div className="col-title">Ngày chiếu:</div><div className="col-value">{item['ThoiGianChieu'].split('T')[0]}</div><br />
                                            <div className="col-title">Thời gian chiếu:</div><div className="col-value">{thoigianchieu.substring(0, thoigianchieu.length - 5)}</div><br />
                                            <div className="col-title">Phòng chiếu:</div><div className="col-value">{item['TenPhong']}</div><br />
                                            <div className="col-title">Chỗ ngồi:</div><div className="col-value">{tenghe.substring(0, tenghe.length - 2)}</div><br />
                                            <div className="col-title">Thời gian đặt vé:</div><div className="col-value">{thoigiandat}</div><br />
                                            <div className="col-title">Thời gian thời gian xác nhận:</div><div className="col-value">{thoigianxacnhan}</div><br />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="tour">
                            <div className="ticket-btn">
                                ------------------------------------------------------
                            </div>
                        </div>
                    </div>
                )
            });
        } else {
            return (
                <center >Bạn chưa mua vé nào!!!</center>
            )
        }
    }

    render() {
        const hStyle = { color: 'blue' };
        return (
            <div className="container">
                <Header />
                <center><h2 style={hStyle}><br/>Lịch sử đặt vé</h2></center>
                {this.renderVe()}
            </div>
        );
    }
}
export default History;
