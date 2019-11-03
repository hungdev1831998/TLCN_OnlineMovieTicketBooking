import React from 'react';
import "./contentweb.scss";
import Header from "../header/header";
import axios from "axios";
class ContentWeb extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            films: []
        };
    }

    UNSAFE_componentWillMount() {
        axios.get("http://localhost:3001/film/getfilms")
        .then((res) => {
            this.setStateFilms(res.data);
        });
    }

    setStateFilms = (data) => {
        this.setState({films: data});
    }

    render() {
        return (
            <div>
                <header>
                    <div>
                        <Header />
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            {/* Indicators */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                <li data-target="#myCarousel" data-slide-to={1} />
                                <li data-target="#myCarousel" data-slide-to={2} />
                            </ol>
                            {/* Wrapper for slides */}
                            <div className="carousel-inner" role="listbox">
                                {this.state.films.map((item, index) => 
                                    (index === 0) ? 
                                        <div className="item active" key={index}>
                                            <img key={index} src={item.AnhBia} className="img-fluid" alt={item.TenFilm} style={{ width: 1688, height: 700 }} />
                                         </div>
                                    : 
                                        <div className="item" key={index}>
                                            <img key={index} src={item.AnhBia} className="img-fluid" alt={item.TenFilm} style={{ width: 1688, height: 700 }} />
                                        </div>
                                )}
                            </div>
                            {/* Left and right controls */}
                            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                        {/* Container (Bookticket Section) */}
                        <div id="bookticket" className="bg-1">
                            <div className="container">
                                <h3 className="text-center">Phim đang hot</h3>
                                <p className="text-center"><br /> Remember to book your tickets!</p>
                                <div className="row text-center">
                                    {this.state.films.map((item, index) => 
                                        <div className="col-sm-4" key={index + 100}>
                                            <div className="thumbnail" >
                                                <img key={index} src={item.AnhBia} className="img-fluid" alt={item.TenFilm} style={{ width: 400, height: 300 }} />
                                                <p><strong>{item.TenFilm}</strong></p>
                                                <button className="btn" data-toggle="modal" data-target="#myModal">Đặt vé</button>&nbsp;
                                                <button className="btn" data-toggle="modal" data-target={"#" + (index + 100000)}>Chi tiết</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Modal */}
                            <div className="modal fade" id="myModal" role="dialog">
                                <div className="modal-dialog">
                                    {/* Modal content*/}
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">×</button>
                                            <h4><span className="glyphicon glyphicon-lock" /> Tickets</h4>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="psw"><span className="glyphicon glyphicon-shopping-cart" /> Tickets, $23 per person</label>
                                                    <input type="number" className="form-control" id="psw" placeholder="How many?" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="usrname"><span className="glyphicon glyphicon-user" /> Send To</label>
                                                    <input type="text" className="form-control" id="usrname" placeholder="Enter email" />
                                                </div>
                                                <button type="submit" className="btn btn-block">Pay
                                                    <span className="glyphicon glyphicon-ok" />
                                                </button>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
                                                <span className="glyphicon glyphicon-remove" /> Cancel
                                            </button>
                                            <a href="/">help?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Modal Chi tiết*/}
                            {this.state.films.map((item, index) => 
                                    <div className="modal fade" id={index + 100000} role="dialog" key={index + 1000}>
                                     <div className="modal-dialog" >
                                         {/* Modal content*/}
                                         <div className="modal-content" >
                                             <div className="modal-header" >
                                                 <button type="button" className="close" data-dismiss="modal" >×</button>
                                                 <h4><span className="glyphicon glyphicon-lock" /> Details Films</h4>
                                             </div>
                                             <div className="modal-body" >
                                                 <form >
                                                     <div className="form-group" >
                                                         <label htmlFor="" ><span className="glyphicon glyphicon-user" /> Tên phim: {item.TenFilm}</label><br /><br />
                                                         <label htmlFor=""><span className="glyphicon glyphicon-user" /> Đạo diễn: {item.DaoDien}</label><br /><br />
                                                         <label htmlFor=""><span className="glyphicon glyphicon-user" /> Nước sản xuất: {item.TenNuocSX}</label><br /><br />
                                                         <label htmlFor=""><span className="glyphicon glyphicon-user" /> Tóm tắt: </label>
                                                         <p className="text-center">{item.TomTat}</p><br />
                                                         <div className="text-center"><button className="btn" data-toggle="modal" data-target="#myModal">Đặt vé</button></div>
                                                     </div>
                                                 </form>
                                             </div>
                                         </div>
                                     </div>
                                 </div>   
                            )}
                        </div>
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
                                            <button className="btn pull-right" type="submit">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default ContentWeb;
