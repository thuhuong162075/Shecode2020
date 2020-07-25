import React from 'react';
import '../assets/css/Temporary.css'

class Temporary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        age: null,
        };
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
                                />
                            </div>
                            <div className="fild genre">
                                <label>Giới tính</label>
                                <input
                                    type='text'
                                    name='genre'
                                />
                            </div>
                            <div className="fild national">
                                <label>Quốc tịch</label>
                                <input
                                    type='text'
                                    name='national'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="fild cmt">
                                <label>Chứng minh thư</label>
                                <input
                                    type='text'
                                    name='cmt'
                                />
                            </div>
                            <div className="fild DCTT">
                                <label>Địa chỉ thường trú</label>
                                <input
                                    type='text'
                                    name='DCTT'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" fild BKNK">
                                <label>
                                    Ảnh chụp chứng minh thư
                                </label>
                                <input type="file" name="BKNK"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" fild BKNK">
                                <label>
                                    Ảnh chụp các giấy tờ khác cần xác thực
                                </label>
                                <input type="file" name="BKNK"/>
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

