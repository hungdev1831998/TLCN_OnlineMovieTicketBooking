import React from 'react';
import "./Ticket.scss";
import Header from '../header/header';
import axios from "axios";
var images = [];
class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ve: [],
            image: []
        }
        this.getVebyemail = this.getVebyemail.bind(this);
        this.renderVe = this.renderVe.bind(this);
        this.reloadPage = this.reloadPage.bind(this);
        this.getImageByFilmName = this.getImageByFilmName.bind(this);
    }

    componentDidMount() {
        this.getVebyemail();
    }

    getVebyemail = () => {
        if (localStorage.getItem('user')) {
            var email = {
                email: JSON.parse(localStorage.getItem('user'))['email']
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

    handleOnclickXacNhan = (ve) => {
        var vecanxacnhan = {
            email: JSON.parse(localStorage.getItem('user'))['email'],
            TenFilm: ve.TenFilm,
            TenPhong: ve.TenPhong,
            TenGhe: ve.TenGhe[0],
            ThoiGianChieu: ve.ThoiGianChieu,
            status: true
        }
        axios.put('http://localhost:3001/ve/updatestatus', vecanxacnhan)
            .then((res) => {
                if (res.data['mess'] === 'update status success!') {
                    images = [];
                    this.reloadPage();
                }
            });
    }

    reloadPage = () => {
        return window.location = '/ticket';
    }

    renderVe = () => {
        if (this.state.ve.length !== 0) {
            return this.state.ve.map((item, index) => {
                var tenghe = "";
                item['TenGhe'].forEach((ghe) => {
                    tenghe += ghe + ", ";
                });
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
                                            <div className="col-title">Thời gian chiếu:</div><div className="col-value">{item['ThoiGianChieu'].split('T')[1]}</div><br />
                                            <div className="col-title">Phòng chiếu:</div><div className="col-value">{item['TenPhong']}</div><br />
                                            <div className="col-title">Chỗ ngồi:</div><div className="col-value">{tenghe}</div><br />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="tour">
                            <div className="ticket-btn">
                                <div className="text-center">
                                    <button className="btn btn-primary">Hủy đặt vé</button> &nbsp;&nbsp;
                                    <button className="btn btn-primary" data-toggle="modal" onClick={this.handleOnclickXacNhan.bind(this, item)}>Xác nhận</button>
                                </div>
                                ------------------------------------------------------
                            </div>
                        </div>
                    </div>
                )
            });
        } else {
            return (
                <center >hiện tại bạn chưa mua vé nào cả!</center>
            )
        }
    }

    render() {
        const hStyle = { color: 'red' };
        return (
            <div className="container">
                <Header />
                <center><h2 style={hStyle}><br/>Chỉ để nhân viên nhấn "xác nhận"</h2></center>
                <center><h2 style={hStyle}>(quý khách tự ý bấm mất vé rạp phim không chịu trách nhiệm)</h2></center>
                {this.renderVe()}
            </div>
        );
    }
}
export default Ticket;
