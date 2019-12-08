import React, { Component } from 'react';
import Menu from '../Menu/Menu';


class StatisticalRevenue extends Component {
    render() {
        return (
            <div>
            <Menu/>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Chart Statistical Revenue</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Chart </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-7 mx-auto d-block">
                                    {/* STACKED BAR CHART */}
                                    <div className="card card-success">
                                        <div className="card-header">
                                            <h3 className="card-title">Stacked Bar Chart </h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="chart">
                                                <canvas id="stackedBarChart" style={{ minHeight: '350px', height: '350px', maxHeight: '350px', maxWidth: '100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>
        );
    }

}

export default StatisticalRevenue;
