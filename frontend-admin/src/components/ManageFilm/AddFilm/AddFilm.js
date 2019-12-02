import React, { Component } from 'react';

class AddFilm extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Add Film</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">AddFilm</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-9 mx-auto d-block">
                                    <div className="card">
                                        <div className="card-header p-2">
                                            <ul className="nav nav-pills">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#settings" data-toggle="tab">Information</a>
                                                </li>
                                            </ul>
                                        </div>{/* /.card-header */}
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="active tab-pane" id="settings">
                                                    <form className="form-horizontal">
                                                        <div className="form-group row">
                                                            <label htmlFor="inputFilmName" className="col-sm-2 col-form-label">Film Name</label>
                                                            <div className="col-sm-10">
                                                                <input type="text" className="form-control" id="inputFilmName" placeholder="Film Name" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Directors</label>
                                                            <div className="col-sm-10">
                                                                <input type="text" className="form-control" id="inputName" placeholder="Directors" />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label htmlFor="inputName2" className="col-sm-2 col-form-label">Country of Manufacture</label>
                                                            <div className="col-sm-10">
                                                                <input type="text" className="form-control" id="inputName2" placeholder="Password" />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Summary</label>
                                                            <div className="col-sm-10">
                                                                <textarea className="form-control" id="inputExperience" placeholder="Summary" defaultValue={""} />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label htmlFor="inputName2" className="col-sm-2 col-form-label">Upload Image</label>
                                                            <div className="col-sm-10">
                                                                <div className="custom-file">
                                                                    <input type="file" className="custom-file-input" id="exampleInputFile" />
                                                                    <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12">
                                                                <a href="/allfilms" className="btn btn-secondary">Cancel</a>
                                                                <button type="submit" className="btn btn-success float-right">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

}

export default AddFilm;
