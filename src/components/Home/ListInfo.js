import React from 'react';
import "../../assets/css/ListInfo.css"
import image1 from '../../assets/image/image1.png'
import image2 from '../../assets/image/image2.png'
import image3 from '../../assets/image/image3.png'

function ListInfo() {
        return (
            <div className="ListInfo">
                <div className="title">
                        <p className="cat-title">Thông tin chính phủ</p>
                </div>
                <div className="content">
                        <ul className="group-list">
                                <li className="list-item">
                                    <img className="poster" src= {image1} alt="list-item"/>
                                    <div className="text">
                                        <p className="title-info">HƯỚNG DẪN SỬ DỤNG HỆ THÔNG KHAI BÁO</p>
                                        <a href="#" className="more">
                                        Hệ thống khai báo giúp người dân thuận tiện trong việc đăng kí khai báo tạm trú tạm vắng....
                                        </a>
                                    </div>
                                </li>
                                <li className="list-item">
                                    <img className="poster" src= {image2} alt="list-item"/>
                                    <div className="text">
                                        <p className="title-info">QUY ĐỊNH KHAI BÁO THÔNG TIN TẠM TRÚ TẠM VẮNG</p>
                                        <a href="#" className="more">
                                        Hệ thống khai báo giúp người dân thuận tiện trong việc đăng kí khai báo tạm trú tạm vắng....
                                        </a>
                                    </div>
                                </li>
                                <li className="list-item">
                                    <img className="poster" src= {image3} alt="list-item"/>
                                    <div className="text">
                                        <p className="title-info">CÁC LOẠI GIẤY TỜ ĐỂ ĐĂNG KÍ TẠM TRÚ TẠM VẮNG</p>
                                        <a href="#" className="more">
                                        Người dân khi đi đăng kí cần tạm trú tạm vắng cần chuẩn bị các loại giấy tờ liên quan bao gồm: Chứng minh...
                                        </a>
                                    </div>
                                </li>
                        </ul>
                </div>
            </div>
        );
}

export default ListInfo;
