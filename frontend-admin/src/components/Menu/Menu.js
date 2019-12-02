import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div >
                <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">Admin Manage</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/admintuan.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Admin Tuan</a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                                {/* ManageUser */}
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-book" />
                                        <p>
                                            Manage User
                                    <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="/allusers" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>All Users</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/adduser" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add User</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/updateuser" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Edit User</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* ManageFilm */}
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-book" />
                                        <p>Manage Film
                                    <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="/allfilms" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>All Films</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/addfilm" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add Film</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/updatefilm" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Edit Film</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Mail */}
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-envelope" />
                                        <p>Mailbox
                        <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="/inboxmail" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Inbox</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/composemail" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Compose</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/readmail" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Read</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p>
                                            Statistical Revenue
                        <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="/statisticalrevenue" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Chart Statistical Revenue</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>

            </div>
        );
    }

}

export default Menu;
