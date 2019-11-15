import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            usrname: ""
        };
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        this.setState({usrname:null});
    }
    UNSAFE_componentWillMount() {
        this.isLocalStorage();
    }

    isLocalStorage = () => {
        if(JSON.parse(localStorage.getItem('user')) != null) {
            var username = JSON.parse(localStorage.getItem('user'))["username"] ? 
            JSON.parse(localStorage.getItem('user'))["username"] : null;
        }
        this.setState({usrname: username});
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
                                        <ul className="nav navbar-nav navbar-right">
                                            { !(this.state.usrname) ? 
                                                <li>
                                                    <Link to="/login">LOGIN</Link>
                                                </li>
                                                :
                                                <li>
                                                    <Link to="/"><strong>{this.state.usrname}</strong> <a onClick={this.onLogout} href="/">    LOGOUT</a></Link>
                                                </li>
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
