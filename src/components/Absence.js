import React from 'react';
import '../assets/css/Absence.css'
import {   Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import tick from '../assets/image/tick.png'
class Absence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        age: null,
        modal: false
        };
    }
    handleSubmit = ()=>{
        this.setState({modal: !this.state.modal})
      }
    render() {
        return (
            <div className="absence">
                <form className="form">
                    <h1>Đăng ký tạm vắng </h1>
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
                                    Bản khai nhân khẩu
                                </label>
                                <input type="file" name="BKNK"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" fild BKNK">
                                <label>
                                    Phiếu thay đổi hộ khẩu, nhân khẩu
                                </label>
                                <input type="file" name="BKNK"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" fild BKNK">
                                <label>
                                    Giấy tờ chứng minh chỗ ở hợp pháp
                                </label>
                                <input type="file" name="BKNK"/>
                            </div>
                        </div>
                        <Button onClick={this.handleSubmit} value="Submit" className="submit">Nộp đơn</Button>
                    </div>
                    
                </form>
                <Modal isOpen={this.state.modal} toggle={this.handleSubmit} >
        <ModalHeader >Xác nhận nộp đơn</ModalHeader>
        <ModalBody style={{textAlign: "center"}}>
            <img src = {tick} alt="" style={{width: "20%", color: "green", margin: "1rem"}}/>
            {/* <Spinner size="sm" color="primary" /> */}
            <br/>
            <text>Nộp đơn thanh công</text>
        </ModalBody>
        <ModalFooter>
        
        <Button color="secondary" onClick={this.handleSubmit} >Cancel</Button>
          <Button color="success" onClick={this.handleSubmit}>OK</Button>{' '}
        </ModalFooter>
      </Modal>
            </div>
        
        );
    }
    }
export default Absence;

