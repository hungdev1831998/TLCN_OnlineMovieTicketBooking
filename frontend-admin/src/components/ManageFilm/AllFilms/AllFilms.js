import React, { Component } from 'react';


class AllFilms extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>All Films</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">AllFilms</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-10 mx-auto d-block">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Carousel</h3>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                                <ol className="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                                    <li data-target="#carouselExampleIndicators" data-slide-to={1} className />
                                                    <li data-target="#carouselExampleIndicators" data-slide-to={2} className />
                                                </ol>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item carousel-item-next carousel-item-left">
                                                        <img className="d-block w-100" src="/dist/img/Dora.jpg" alt="First slide" style={{ width: 952, height: 500 }} />
                                                        <center><dt>Dora And The Lost City Of Gold</dt></center>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img className="d-block w-100" src="/dist/img/Fast9.jpg" alt="Second slide" style={{ width: 952, height: 500 }} />
                                                        <center><dt>Fast And Furious 9</dt></center>
                                                    </div>
                                                    <div className="carousel-item active carousel-item-left">
                                                        <img className="d-block w-100" src="/dist/img/Captain.jpg" alt="Third slide" style={{ width: 952, height: 500 }} />
                                                        <center><dt>Captain America</dt></center>
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <a className="btn btn-danger btn-sm float-right" href="#">
                                                <i className="fas fa-trash float-right"></i>Delete</a>
                                            <div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item carousel-item-next carousel-item-left">
                                                        <a href='/updatefilm'>
                                                            <img className="d-block w-100" src="/dist/img/Fast9.jpg" alt="Second slide" style={{ width: 83, height: 300 }} />
                                                            <center><dt>Fast And Furious 9</dt></center>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <a className="btn btn-danger btn-sm float-right" href="#">
                                                <i className="fas fa-trash float-right"></i>Delete</a>
                                            <div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item carousel-item-next carousel-item-left">
                                                        <a href='/updatefilm'>
                                                            <img className="d-block w-100" src="/dist/img/Captain.jpg" alt="Third slide" style={{ width: 83, height: 300 }} />
                                                            <center><dt>Captain America</dt></center>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <a className="btn btn-danger btn-sm float-right" href="#">
                                                <i className="fas fa-trash float-right"></i>Delete</a>
                                            <div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item carousel-item-next carousel-item-left">
                                                        <a href='/updatefilm'>
                                                            <img className="d-block w-100" src="/dist/img/Fast9.jpg" alt="Second slide" style={{ width: 83, height: 300 }} />
                                                            <center><dt>Fast And Furious 9</dt></center>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <a className="btn btn-danger btn-sm float-right" href="#">
                                                <i className="fas fa-trash float-right"></i>Delete</a>
                                            <div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item carousel-item-next carousel-item-left">
                                                        <a href='/updatefilm'>
                                                            <img className="d-block w-100" src="/dist/img/Dora.jpg" alt="First slide" style={{ width: 83, height: 300 }} />
                                                            <center><dt>Dora And The Lost City Of Gold</dt></center>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default AllFilms;
