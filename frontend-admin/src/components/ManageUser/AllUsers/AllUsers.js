import React, { Component } from 'react';
import Menu from '../../Menu/Menu';

class AllUsers extends Component {
    render() {
        return (
            <div>
                < Menu />
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                        <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>All Users</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">AllUsers</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    {/* Widget: user widget style 2 */}
                                    <div className="card card-widget widget-user">
                                        {/* Add the bg color to the header using any of the bg-* classes */}
                                        <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                                            <h3 className="widget-user-username text-right">User Tuan</h3>
                                            <h5 className="widget-user-desc text-right">Web Designer</h5>
                                        </div>
                                        <a href='/updateuser'> <div className="widget-user-image">

                                            <img className="img-circle" src="dist/img/admintuan.jpg" alt="User Avatar" />

                                        </div></a>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">3,200</h5>
                                                        <span className="description-text">SALES</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">13,000</h5>
                                                        <span className="description-text">FOLLOWERS</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4">
                                                    <div className="description-block">
                                                        <h5 className="description-header">35</h5>
                                                        <span className="description-text">PRODUCTS</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                        </div>
                                    </div>
                                    {/* /.widget-user */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-4">
                                    {/* Widget: user widget style 1 */}
                                    <div className="card card-widget widget-user">
                                        {/* Add the bg color to the header using any of the bg-* classes */}
                                        <div className="widget-user-header bg-info">
                                            <h3 className="widget-user-username">User Hung</h3>
                                            <h5 className="widget-user-desc">Founder &amp; CEO</h5>
                                        </div>
                                        <a href='/updateuser'>
                                            <div className="widget-user-image">
                                                <img className="img-circle elevation-2" src="/dist/img/adminhung.jpg" alt="User Avatar" />
                                            </div>
                                        </a>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">3,200</h5>
                                                        <span className="description-text">SALES</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">13,000</h5>
                                                        <span className="description-text">FOLLOWERS</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4">
                                                    <div className="description-block">
                                                        <h5 className="description-header">35</h5>
                                                        <span className="description-text">PRODUCTS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.widget-user */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-4">
                                    {/* Widget: user widget style 1 */}
                                    <div className="card card-widget widget-user">
                                        {/* Add the bg color to the header using any of the bg-* classes */}
                                        <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                                            <h3 className="widget-user-username text-right">User Tuan</h3>
                                            <h5 className="widget-user-desc text-right">Web Designer</h5>
                                        </div>
                                        <a href='/updateuser'>
                                            <div className="widget-user-image">
                                                <img className="img-circle" src="/dist/img/admintuan.jpg" alt="User Avatar" />
                                            </div>
                                        </a>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">3,200</h5>
                                                        <span className="description-text">SALES</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">13,000</h5>
                                                        <span className="description-text">FOLLOWERS</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4">
                                                    <div className="description-block">
                                                        <h5 className="description-header">35</h5>
                                                        <span className="description-text">PRODUCTS</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                        </div>
                                    </div>
                                    {/* /.widget-user */}
                                </div>
                                {/* /.col */}
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
