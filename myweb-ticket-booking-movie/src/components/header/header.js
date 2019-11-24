import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usrname: ""
        };
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        this.setState({ usrname: null });
        return window.location = '/';
    }
    UNSAFE_componentWillMount() {
        this.isLocalStorage();
    }

    isLocalStorage = () => {
        if (JSON.parse(localStorage.getItem('user')) != null) {
            var username = JSON.parse(localStorage.getItem('user'))["username"] ?
                JSON.parse(localStorage.getItem('user'))["username"] : null;
        }
        this.setState({ usrname: username });
    }

    render() {
        return (
            <div>
                <header>
                    <div>
                        <nav className="navbar navbar-default navbar-fixed-top">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="myNavbar">
                                    <div>
                                        <ul className="nav navbar-nav navbar-left">
                                            <li>
                                                <img src="img/logoheader.jpg" className="img-fluid" alt="logoheader" style={{ width: 150, height: 40 }} />&nbsp;&nbsp;&nbsp;&nbsp;
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="navbar-brand textcenter" href="#myPage">Tuấn Hưng Booking Ticket Movie</div>

                                    <div>
                                        <ul className="nav navbar-navcenter navbar-right">
                                            {!(this.state.usrname) ?
                                                <ul className="nav navbar-nav navbar-right">
                                                    <li>
                                                        <Link to="/login">LOGIN</Link>
                                                    </li>
                                                </ul>
                                                :
                                                <div>
                                                    <Link to="/">
                                                        <div className="btn-group pull-right">

                                                            <button type="button" className="btn btn-dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <strong>{this.state.usrname}</strong> </button>

                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <button className="dropdown-item" type="button" onClick={() => window.location = '/infoUser'}><a href='/ticket'>Thông tin người dùng</a></button>
                                                                <button className="dropdown-item" type="button" onClick={() => window.location = '/ticket'}><a href='/ticket'>Vé đã đặt</a></button>
                                                                <button className="dropdown-item" type="button" onClick={this.onLogout}><a href='/'>Đăng xuất</a></button>
                                                            </div>
                                                        </div>

                                                        {/* <strong>{this.state.usrname}</strong> <a onClick={this.onLogout} href="/">    LOGOUT</a></Link> */}
                                                    </Link>
                                                </div>
                                            }
                                        </ul>
                                    </div>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/"><span className="glyphicon glyphicon-search" /></Link></li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/#contact">CONTACT</Link></li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="/" >HOME</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;
