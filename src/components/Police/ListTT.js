import React, { Component } from 'react';
import Header from './Header'
import '../../assets/css/Temporary.css'
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const list = [{
    "name": "Mark",
    "CMT": "112233445566"
},
{
    "name": "Jacob",
    "CMT": "123456789121"
}, 
{
    "name": "Nguyen Thi Mung",
    "CMT": "161022012341"
}
]
export default class ListTT extends Component {
    constructor(props){
        super(props);
        this.state={
            modal: false,
            del: false
        }
    }
    handleCheck = (id)=>{
        console.log(id)
        this.setState({modal: !this.state.modal})
    }
    handleCancel = () => {
        this.setState({modal: !this.state.modal})
    }
    onDelete = ()=>{
        // var x = list.indexOf(id);
        // delete list[x];
        // console.log(id, x, list)
        this.setState({del: !this.state.del})
    }
    handleDel = (id) => {

    }
    render() {
        const count = 0;
        return (
            <div>
                <Header/>
                <div className="container-fluid" style={{marginTop: "3%"}}>
                <center>
                <h3>DANH SÁCH CÔNG DÂN ĐĂNG KÝ TẠM TRÚ</h3>
                </center>
                <Table bordered striped style={{textAlign: "center", justifyContent: "center"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Họ tên</th>
          <th>Số CMT/CCCD</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
       {list.map((item)=>
        <tr id={item.CMT}>
          <th scope="row">{count+1}</th>
          <td>{item.name}</td>
          <td>{item.CMT}</td>
          <td className="row" style={{ display: "inline-block"}}>
                <Button id={item.CMT} onClick={()=>this.handleCheck(item.CMT)} color="success" style={{marginRight: "1rem  "}}>Kiểm tra</Button> 
                <Button onClick={()=>this.onDelete(item.CMT)} color="danger">Hủy</Button>
          </td>
        </tr>
        
       )} 
       <Modal isOpen={this.state.del} toggle={this.onDelete} >
        <ModalHeader >Xác nhận hủy đơn</ModalHeader>
        <ModalBody>
            Bạn có chắc chắn hủy đơn thông tin?
        </ModalBody>
        <ModalFooter>
        
        <Button color="secondary" onClick={this.onDelete} >Cancel</Button>
          <Button color="danger" onClick={this.handleDel}>Hủy</Button>{' '}
        </ModalFooter>
      </Modal>
      </tbody>
    </Table>
                </div>
                <Modal size="lg" toggle={this.handleCancel} isOpen={this.state.modal}>
                    <ModalHeader>Kiểm tra thông tin công dân</ModalHeader>
                    <ModalBody style={{display: "inline"}}>
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
                    </ModalBody>
                    <ModalFooter>
                    <Button type="submit" color="secondary" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit" color="success" onClick={this.fetchSubmit}>Xác nhận</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
