import React from 'react'
import Header from '../header/header';
import './InfoUser.scss';

class InfoUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="container">
                <Header />
                <div className="user-wrap">
                    <div className="user-details" style={{ opacity: 1 }}>
                        <div className="close-user" />
                        <div className="user-center">
                            <div className="user-info">
                                <h2>THÔNG TIN TÀI KHOẢN</h2>
                                <ul>
                                    <div className="col-title">Giới tính:</div><div className="col-value">Nữ</div> <br />
                                    <div className="col-title">Họ tên:</div><div className="col-value">Huỳnh Trần Phước Hưng</div><br />
                                    <div className="col-title">Ngày sinh:</div><div className="col-value">18/03/1998</div><br />
                                    <div className="col-title">Địa chỉ:</div><div className="col-value">Thủ Đức</div><br />
                                    <div className="col-title">Số CMND/Bằng lái:</div><div className="col-value">301646412</div><br />
                                    <div className="col-title">Điện thoại:</div><div className="col-value">0348010604</div><br />
                                    <div className="col-title">Tên đăng nhập:</div><div className="col-value">hungdainhat998</div><br />
                                    <div className="col-title">Email:</div><div className="col-value">phimviet789@gmail.com</div><br />
                                </ul>
                                <a className="modify-user" href="javascript:void(0);" style={{ display: 'none' }}>Thay đổi thông tin</a>
                            </div>
                            <div className="user-history">
                                <h2>HOẠT ĐỘNG VỚI TUẤN HƯNG MOVIE</h2>
                                <table>
                                    <tbody><tr>
                                        <td>Ngày</td>
                                        <td>cashiers</td>
                                        <td>type</td>
                                        <td>points</td>
                                        <td>reason</td>
                                    </tr>
                                    </tbody></table>
                                <ul>
                                    <div className="col-title">Điểm tích lũy:</div><div className="col-value">0</div><br />
                                    <div className="col-title">Loại thẻ:</div><div className="col-value" />
                                </ul>
                            </div>
                        </div>
                        <div className="user-center">
                            <div className="user-form modify" style={{ display: 'block' }}>

                                {/* <h3 className="user-title">Chỉnh sửa thông tin cá nhân</h3> */}
                                <h2 style={{ textAlign: 'center', background: 'url(/img/top_bg_user.jpg)  repeat 0 0', height: '75px' }}>
                                    <span style={{ width: '1100px', display: 'inline-block', marginTop: '13px' }}>
                                        <img src="img/title_info_change_user.jpg" />
                                    </span>
                                </h2>
                                <form id="modify-top">
                                    <div className="require-col">
                                        <label className="gender"><input type="radio" name="gender" defaultValue={1} /><span className="gender-name">Nam</span><span className="gender-shape" /></label>
                                        <label className="gender"><input type="radio" name="gender" defaultValue={0} defaultChecked /><span className="gender-name">Nữ</span><span className="gender-shape" /></label>
                                    </div>
                                    <div className="require-col">
                                        <div className="input-text name">
                                            <input id="update_name" name="name" type="text" defaultValue="hung" placeholder="HỌ TÊN (*)" />
                                        </div>
                                        <div className="input-text birth">
                                            <input id="update_birthday" name="birthday" type="text" defaultValue="18/03/1998" placeholder="DD/MM/YYYY ( Ngày sinh*)" />
                                        </div>
                                        <div className="input-text address">
                                            <input id="update_address" name="address" type="text" defaultValue="thuduc" placeholder="ĐỊA CHỈ (*)" />
                                        </div>
                                        <div className="input-text code">
                                            <input id="update_cmnd" name="cmnd" type="text" defaultValue={301646412} placeholder="SỐ CMND/BẰNG LÁI (*)" />
                                        </div>
                                        <div className="input-text tel">
                                            <input id="update_phone" name="phone" type="text" defaultValue={+84348010604} placeholder="ĐIỆN THOẠI (*)" />
                                        </div>
                                        <div className="input-text email">
                                            <input readOnly="readonly" id="update_email" name="email" type="text" defaultValue="phimviet789@gmail.com" placeholder="EMAIL (*)" />
                                        </div>
                                        <div className="input-text username">
                                            <input readOnly="readonly" id="update_username" name="username" type="text" defaultValue="hungdainhat998" placeholder="TÊN ĐĂNG NHẬP (*)" />
                                        </div>
                                        <div className="input-text code">
                                            <input id="update_cmnd" name="cmnd" type="text" defaultValue="******" placeholder="Mật Khẩu (*)" />
                                        </div>
                                        <div className="input-text tel">
                                            <input id="update_phone" name="phone" type="text" defaultValue="******" placeholder="Nhập lại mật Khẩu (*)" />
                                        </div>
                                        {/* <div className="input-text password">
                                            <span className="focus-text">MẬT KHẨU (*)</span>
                                            <input id="update_password" name="password" type="password" defaultValue />
                                        </div>
                                        <div className="input-text confirmpass">
                                            <span className="focus-text">NHẬP LẠI MẬT KHẨU (*)</span>
                                            <input id="update_password_confirm" name="password_confirm" type="password" defaultValue />
                                        </div> */}
                                        <div className="input-but">
                                            <input type="button" className="modify-user-hide" defaultValue="ĐÓNG LẠI" id="btn-save-top" />
                                            <input type="button" defaultValue="LƯU LẠI" id="btn-save-top" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default InfoUser;
