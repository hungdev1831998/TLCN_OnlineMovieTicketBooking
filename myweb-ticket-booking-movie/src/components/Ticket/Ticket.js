import React from 'react';
import "./Ticket.scss";
import Header from '../header/header';
import axios from "axios";
import { Link } from 'react-router-dom';
class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="ticket-wrap">

                    <div className="ticket-center">
                        <div className="row">

                            <div class="col-md-4">
                                <img src="/img/AnhBia-1574039505646.jpg" style={{ width: 383, height: 315 }}></img>
                            </div>
                            <div class="col-md-8">
                                <div className="ticket-info">
                                    <h2>THÔNG TIN VÉ</h2>
                                    <ul>
                                        <div className="col-title">Phim:</div><div className="col-value">Dora And The Lost City of Gold</div> <br />
                                        <div className="col-title">Ngày:</div><div className="col-value">18-11-2019</div><br />
                                        <div className="col-title">Thời gian:</div><div className="col-value">18h30 - 20h30</div><br />
                                        <div className="col-title">Địa chỉ:</div><div className="col-value">Tuấn Hưng Movie-Phường Linh Trung, Quận Thủ Đức</div><br />
                                        <div className="col-title">Phòng:</div><div className="col-value">6</div><br />
                                        <div className="col-title">Chỗ ngồi:</div><div className="col-value">B07</div><br />
                                        <div className="col-title">Tổng cộng:</div><div className="col-value">170.000 đ</div>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="ticket-btn">
                        <div className="text-center">
                            <button className="btn btn-primary">Hủy</button> &nbsp;&nbsp;
                            <button className="btn btn-primary">Thanh toán</button>
                        </div>
                    </div> */}

                    {/* Container (thanh toán Section) */}
                    <div id="tour">
                        
                                        <div className="ticket-btn">
                                            <div className="text-center">
                                                <button className="btn btn-primary">Hủy</button> &nbsp;&nbsp;
                                                <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Thanh toán</button>
                                           

                            </div>
                        </div>
                        {/* Modal */}
                        <div className="modal fade" id="myModal" role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4><span className="glyphicon glyphicon-lock" /> Thanh toán vé</h4>
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <form role="form">
                                            <div className="form-group">
                                                <label htmlFor="psw"><span className="" /> Tên phim: </label><br />
                                                <label htmlFor="psw"><span className="" /> Thời gian chiếu: </label><br />
                                                <label htmlFor="psw"><span className="" /> Tên phòng chiếu: </label><br />
                                                <label htmlFor="psw"><span className="" /> Tên ghế: </label><br />
                                                <label htmlFor="psw"><span className="" /> Số tiền: </label>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
                                        Hủy <span className="glyphicon glyphicon-remove" /> 
                                        </button>
                                        <button type="submit" className="btn btn-success">Xác nhận
                                                <span className="glyphicon glyphicon-ok" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <div className="ticket-details" style={{ opacity: 1 }}></div> */}



            </div>


        );
    }
}
export default Ticket;
