import React from 'react'
import Header from '../header/header';
import './InfoUser.scss';

class InfoUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
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
                                    <div className="col-title">Tên tài tài khoản:</div><div className="col-value">{this.state.user['username']}</div><br />
                                    <div className="col-title">Email:</div><div className="col-value">{this.state.user['email']}</div><br />
                                    <div className="col-title">Mật khẩu:</div><div className="col-value">**********</div><br />
                                </ul>
                            </div>
                        </div>
                        <div className="user-center">
                            <div className="user-form modify" style={{ display: 'block' }}>
                                <h2 style={{ textAlign: 'center', background: 'url(/img/top_bg_user.jpg)  repeat 0 0', height: '75px' }}>
                                    <span style={{ width: '1100px', display: 'inline-block', marginTop: '13px' }}>
                                        <img src="img/title_info_change_user.jpg" alt="" />
                                    </span>
                                </h2>
                                <form id="modify-top">
                                   
                                    <div className="require-col">
                                        <div className="input-text username">
                                            <input id="update_name" name="name" type="text" defaultValue={this.state.user['username']} placeholder="TÊN TÀI KHOẢN (*)" />
                                        </div>
                                        <div className="input-text code">
                                            <input id="update_password" name="password" type="password" defaultValue="123456" placeholder="Mật Khẩu (*)" />
                                        </div>
                                        <div className="input-text tel">
                                            <input id="update_password_confirm" name="password_confirm" type="password" defaultValue="123456" placeholder="Nhập lại mật Khẩu (*)" />
                                        </div>
                                        
                                        <div className="input-but">
                                            <input type="button" className="modify-user-hide" defaultValue="ĐÓNG LẠI" id="btn-save-top" onClick={() => window.location = '/'}/>
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
