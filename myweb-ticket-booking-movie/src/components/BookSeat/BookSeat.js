import React from 'react';
import "./BookSeat.scss";
import Header from '../header/header';
import axios from "axios";

var list = [{}];
var GioChieu = [];
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
      Ghe: []
    }
    this.renderChonNgay = this.renderChonNgay.bind(this);
    this.getGhebyPhong = this.getGhebyPhong.bind(this);
  }

  UNSAFE_componentWillMount() {
    if(this.props.location.film) {
      sessionStorage.setItem("Film",JSON.stringify(this.props.location.film));
      window.location.reload();
    }
    this.isLocalStorage();
  }
  
  isLocalStorage = () => {
    if(JSON.parse(sessionStorage.getItem('Film')) != null) {
        var tenfilm = JSON.parse(sessionStorage.getItem('Film'))["TenFilm"] ? 
        JSON.parse(sessionStorage.getItem('Film'))["TenFilm"] : null;
    }
    this.setState({TenFilm: tenfilm});
    
  }
  componentDidMount() {
    this.getFilminLichChieu();
  }

  getFilminLichChieu = () => {
    var tenfilm = {TenFilm: this.state.TenFilm};
    console.log(this.state.TenFilm);    
    axios.post('http://localhost:3001/lichchieu/getlichbytenfilm', tenfilm)
        .then((res) => {
          if(res.data.length !== 0) {
            for(const lc in res.data) {
              var lichchieu = (res.data[lc]["ThoiGianChieu"]).split("T");
              var i = 0;
              for(const n in list) {
                if(lichchieu[0] !== list[n].NgayChieu) {
                  i++;
                }
              }
              if(i === list.length) {
                list.push({NgayChieu: lichchieu[0]});
              }
            }
            for(const n in list) {
              var a = [];
              for(const lc1 in res.data) {
                var lichchieu1 = (res.data[lc1]["ThoiGianChieu"]).split("T");
                if(lichchieu1[0] === list[n].NgayChieu) {
                  a.push(lichchieu1[1]);
                }
              }
              list[n]["GioChieu"] = a;
            }
            list.splice(0, 1);
            this.setState({LichChieu: list});
          }
        });
  }

  getGhebyPhong = () => {
    const tenphong = {TenPhong: this.state.TenPhong};
    axios.post('http://localhost:3001/ghe/getGhebyPhong', tenphong)
        .then((res) => {
          if(res.data) {
            this.setState({Ghe: res.data});
              
          }
        });
  }

  HandleClickNgay = (ngaychieu) => {
    for(const i in this.state.LichChieu) {
      if(this.state.LichChieu[i].NgayChieu === ngaychieu) {
        GioChieu = this.state.LichChieu[i].GioChieu;
        this.setState({NgayChieu: ngaychieu});
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
    sessionStorage.setItem("LichChieu",JSON.stringify(this.state.NgayChieu + "T" + giochieu));
    this.setState({GioChieu: giochieu});
    var lichchieu = {
      TenFilm: this.state.TenFilm,
      ThoiGianChieu: this.state.NgayChieu + "T" + giochieu
    }

    axios.post('http://localhost:3001/lichchieu/getphongbygiochieu', lichchieu)
    .then((res) => {
      if(res.data) {
        this.setState({TenPhong: res.data[0]["TenPhong"]});
        this.getGhebyPhong();
      }
    });
  }
  renderChonGioChieu = () => {
    return GioChieu.map((item, index) => {
      return (
        <button className="dropdown-item" key={index} onClick={this.HandleClickGio.bind(this, item)}>{item} </button>
      );
    });
  }

  renderGhe = () => {
    var arr = [];
    this.state.Ghe.forEach((item, index) => {
      if(arr.length === 0) {
        arr.push(item["TenGhe"].slice(0,1));
        
      }
      var a = false;
      arr.map((ghe) => {
        if(item["TenGhe"].slice(0,1) === ghe) {
          a = true;
        }
      return null;
      })
      if(a === false) {
        arr.push(item["TenGhe"].slice(0,1));
      }
    })
      return arr.map((ghe, ind) => 
        <tr key={ind}>
          {
            this.state.Ghe.map((item, index) => {
              if (item["TenGhe"].slice(0,1) === ghe) {
                return (
                  <td className="single" key={index}>{item["TenGhe"]}</td>
                );
              }
              return null;
            })
          }
          <td className="road" colSpan={2}>{ghe}</td>
        </tr>
      );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="block-wrapper">
          <div className="container">
            <h2 style={{color: 'blue'}}>Phim: {this.state.TenFilm}</h2>
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
                    {this.state.GioChieu}</button>&nbsp;
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
                        <td className="single choosing  " data-seat={1302389812}>A12</td>
                        <td className="single  " data-seat={1302389827}>A11</td>
                        <td className="single  " data-seat={1302389842}>A10</td>
                        <td className="single  " data-seat={1302389857}>A09</td>
                        <td className="single  " data-seat={1302389871}>A08</td>
                        <td className="single  " data-seat={1302389885}>A07</td>
                        <td className="single  " data-seat={1302389898}>A06</td>
                        <td className="single  " data-seat={1302389911}>A05</td>
                        <td className="single  " data-seat={1302389925}>A04</td>
                        <td className="single  " data-seat={1302389939}>A03</td>
                        <td className="single  " data-seat={1302389953}>A02</td>
                        <td className="single  " data-seat={1302389967}>A01</td>
                        <td className="road" colSpan={2}>A</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389813}>B12</td>
                        <td className="single  " data-seat={1302389828}>B11</td>
                        <td className="single  " data-seat={1302389843}>B10</td>
                        <td className="single  " data-seat={1302389858}>B09</td>
                        <td className="single  " data-seat={1302389872}>B08</td>
                        <td className="busy  " data-seat={1302389886}>B07</td>
                        <td className="single  " data-seat={1302389899}>B06</td>
                        <td className="single  " data-seat={1302389912}>B05</td>
                        <td className="single  " data-seat={1302389926}>B04</td>
                        <td className="single  " data-seat={1302389940}>B03</td>
                        <td className="single  " data-seat={1302389954}>B02</td>
                        <td className="single  " data-seat={1302389968}>B01</td>
                        <td className="road" colSpan={2}>B</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389814}>C12</td>
                        <td className="single  " data-seat={1302389829}>C11</td>
                        <td className="single  " data-seat={1302389844}>C10</td>
                        <td className="single  " data-seat={1302389859}>C09</td>
                        <td className="single  " data-seat={1302389873}>C08</td>
                        <td className="single  " data-seat={1302389887}>C07</td>
                        <td className="single  " data-seat={1302389900}>C06</td>
                        <td className="single  " data-seat={1302389913}>C05</td>
                        <td className="single  " data-seat={1302389927}>C04</td>
                        <td className="single  " data-seat={1302389941}>C03</td>
                        <td className="single  " data-seat={1302389955}>C02</td>
                        <td className="single  " data-seat={1302389969}>C01</td>
                        <td className="road" colSpan={2}>C</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389815}>D12</td>
                        <td className="single  " data-seat={1302389830}>D11</td>
                        <td className="busy  " data-seat={1302389845}>D10</td>
                        <td className="busy  " data-seat={1302389860}>D09</td>
                        <td className="busy " data-seat={1302389874}>D08</td>
                        <td className="busy " data-seat={1302389888}>D07</td>
                        <td className="busy " data-seat={1302389901}>D06</td>
                        <td className="busy " data-seat={1302389914}>D05</td>
                        <td className="busy " data-seat={1302389928}>D04</td>
                        <td className="busy " data-seat={1302389942}>D03</td>
                        <td className="single  " data-seat={1302389956}>D02</td>
                        <td className="single  " data-seat={1302389970}>D01</td>
                        <td className="road" colSpan={2}>D</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389816}>E12</td>
                        <td className="single  " data-seat={1302389831}>E11</td>
                        <td className="single  " data-seat={1302389846}>E10</td>
                        <td className="single  " data-seat={1302389861}>E09</td>
                        <td className="single  " data-seat={1302389875}>E08</td>
                        <td className="single  " data-seat={1302389889}>E07</td>
                        <td className="single  " data-seat={1302389902}>E06</td>
                        <td className="single  " data-seat={1302389915}>E05</td>
                        <td className="single  " data-seat={1302389929}>E04</td>
                        <td className="single  " data-seat={1302389943}>E03</td>
                        <td className="single  " data-seat={1302389957}>E02</td>
                        <td className="single  " data-seat={1302389971}>E01</td>
                        <td className="road" colSpan={2}>E</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389817}>F12</td>
                        <td className="single  " data-seat={1302389832}>F11</td>
                        <td className="single  " data-seat={1302389847}>F10</td>
                        <td className="single  " data-seat={1302389862}>F09</td>
                        <td className="busy " data-seat={1302389876}>F08</td>
                        <td className="busy " data-seat={1302389890}>F07</td>
                        <td className="busy " data-seat={1302389903}>F06</td>
                        <td className="busy " data-seat={1302389916}>F05</td>
                        <td className="single  " data-seat={1302389930}>F04</td>
                        <td className="single  " data-seat={1302389944}>F03</td>
                        <td className="single  " data-seat={1302389958}>F02</td>
                        <td className="single  " data-seat={1302389972}>F01</td>
                        <td className="road" colSpan={2}>F</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389818}>G12</td>
                        <td className="single  " data-seat={1302389833}>G11</td>
                        <td className="single  " data-seat={1302389848}>G10</td>
                        <td className="single  " data-seat={1302389863}>G09</td>
                        <td className="busy " data-seat={1302389877}>G08</td>
                        <td className="busy " data-seat={1302389891}>G07</td>
                        <td className="busy " data-seat={1302389904}>G06</td>
                        <td className="busy " data-seat={1302389917}>G05</td>
                        <td className="busy " data-seat={1302389931}>G04</td>
                        <td className="busy " data-seat={1302389945}>G03</td>
                        <td className="single  " data-seat={1302389959}>G02</td>
                        <td className="busy " data-seat={1302389973}>G01</td>
                        <td className="road" colSpan={2}>G</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389819}>H12</td>
                        <td className="single  " data-seat={1302389834}>H11</td>
                        <td className="single  " data-seat={1302389849}>H10</td>
                        <td className="single  " data-seat={1302389864}>H09</td>
                        <td className="busy " data-seat={1302389878}>H08</td>
                        <td className="busy " data-seat={1302389892}>H07</td>
                        <td className="busy " data-seat={1302389905}>H06</td>
                        <td className="busy " data-seat={1302389918}>H05</td>
                        <td className="single  " data-seat={1302389932}>H04</td>
                        <td className="single  " data-seat={1302389946}>H03</td>
                        <td className="single  " data-seat={1302389960}>H02</td>
                        <td className="single  " data-seat={1302389974}>H01</td>
                        <td className="road" colSpan={2}>H</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389820}>J12</td>
                        <td className="single  " data-seat={1302389835}>J11</td>
                        <td className="single  " data-seat={1302389850}>J10</td>
                        <td className="single  " data-seat={1302389865}>J09</td>
                        <td className="busy " data-seat={1302389879}>J08</td>
                        <td className="busy " data-seat={1302389893}>J07</td>
                        <td className="busy " data-seat={1302389906}>J06</td>
                        <td className="busy " data-seat={1302389919}>J05</td>
                        <td className="single  " data-seat={1302389933}>J04</td>
                        <td className="single  " data-seat={1302389947}>J03</td>
                        <td className="single  " data-seat={1302389961}>J02</td>
                        <td className="single  " data-seat={1302389975}>J01</td>
                        <td className="road" colSpan={2}>J</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389851}>K12</td>
                        <td className="single  " data-seat={1302389866}>K11</td>
                        <td className="single  " data-seat={1302389880}>K10</td>
                        <td className="single  " data-seat={1302389894}>K09</td>
                        <td className="single  " data-seat={1302389907}>K08</td>
                        <td className="busy " data-seat={1302389920}>K07</td>
                        <td className="single  " data-seat={1302389934}>K06</td>
                        <td className="single  " data-seat={1302389948}>K05</td>
                        <td className="single  " data-seat={1302389962}>K04</td>
                        <td className="single  " data-seat={1302389976}>K03</td>
                        <td className="single  " data-seat={1302389997}>K02</td>
                        <td className="single  " data-seat={1302390002}>K01</td>
                        <td className="road" colSpan={2}>K</td>

                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389852}>L12</td>
                        <td className="single  " data-seat={1302389867}>L11</td>
                        <td className="single  " data-seat={1302389881}>L10</td>
                        <td className="single  " data-seat={1302389895}>L09</td>
                        <td className="single  " data-seat={1302389908}>L08</td>
                        <td className="single  " data-seat={1302389921}>L07</td>
                        <td className="single  " data-seat={1302389935}>L06</td>
                        <td className="single  " data-seat={1302389949}>L05</td>
                        <td className="single  " data-seat={1302389963}>L04</td>
                        <td className="single  " data-seat={1302389977}>L03</td>
                        <td className="single  " data-seat={1302389998}>L02</td>
                        <td className="single  " data-seat={1302390003}>L01</td>
                        <td className="road" colSpan={2}>L</td>

                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389823}>M14</td>
                        <td className="single  " data-seat={1302389838}>M13</td>
                        <td className="single  " data-seat={1302389853}>M12</td>
                        <td className="single  " data-seat={1302389868}>M11</td>
                        <td className="single  " data-seat={1302389882}>M10</td>
                        <td className="single  " data-seat={1302389896}>M09</td>
                        <td className="single  " data-seat={1302389909}>M08</td>
                        <td className="single  " data-seat={1302389922}>M07</td>
                        <td className="single  " data-seat={1302389936}>M06</td>
                        <td className="single  " data-seat={1302389950}>M05</td>
                        <td className="single  " data-seat={1302389964}>M04</td>
                        <td className="single  " data-seat={1302389978}>M03</td>
                        <td className="road" colSpan={2}>M</td>
                        <td className="single  " data-seat={1302389999}>M02</td>
                        <td className="single  " data-seat={1302390004}>M01</td>
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389824}>N14</td>
                        <td className="single  " data-seat={1302389839}>N13</td>
                        <td className="single  " data-seat={1302389854}>N12</td>
                        <td className="single  " data-seat={1302389869}>N11</td>
                        <td className="single  " data-seat={1302389883}>N10</td>
                        <td className="single  " data-seat={1302389897}>N09</td>
                        <td className="single  " data-seat={1302389910}>N08</td>
                        <td className="single  " data-seat={1302389923}>N07</td>
                        <td className="single  " data-seat={1302389937}>N06</td>
                        <td className="busy " data-seat={1302389951}>N05</td>
                        <td className="busy " data-seat={1302389965}>N04</td>
                        <td className="busy " data-seat={1302389966}>N03</td>
                        <td className="road" colSpan={2}>N</td>
                        <td className="single  " data-seat={1302390000}>N02</td>
                        <td className="single  " data-seat={1302390005}>N01</td>
                      </tr>
                      <tr>
                        <td className="single  " data-seat={1302389825}>O13</td>
                        <td className="single  " data-seat={1302389840}>O12</td>
                        <td className="single  " data-seat={1302389855}>O11</td>
                        <td className="single  " data-seat={1302389870}>O10</td>
                        <td className="single  " data-seat={1302389884}>O09</td>
                        <td />
                        <td />
                        <td className="single  " data-seat={1302389924}>O08</td>
                        <td className="single  " data-seat={1302389938}>O07</td>
                        <td className="single  " data-seat={1302389952}>O06</td>
                        <td />
                        <td className="single  " data-seat={1302389979}>O05</td>
                        <td className="single  " data-seat={1302389994}>O04</td>
                        <td className="single  " data-seat={1302389995}>O03</td>
                        <td className="single  " data-seat={1302390001}>O02</td>
                        <td className="single  " data-seat={1302390006}>O01</td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="small_25">
                          <table>
                            <tbody>
                              <tr>
                                <td className="couple  " data-seat={1302389826}>P04</td>
                                <td className="couple  " data-seat={1302389856}>P03</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td colSpan={5} className="small_25">
                          <table>
                            <tbody>
                              <tr>
                                <td className="couple  " data-seat={1302389980}>P02</td>
                                <td className="couple  " data-seat={1302389996}>P01</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <ul className="cinema-note">
                <li className="single">Ghế thường</li>
                <li className="couple">Ghế đôi</li>
                <li class="choosing">Ghế đang chọn</li>
                <li className="busy">Ghế đã chọn</li>
                <li className="road">Lối đi</li>
              </ul>
              
            </div>
            <div className="cinema-btn">
                <div className="text-center">
                  <button className="btn btn-primary">Đặt vé và thanh toán</button>
                </div>
              </div>
          </div>
        </div>
      </div>


    );
  }
}
export default BookSeat;
