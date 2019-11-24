import React from 'react';
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
                <div>
                    <footer className="text-center">
                        <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
                            <span className="glyphicon glyphicon-chevron-up" />
                        </a><br /><br />
                        <p>Movie Tickets Online Booking </p>
                    </footer>
                    {/* Container (Contact Section) */}
                    <div id="contact" className="container">
                            <h3 className="text-center">Contact</h3>
                            <p className="text-center"><em>We love our fans!</em></p>
                            <div className="row">
                                <div className="col-md-4">
                                    <p>Address</p>
                                    <p><span className="glyphicon glyphicon-map-marker" />Long An, Việt Nam</p>
                                    <p><span className="glyphicon glyphicon-phone" />Phone: 0348010604</p>
                                    <p><span className="glyphicon glyphicon-envelope" />Email: phimviet789@mail.com</p>
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-sm-6 form-group">
                                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                                        </div>
                                        <div className="col-sm-6 form-group">
                                            <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                                        </div>
                                    </div>
                                    <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows={5} defaultValue={""} />
                                    <br />
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <button className="btn btn-send pull-right" type="submit">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
        );
    }
}
export default Footer;
