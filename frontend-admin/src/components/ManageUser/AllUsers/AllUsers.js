import React, { Component } from 'react';
import Menu from '../../Menu/Menu';
import axios from "axios";
class AllUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {

    }
    UNSAFE_componentWillMount() {
        this.isLocalStorage();
        axios.get("http://localhost:3001/user/allusers")
            .then((res) => {
                this.setStateFilms(res.data);
            });
    }

    setStateFilms = (data) => {
        this.setState({ users: data });
    }

    isLocalStorage = () => {
        if (JSON.parse(sessionStorage.getItem('user')) != null) {
            var username = JSON.parse(sessionStorage.getItem('user'))["username"] ?
                JSON.parse(sessionStorage.getItem('user'))["username"] : null;
        }
        if(!username)
        return window.location = '/';
    }

    handleOnclickUser = (email) => {
        sessionStorage.setItem("email", email);
    }

    handleOnclickDelete = (email) => {
        var email = {email: email};
        axios.put("http://localhost:3001/user/delete", email)
            .then((res) => {
                window.location.reload();
            });
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>All Users</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="/menu">Home</a></li>
                                        <li className="breadcrumb-item active">AllUsers</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                            {this.state.users.map((item, index) =>
                                (index === 0) ?
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <button className="btn btn-danger btn-sm float-right" onClick={this.handleOnclickDelete.bind(this, item.email)}>
                                                    <i className="fas fa-trash float-right"></i>Delete</button>
                                                <div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item carousel-item-next carousel-item-left">
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <a href='/updateuser' onClick={this.handleOnclickUser.bind(this, item.email)}>
                                                                            <center><dt>{item.email}</dt></center>
                                                                        </a>
                                                                     </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href='/updateuser' onClick={this.handleOnclickUser.bind(this, item.email)}>
                                                                            <center><dt>{item.role}</dt></center>
                                                                        </a>
                                                                     </td>
                                                                </tr>
                                                            </table>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                :
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <button className="btn btn-danger btn-sm float-right" onClick={this.handleOnclickDelete.bind(this, item.email)}>
                                                    <i className="fas fa-trash float-right"></i>Delete</button>
                                                <div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item carousel-item-next carousel-item-left">
                                                        <table>
                                                                <tr>
                                                                    <td>
                                                                        <a href='/updateuser' onClick={this.handleOnclickUser.bind(this, item.email)}>
                                                                            <center><dt>{item.email}</dt></center>
                                                                        </a>
                                                                     </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href='/updateuser' onClick={this.handleOnclickUser.bind(this, item.email)}>
                                                                            <center><dt>{item.role}</dt></center>
                                                                        </a>
                                                                     </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )}
                            </div>
                            <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
                                <i className="fas fa-chevron-up" />
                            </a>
                            {/* /.content-wrapper */}
                        </div>

                    </section>
                </div>
            </div>
        );
    }

}

export default AllUsers;
