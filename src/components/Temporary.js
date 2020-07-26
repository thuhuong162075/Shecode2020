import React from 'react';
import '../assets/css/Temporary.css'

class Temporary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            genre: '',
            national: '',
            cmt: '',
            DCTT: {
                    city: '',
                    district: '',
                    village: '',
                    phuong: ''
                },
            imgCMT: {},
            imgPage: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    render() {
        return (
            <div className="temporary">
                <form className="form">
                    <h1>Đăng ký tạm trú </h1>
                    <div className="content-form">
                        <div className="row">
                            <div className="fild usename">
                                <label>Nhập họ và tên:</label>
                                <input
                                    type='text'
                                    name='username'
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="fild genre">
                                <label>Giới tính</label>
                                <input
                                    type='text'
                                    name='genre'
                                    value={this.state.genre}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="fild national">
                                <label>Quốc tịch</label>
                                <input
                                    type='text'
                                    name='national'
                                    value={this.state.national}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="fild cmt">
                                <label>Chứng minh thư</label>
                                <input
                                    type='text'
                                    name='cmt'
                                    value={this.state.cmt}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="fild DCTT">
                                <label>Địa chỉ thường trú: </label>
                                <div className="DetailDCTT">
                                    <div className="Detail city">
                                        <label>Tỉnh</label>
                                        <select>
                                            <option value="HaiDuong">Hải Dương</option>
                                            <option value="HaNoi" selected>Hà Nội</option>
                                            <option value="HaNam">Hà Nam</option>
                                        </select>
                                    </div>
                                    <div className="Detail district">
                                        <label>Quận/Huyện</label>
                                        <select>
                                            <option value="HoanKiem">Hoàn Kiếm</option>
                                            <option value="HaiBaTrung" selected>Hai Bà Trưng</option>
                                            <option value="ThanhXuan">Thanh Xuân</option>
                                        </select>
                                    </div> 
                                    <div className="Detail phuong">
                                        <label>Phường/Xã</label>
                                        <select>
                                            <option value="BachKhoa">Bách Khoa</option>
                                            <option value="TranDaiNghia" selected>Trần Đại Nghĩa</option>
                                        </select>
                                    </div> 
                                    <div className="Detail village">
                                        <label>Số nhà/làng</label>
                                        <select>
                                            <option value="BachKhoa">21</option>
                                            <option value="TranDaiNghia" selected>30</option>
                                        </select>
                                    </div> 
                                </div>
                                    
                            </div>
                        </div>
                        <div className="row">
                            <div className=" fild imgCMT">
                                <label>
                                    Ảnh chụp chứng minh thư (Chụp 2 mặt)
                                </label>
                                <input type="file" name="imgCMT"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" fild imgPage">
                                <label>
                                    Ảnh chụp các giấy tờ khác cần xác thực khác
                                </label>
                                <input type="file" name="imgPage"/>
                            </div>
                        </div>
                      
                        <input type="submit" value="Submit" className="submit"/>
                    </div>
                    
                </form>
            </div>
        
        );
    }
    }
export default Temporary;

