import React from 'react';
import { Link } from 'react-router-dom';
import "./bookticket.scss";
class BookTicket extends React.Component {

    render() {
        return (
            <div>
                <div className="block-wrapper">
                    <div className="container">
                        <div>
                            <h2 style={{color: 'blue'}}>MUA VÉ ONLINE</h2>
                            <div className="btn-group" style={{ marginTop: '8px' }}>
                                <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        CHỌN PHIM</button>&nbsp;
                                <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">VÙNG ĐẤT THÂY MA: CÚ BẮN ĐÚP (C18)</a>
                                        <a className="dropdown-item" href="#">HỘP CƠM PHIỀN PHỨC</a>
                                        <a className="dropdown-item" href="#">SALMA VÀ ĐIỀU ƯỚC NHIỆM MÀU (C13)</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Another link</a>
                                    </div>
                                </div>
                            </div>


                            <div className="btn-group" style={{ marginTop: '8px' }}>
                                <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        CHỌN RẠP</button>&nbsp;
                                <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">TUẤN HƯNG TPHCM</a>
                                        <a className="dropdown-item" href="#">TUẤN HƯNG NHA TRANG</a>
                                        <a className="dropdown-item" href="#">TUẤN HƯNG ĐÀ LẠT</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Another link</a>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-group" style={{ marginTop: '8px' }}>
                                <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        CHỌN NGÀY</button>&nbsp;
                                <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">HÔM NAY: 2/11/2019</a>
                                        <a className="dropdown-item" href="#">CHỦ NHẬT: 3/11/2019</a>
                                        <a className="dropdown-item" href="#">THỨ HAI: 4/11/2019</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Another link</a>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-group" style={{ marginTop: '8px' }}>
                                <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        CHỌN SUẤT CHIẾU</button>&nbsp;
                                <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">11:00AM</a>
                                        <a className="dropdown-item" href="#">15:00PM</a>
                                        <a className="dropdown-item" href="#">19:00PM</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Another link</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br /> <br /> <br />


                        <div className="row">
                            <div className="details col-md-8 col-sm-8 col-xs-12">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-xs-8 col-xs-offset-2 col-md-offset-0">
                                        <div className="detail-feat-img">
                                            <img src="https://galaxycine.vn/media/2019/8/30/25-t6-1sht-campb-vietnam_1567154352835.jpg" style={{ width: 225.55, height: 400 }}></img>
                                        </div>
                                    </div>
                                    <div className="detail-info">
                                        <div className="detail-info-row">
                                            <label>Diễn viên:&nbsp;</label>
                                            <div className="detail-info-right">
                                                <a href="/dien-vien/arnold-schwarzenegger">Arnold Schwarzenegger,&nbsp;</a>
                                                <a href="/dien-vien/linda-hamilton">Linda Hamilton,&nbsp;</a>
                                                <a href="/dien-vien/mackenzie-davis">Mackenzie Davis</a>
                                            </div>
                                        </div>
                                        <div className="detail-info-row">
                                            <label>Đạo diễn:&nbsp;</label>
                                            <div className="detail-info-right">
                                                <a href="/dao-dien/tim-miller">Tim Miller</a>
                                            </div>
                                        </div>
                                        <div className="detail-info-row">
                                            <label>Quốc gia:&nbsp;</label>
                                            <div className="detail-info-right">
                                                <a href="javascript:;">Mỹ</a>
                                            </div>
                                        </div>
                                        <div className="detail-info-row">
                                            <label>Thể loại:&nbsp;</label>
                                            <div className="detail-info-right">
                                                <a href="/dien-anh/the-loai/hanh-dong">Hành động,&nbsp;</a>
                                                <a href="/dien-anh/the-loai/gia-tuong">Giả Tưởng</a>
                                            </div>
                                        </div>
                                        <div className="detail-info-row">
                                            <label>Nhà sản xuất:&nbsp;</label>
                                            <div className="detail-info-right">
                                                <a href="javascript:;">Paramount Pictures</a>
                                            </div>
                                        </div>
                                        <div className="detail-info-row">
                                            <label>Ngày:&nbsp;</label>
                                            <div className="detail-info-right">31/10/2019</div>
                                        </div>
                                    </div>



                                </div>


                                <div className="row detail-description">
                                    <div className="col-md-12 col sm-12 col-xs-12">
                                        <div className="content-text">
                                            <section id="info">
                                                <h2>Nội dung phim</h2>
                                                <div className="content-text-actors-info content-text">
                                                    <auto-folded folded-height={200} className="ng-isolate-scope">
                                                        <div>
                                                            <div className="shadow hidden">
                                                            </div>
                                                            <div className="auto-folded" ng-transclude style={{ display: 'block' }}>
                                                                <p className="ng-scope">Terminator: Dark Fate hứa hẹn là phần phim chắc chắn sẽ khiến các fan hâm mộ thỏa
                                                                  mãn bởi những pha hành động cực kỳ chất lượng. Cùng với đó, sự trở lại của đạo diễn James
                                                                  Cameron,&nbsp;Linda Hamilton và Arnold Schwarzenegge càng đem đến nhiều hơn sự kích thích và phấn khích.&nbsp;
                      </p>
                                                            </div>
                                                            <a href ng-click="toggleFoldedState()" className="auto-folded--more" />
                                                        </div>
                                                    </auto-folded>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <section id="movieSidebar" className="hidden-xs">
                                    <h3>Phim đang chiếu</h3>
                                    <div className="row movies-group">
                                        <div className="col-md-13 col-sm-12 col-xs-12 movie-item">
                                            <div className="article-movie-home">
                                                <img src="https://galaxycine.vn/media/2019/10/31/450x300_1572489577169.png" className="loading" data-was-processed="true" />
                                                <a href="/dat-ve/terminator-dark-fate">
                                                    <div className="decription-hover overlay">
                                                        <div className="movies-content">
                                                            <i className="icon-c18" /><br />
                                                            <div class="form-row text-center">
                                                                <div class="col-12">
                                                                    <button type="submit" class="btn btn-primary">Mua vé</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <p className="text-center">Terminator: Dark Fate</p>
                                                <p className="text-center">Kẻ Hủy Diệt: Vận Mệnh Đen Tối</p>
                                            </div>
                                        </div>
                                        <div className="col-md-13 col-sm-12 col-xs-12 movie-item">
                                            <div className="article-movie-home">
                                                <img src="https://www.lottecinemavn.com/Media/WebAdmin/a63f65e0607a47b8803329e07cc31905.jpg" style={{ width: 450, height: 300 }} className="loading" data-was-processed="true" />
                                                <a href="/dat-ve/thu-cung-sieu-quay">
                                                    <div className="decription-hover overlay">
                                                        <div className="movies-content">
                                                            <i className="icon-c18" />
                                                            <div class="form-row text-center">
                                                                <div class="col-12">
                                                                    <button type="submit" class="btn btn-primary">Mua vé</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="title-movie">
                                                <p className="text-center">Câu chuyện của chúng ta</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BookTicket;
