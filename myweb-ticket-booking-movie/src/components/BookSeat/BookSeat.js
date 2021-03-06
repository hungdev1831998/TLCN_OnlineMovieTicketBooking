import React from 'react';
import "./BookSeat.scss";
import Header from '../header/header';
import axios from "axios";
import { Link } from 'react-router-dom';
var list = [{}];
var GioChieu = [];
var stt = [];
var strghe = "";
class BookSeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TenFilm: null,
      LichChieu: [{
        NgayChieu: null,
        GioChieu: []
      }],
      NgayChieu: 'CHỌN NGÀY',
      GioChieu: 'CHỌN SUẤT CHIẾU',
      TenPhong: null,
      Ghe: [],
      choosing: []
    }
    this.renderChonNgay = this.renderChonNgay.bind(this);
    this.getGhebyPhong = this.getGhebyPhong.bind(this);
  }

  UNSAFE_componentWillMount() {
    if (this.props.location.film) {
      sessionStorage.setItem("Film", JSON.stringify(this.props.location.film));
      window.location.reload();
    }
    this.isLocalStorage();
  }

  isLocalStorage = () => {
    if (JSON.parse(sessionStorage.getItem('Film')) != null) {
      var tenfilm = JSON.parse(sessionStorage.getItem('Film'))["TenFilm"] ?
        JSON.parse(sessionStorage.getItem('Film'))["TenFilm"] : null;
    }
    this.setState({ TenFilm: tenfilm });

  }
  componentDidMount() {
    this.getFilminLichChieu();
  }

  getFilminLichChieu = () => {
    var tenfilm = { TenFilm: this.state.TenFilm };
    axios.post('http://localhost:3001/lichchieu/getlichbytenfilm', tenfilm)
      .then((res) => {
        if (res.data.length !== 0) {
          for (const lc in res.data) {
            var lichchieu = (res.data[lc]["ThoiGianChieu"]).split("T");
            var i = 0;
            for (const n in list) {
              if (lichchieu[0] !== list[n].NgayChieu) {
                i++;
              }
            }
            if (i === list.length) {
              list.push({ NgayChieu: lichchieu[0] });
            }
          }
          for (const n in list) {
            var a = [];
            for (const lc1 in res.data) {
              var lichchieu1 = (res.data[lc1]["ThoiGianChieu"]).split("T");
              if (lichchieu1[0] === list[n].NgayChieu) {
                a.push(lichchieu1[1]);
              }
            }
            list[n]["GioChieu"] = a;
          }
          list.splice(0, 1);
          this.setState({ LichChieu: list });
        }
      });
  }

  getGhebyPhong = () => {
    const tenphong = { TenPhong: this.state.TenPhong };
    axios.post('http://localhost:3001/ghe/getGhebyPhong', tenphong)
      .then((res) => {
        if (res.data) {
          this.setState({ Ghe: res.data });

        }
      });
  }

  HandleClickNgay = (ngaychieu) => {
    for (const i in this.state.LichChieu) {
      if (this.state.LichChieu[i].NgayChieu === ngaychieu) {
        GioChieu = this.state.LichChieu[i].GioChieu;
        this.setState({ NgayChieu: ngaychieu });
      }
    }
  }

  renderChonNgay = () => {
    return this.state.LichChieu.map((item, index) => {
      return (
        <button
          className="dropdown-item"
          onClick={this.HandleClickNgay.bind(this, item.NgayChieu)} key={index}
        >
          {item.NgayChieu}
        </button>
      )
    });
  }
  HandleClickGio = (giochieu) => {
    sessionStorage.setItem("LichChieu", JSON.stringify(this.state.NgayChieu + "T" + giochieu));
    this.setState({ GioChieu: giochieu });
    var lichchieu = {
      TenFilm: this.state.TenFilm,
      ThoiGianChieu: this.state.NgayChieu + "T" + giochieu
    }

    axios.post('http://localhost:3001/lichchieu/getphongbygiochieu', lichchieu)
      .then((res) => {
        if (res.data) {
          this.setState({ TenPhong: res.data[0]["TenPhong"] });
          this.getGhebyPhong();
        }
      });
  }
  renderChonGioChieu = () => {
    return GioChieu.map((item, index) => {
      return (
        <button className="dropdown-item" key={index} onClick={this.HandleClickGio.bind(this, item)}>{item.substring(0, item.length - 5)} </button>
      );
    });
  }

  renderGhe = () => {
    var arr = [];
    this.state.Ghe.forEach((item, index) => {
      if (arr.length === 0) {
        arr.push(item["TenGhe"].slice(0, 1));

      }
      var a = false;
      arr.map((ghe) => {
        if (item["TenGhe"].slice(0, 1) === ghe) {
          a = true;
        }
        return null;
      })
      if (a === false) {
        arr.push(item["TenGhe"].slice(0, 1));
      }
    })
    return arr.map((ghe, ind) =>
      <tr key={ind}>
        {
          this.state.Ghe.map((item, index) => {
            var status = 'single ';
            if (item["TenGhe"].slice(0, 1) === ghe) {
              if (item["status"] === true) {
                status = 'busy';
              } else {
                for (var i = 0; i < this.state.choosing.length; i++) {
                  if (item["TenGhe"] === this.state.choosing[i]) {
                    status += "choosing";
                    break;
                  }
                }
              }
              return (
                <td className={status} key={index} onClick={this.handleGheOnclick.bind(this, item["TenGhe"], status)}>{item["TenGhe"]}</td>
              );
            }
            return null;
          })
        }
        <td className="road" colSpan={2}>{ghe}</td>
      </tr>
    );
  }


  handleGheOnclick = (tenghe, status) => {
    if (status === "single choosing") {
      stt.splice(stt.indexOf(tenghe), 1);
    } else {
      if (status !== "busy") {
        var exist = false;
        for (var i = 0; i < stt.length; i++) {
          if (stt[i] === tenghe) {
            exist = true;
            break;
          }
        }
        if (!exist) {
          stt.push(tenghe);
        }
      }
    }
    this.setState({ choosing: stt });
    strghe = "";
    stt.forEach((item) => {
      strghe += (item + ', ');
    });
  }

  handleOnclickXacNhanDatVe = () => {
    if (localStorage.getItem('user') && this.state.choosing) {
      var thoigianthuc = new Date();
      var thoigianxacthuc = thoigianthuc.getFullYear() + "-";
      if (thoigianthuc.getMonth() + 1 < 10) {
        thoigianxacthuc += "0";
      }
      thoigianxacthuc += (thoigianthuc.getMonth() + 1) + "-";
      if (thoigianthuc.getDate() < 10) {
        thoigianxacthuc += "0";
      }
      thoigianxacthuc += thoigianthuc.getDate() + "T";
      if (thoigianthuc.getHours() < 10) {
        thoigianxacthuc += "0";
      }
      thoigianxacthuc += thoigianthuc.getHours() + ":";
      if (thoigianthuc.getMinutes() < 10) {
        thoigianxacthuc += "0";
      }
      thoigianxacthuc += thoigianthuc.getMinutes() + ":";
      if (thoigianthuc.getSeconds() < 10) {
        thoigianxacthuc += "0";
      }
      thoigianxacthuc += thoigianthuc.getSeconds() + ".000Z";
      var ve = {
        email: JSON.parse(localStorage.getItem('user'))['email'],
        TenFilm: this.state.TenFilm,
        TenPhong: this.state.TenPhong,
        TenGhe: this.state.choosing,
        ThoiGianChieu: this.state.NgayChieu + "T" + this.state.GioChieu,
        ThoiGianDat: thoigianxacthuc
      }
      axios.post('http://localhost:3001/ve/addve', ve)
        .then((res) => {
          if (res.data['mess'] === "Them ve thanh cong!") {
            var ghes = [];
            this.state.choosing.forEach(item => {
              var a = {
                TenPhong: this.state.TenPhong,
                TenGhe: item,
                status: 'true'
              }
              ghes.push(a);
            });
            const tongthu = {TenFilm: this.state.TenFilm,
                             TongThu: this.state.choosing.length}
            axios.put('http://localhost:3001/film/updateTongThu', tongthu)
                .then ((res) => {
                  ghes.forEach(item => {
                    axios.put('http://localhost:3001/ghe/updatestatus', item)
                      .then((res) => {
                        if (res.data['mess'] === "update status success!") {
                          this.setState({ choosing: [] });
                          strghe = "";
                          stt = [];
                          return (
                            window.location = '/',
                            window.alert('Đặt vé thành công!')
                          )
                        }
      
                      });
                  });
                });
            
          }
        });
    } else {
      return window.location = '/login';
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="block-wrapper">
          <div className="container">
            <h2 style={{ color: 'blue' }}>Phim: {this.state.TenFilm}</h2>
            <div className="btn-group" style={{ marginTop: '8px' }}>
              <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" >
                  {this.state.NgayChieu}</button>&nbsp;
                <div className="dropdown-menu">
                  {this.renderChonNgay()}
                </div>
              </div>
            </div>
            <div className="btn-group" style={{ marginTop: '8px' }}>
              <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" >
                  {this.state.GioChieu.substring(0, this.state.GioChieu.length - 5)}</button>&nbsp;
                  <div className="dropdown-menu">
                  {this.renderChonGioChieu()}
                </div>
              </div>
            </div>

            <div className="cinema-wrap">
              <h3 className="cinema-title">Màn hình</h3>
              <div className="cinema-seat" style={{ display: 'block' }}>
                <div className="tbl-wrap">
                  <table>
                    <tbody>
                      {this.renderGhe()}

                      <tr>
                        <td className="busy  " data-seat={1302389825}>P13</td>
                        <td className="busy  " data-seat={1302389840}>P12</td>
                        <td className="busy  " data-seat={1302389855}>P11</td>
                        <td className="busy  " data-seat={1302389870}>P10</td>
                        <td className="busy  " data-seat={1302389884}>P9</td>
                        <td />
                        <td />
                        <td className="busy  " data-seat={1302389924}>P8</td>
                        <td className="busy  " data-seat={1302389938}>P7</td>
                        <td className="busy  " data-seat={1302389952}>P6</td>
                        <td />
                        <td className="busy  " data-seat={1302389979}>P5</td>
                        <td className="busy  " data-seat={1302389994}>P4</td>
                        <td className="busy  " data-seat={1302389995}>P3</td>
                        <td className="busy  " data-seat={1302390001}>P2</td>
                        <td className="busy  " data-seat={1302390006}>P1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <ul className="cinema-note">
                <li className="single">Ghế thường</li>
                <li className="choosing">Ghế đang chọn</li>
                <li className="busy">Ghế đã chọn</li>
                <li className="road">Lối đi</li>
              </ul>
            </div>


            {/* Container (thanh toán Section) */}
            <div id="pay">
              <div className="ticket-btn">
                <div className="text-center">
                  <Link to="/">
                    <button className="btn btn-primary">Hủy</button> &nbsp;&nbsp;
                  </Link>
                  <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" >Thanh toán</button>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                  {/* Modal content*/}
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4><span className="glyphicon glyphicon-lock" /> Thanh toán vé</h4>
                      <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    <div className="modal-body">
                      <form >
                        <div className="form-group">
                          <label htmlFor=""><span className="glyphicon glyphicon-user" /> Tên phim: {this.state.TenFilm} </label><br />
                          <label htmlFor=""><span className="" /> Thời gian chiếu: {this.state.GioChieu.substring(0, this.state.GioChieu.length - 5)}</label><br />
                          <label htmlFor="psw"><span className="" /> Ngày chiếu: {this.state.NgayChieu}</label><br />
                          <label htmlFor="psw"><span className="" /> Tên phòng chiếu: 0{this.state.TenPhong}</label><br />
                          <label htmlFor="psw"><span className="" /> {this.state.choosing.length} ghế: {strghe.substring(0, strghe.length - 2)}</label><br />
                          <label htmlFor="psw"><span className="" /> Số tiền: {this.state.choosing.length * 50000} đồng</label>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
                        Hủy <span className="glyphicon glyphicon-remove" />
                      </button>
                      <button type="submit" className="btn btn-success" onClick={this.handleOnclickXacNhanDatVe.bind(this)}>Xác nhận
                                <span className="glyphicon glyphicon-ok" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    );
  }
}
export default BookSeat;
