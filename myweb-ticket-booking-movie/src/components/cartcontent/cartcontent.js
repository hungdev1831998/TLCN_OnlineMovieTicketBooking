// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// // import "bootstrap/dist/css/bootstrap";
// import "./cartcontent.scss";
// class CartContent extends React.Component {

//     render() {
//         return (
//             <div className="cart-content">
//                 <div className="cart-wrap">
//                     <div className="block-title">
//                         <h2>Mua vé<br />Online</h2>
//                     </div>
//                     <div className="block-list">
//                         <div className="select-list" data-cate="film">
//                             <div className="select-header">
//                                 <span />
//                                 <h3 data-holder="Chọn phim">Chọn phim</h3>
//                             </div>
//                             <div className="select-box">
//                                 <ul>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="04ddc71a-4eff-4ee0-b9d9-11806343b829"><h3>Joker (C18)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="0ea50527-7ec3-4e61-99e6-06887c09b939"><h3>NGHĨA ĐỊA MA (C18)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="1c968feb-aeec-4ac3-969d-952bbe4bf34b"><h3>HẢI TẶC (C16)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="2665faf9-0820-4154-aa95-fb7bca7715f8"><h3>ĐIỀU ƯỚC CUỐI CỦA MẸ (C18)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="31b6c9ab-1cff-465f-b35f-5a6f17612d61"><h3>CUỘC SĂN LÙNG (C16)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="3d" data-id="31bd27a5-b0f3-453b-9f4a-2b3435261b0e"><h3>MALEFICENT TIÊN HẮC ÁM 2 3D (C13)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="33583933-2303-4967-b877-2c1107f50157"><h3>LỜI TỪ BIỆT (C13)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="3fa64df1-07c4-4c61-9305-6ef9241d4fc7"><h3>MẢNH ĐẤT CỦA TÔI (C16)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="400fa21d-cb70-4447-b9c7-c0885474d0a7"><h3>GƯƠNG, NHÀ, CHÌA KHOÁ (C16)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="44d46f71-dca4-47a9-9b2d-e7a649e01716"><h3>ĐÀN ÔNG SONG TỬ (C16)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="45d9430d-6a6a-4552-8538-edd2feff8dd2"><h3>MALEFICENT TIÊN HẮC ÁM 2 (C13)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="80f820f4-aec0-4139-aaaf-029c02020b1e"><h3>Thất Sơn Tâm Linh (C18)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="9460b137-1d2d-4974-9166-f16bb9cc099f"><h3>MẨU CHUYỆN DÀI (C16)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="94e6245a-28a6-4daf-b877-ebae17d856ab"><h3>"DÌ" ƠI! ĐỪNG CÓ BỒ! (C16)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="aa345d30-c8c6-4016-91ba-290ec8964cb1"><h3>BẮC KIM THANG (C18)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="b7be03d1-f906-4eaf-a673-eb706a452502"><h3>BIỆT ĐỘI BẤT HẢO (C18)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="bbde685f-ce0c-4cd8-97d7-4c14d7ab0e54"><h3>TIẾNG HÁT NHÂN NGƯ</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="dfb3d8ab-e243-45b8-83b5-90120fbdafe3"><h3>VƯỢT BIỂN (C13)</h3></a></li>
//                                     <li><a href="javascript:void(0);" data-img="img/danongsongtu.jpg" data-format="2d" data-id="ed45b830-e56f-4342-850e-91462deee60c"><h3>THÚ CƯNG SIÊU QUẬY 2D LT</h3></a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="select-list" data-cate="cine">
//                             <div className="select-header">
//                                 <span />
//                                 <h3 data-holder="Chọn rạp">Chọn rạp</h3>
//                             </div>
//                             <div className="select-box">
//                                 <ul className="warning">
//                                     <li><a href="javascript:void(0);"><h3>Vui lòng chọn phim</h3></a></li>
//                                 </ul>
//                                 <ul>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="select-list" data-cate="day">
//                             <div className="select-header">
//                                 <span />
//                                 <h3 data-holder="Chọn ngày">Chọn ngày</h3>
//                             </div>
//                             <div className="select-box">
//                                 <ul className="warning">
//                                     <li><a href="javascript:void(0);"><h3>Vui lòng chọn phim và rạp</h3></a></li>
//                                 </ul>
//                                 <ul>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="select-list" data-cate="hour">
//                             <div className="select-header">
//                                 <span />
//                                 <h3 data-holder="Chọn suất chiếu">Chọn suất chiếu</h3>
//                             </div>
//                             <div className="select-box">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export default CartContent;
