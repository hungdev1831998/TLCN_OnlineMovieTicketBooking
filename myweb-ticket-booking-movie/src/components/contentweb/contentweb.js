import React from 'react';
import { Link } from 'react-router-dom';
import "./contentweb.scss";
class ContentWeb extends React.Component {
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
                                                <img src="img/logoheader.jpg" className="img-fluid" alt="logoheader" style={{ width: 150, height: 40 }} />
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
                                                    <p>{this.state.usrname}</p>
                                                    <a onClick={this.onLogout} href="">LOGOUT</a>
                                                </li>
                                            }
                                        </ul>
                                    </div>

                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/#"><span className="glyphicon glyphicon-search" /></Link></li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/#contact">CONTACT</Link></li>

                                    </ul>

                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="/#bookticket">BOOK TICKET</a></li>
                                    </ul>

                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="#myPage">HOME</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            {/* Indicators */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                <li data-target="#myCarousel" data-slide-to={1} />
                                <li data-target="#myCarousel" data-slide-to={2} />
                            </ol>
                            {/* Wrapper for slides */}
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <img src="img/danongsongtubg.jpg" className="img-fluid" alt="DanOngSongTuBg" style={{ width: 1688, height: 700 }} />
                                    <div className="carousel-caption">
                                        <h3>Đàn ông song tử</h3>
                                        <p>PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="img/latmat.jpg" className="img-fluid" alt="LatMat" style={{ width: 1688, height: 700 }} />
                                    <div className="carousel-caption">
                                        <h3>Lật mặt. Nhà có khách</h3>
                                        <p>Lật Mặt: Nhà Có Khách xoay quanh chuyến trở về nhà ngỡ tưởng rất vui vẻ đầm ấm của Vy cùng bạn bè.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="img/manudangyeubg2.jpg" className="img-fluid" alt="MaNuDangYeu" style={{ width: 1688, height: 700 }} />
                                    <div className="carousel-caption">
                                        <h3>Ma nữ đáng yêu</h3>
                                        <p>Bộ phim Ma Nữ Đáng Yêu là câu chuyện kể về nhân vật Na Bong-Sun (do Park Bo-Young thủ vai)
                                là phụ bếp trong một nhà hàng</p>
                                    </div>
                                </div>
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
                                {/* <ul className="list-group">
                            <li className="list-group-item">September <span className="label label-danger">Sold Out!</span></li>
                            <li className="list-group-item">October <span className="label label-danger">Sold Out!</span></li>
                            <li className="list-group-item">November <span className="badge">3</span></li>
                        </ul> */}
                                <div className="row text-center">
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src="img/fastandfurious9.jpg" className="img-fluid" alt="Paris" style={{ width: 400, height: 300 }} />
                                            <p><strong>Fast and Furious 9</strong></p>
                                            <p>Tuesday 22 October 2019</p>
                                            <button className="btn" data-toggle="modal" data-target="#myModal">Đặt vé</button>&nbsp;
                                    <button className="btn" data-toggle="modal" data-target="#myModalDetailsFilm">Chi tiết</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src="img/danongsongtu.jpg" className="img-fluid" alt="DanOngSongTu" style={{ width: 400, height: 300 }} />
                                            <p><strong>Đàn ông song tử</strong></p>
                                            <p>Thursday 23 October 2019</p>
                                            <button className="btn" data-toggle="modal" data-target="#myModal">Đặt vé</button>&nbsp;
                                    <button className="btn" data-toggle="modal" data-target="#myModalDetailsFilm">Chi tiết</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src="img/bietdoihoanhao.jpg" className="img-fluid" alt="BietDoiHoanHao" style={{ width: 400, height: 300 }} />
                                            <p><strong>Biệt đội hoàn hảo</strong></p>
                                            <p>Friday 24 October 2019</p>
                                            <button className="btn" data-toggle="modal" data-target="#myModal">Đặt vé</button>&nbsp;
                                    <button className="btn" data-toggle="modal" data-target="#myModalDetailsFilm">Chi tiết</button>
                                        </div>
                                    </div>
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
                            <div className="modal fade" id="myModalDetailsFilm" role="dialog">
                                <div className="modal-dialog">
                                    {/* Modal content*/}
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">×</button>
                                            <h4><span className="glyphicon glyphicon-lock" /> Details Films</h4>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor=""><span className="glyphicon glyphicon-user" /> Tên phim: </label><br /><br />
                                                    <label htmlFor=""><span className="glyphicon glyphicon-user" /> Diễn viên:</label><br /><br />
                                                    <label htmlFor=""><span className="glyphicon glyphicon-user" /> Năm sản xuất:</label><br /><br />
                                                    <label htmlFor=""><span className="glyphicon glyphicon-user" /> Tóm tắt:</label>
                                                    <p className="text-center">Gemini Man là một phim hành động mới lạ
                                                    với sự tham gia của Will Smith trong vai Henry Brogan, một sát thủ ưu tú, người phải đối mặt với kẻ thù
                                                    tối thượng của mình - một bản sao trẻ hơn của chính mình. </p><br />
                                                    <div className="text-center"><button className="btn" data-toggle="modal" data-target="#myModal">Đặt vé</button></div>
                                                </div>


                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
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
                            <br />
                            <h3 className="text-center">From The Blog</h3>
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#home">SPIDER-MAN</a></li>
                                <li><a data-toggle="tab" href="#menu1">AD ASTRA</a></li>
                                <li><a data-toggle="tab" href="#menu2">CHÚ CHÓ ENZO</a></li>
                            </ul>
                            <div className="tab-content">
                                <div id="home" className="tab-pane fade in active">
                                    <h2>SPIDER-MAN: FAR FROM HOME HỨA HẸN SẼ TRỞ THÀNH BOM TẤN THÚ VỊ NHẤT NĂM 2019</h2>
                                    <p>SPIDER-MAN: FAR FROM HOME CÀNG ĐƯỢC ĐÁNH GIÁ HOÀNH TRÁNG HƠN SAU BUỔI CÔNG CHIẾU TẠI MỸ VỪA QUA.</p>
                                </div>
                                <div id="menu1" className="tab-pane fade">
                                    <h2>AD ASTRA - GIẢI MÃ BÍ MẬT NGÂN HÀ</h2>
                                    <p>Với điểm số cao chót vót trên khắp các trang đánh giá, Ad Astra (Tựa Việt: Giải Mã Bí Ẩn Ngân Hà) hiện
                                        là một trong những bom tấn hành động được mong đợi nhất dịp cuối năm 2019 cũng như ứng cử viên sáng giá
                                        cho làng loạt giải thưởng. Tác phẩm là sự kết hợp của nhiều yếu tố hấp dẫn như dàn diễn viên tên tuổi gồm
                                Brad Pitt, Tommy Lee Jones,…, kĩ xảo hoành tráng của hãng WETA hay những cảnh hành động kịch tính,…</p>
                                </div>
                                <div id="menu2" className="tab-pane fade">
                                    <h2>CUỘC ĐỜI PHI THƯỜNG CỦA CHÚ CHÓ ENZO - BỘ PHIM CẢM ĐỘNG KHÔNG THỂ BỎ QUA THÁNG NÀY</h2>
                                    <p>Người yêu chó tin rằng các thành viên bốn chân của gia đình là những sinh vật có sự thấu hiểu cực kỳ cao,
                                        vô cùng thông minh, và đặc biệt là rất trung thành. Trong tác phẩm chuyển thể từ quyển tiểu thuyết ăn khách
                                        cùng tên của Garth Stein, một đời người đã được kể lại thông qua góc nhìn của… chú chó Enzo (do Kevin Costner
                                lồng tiếng).</p>
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
