import React, { Component } from 'react';
import Header from './Header'
import cccd from '../../assets/image/cccd.png';
import hk from '../../assets/image/hk.jpg'
import '../../assets/css/Temporary.css'
import tick from '../../assets/image/tick.png'
import { Spinner, Table, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const list = [{
    "id": "1",
    "name": "Mark",
    "CMT": "112233445566"
},
{
    "id": "2",
    "name": "Jacob",
    "CMT": "123456789121"
}, 
{
    "id": "3",
    "name": "Nguyen Thi Mung",
    "CMT": "161022012341"
}
]
export default class ListTT extends Component {
    constructor(props){
        super(props);
        this.state={
            modal: false,
            del: false,
            xn : false, 
            count: 0,
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
        this.setState({del: !this.state.del})
    }
    handleXN = ()=>{
        this.setState({xn: !this.state.xn})
    }
    handleXNout = () => {
        this.setState({
            xn: !this.state.xn,
            modal: !this.state.modal })
    }
    increase = ()=>{
        this.setState({
            count: this.state.count + 1
        })
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
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.CMT}</td>
          <td className="row" style={{ display: "inline-block"}}>
                <Button id={item.CMT} onClick={()=>this.handleCheck(item.CMT)} color="success" 
                    style={{marginRight: "1rem"}}>Kiểm tra</Button> 
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
                                <label>Họ và tên:</label>
                                <input
                                    disabled
                                    placeholder="Nguyen Thi Mung"
                                    type='text'
                                    name='username'
                                />
                            </div>
                            <div className="fild genre">
                                <label>Giới tính</label>
                                <input
                                disabled
                                placeholder="Nu"
                                    type='text'
                                    name='genre'
                                />
                            </div>
                            <div className="fild national">
                                <label>Quốc tịch</label>
                                <input
                                disabled
                                placeholder="Viet Nam"
                                    type='text'
                                    name='national'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="fild cmt">
                                <label>CMT/CCCD</label>
                                <input
                                disabled 
                                placeholder="162265666651"
                                    type='text'
                                    name='cmt'
                                />
                            </div>
                            <div className="fild DCTT">
                                <label>Địa chỉ thường trú</label>
                                <br/>
                                <text>So 12, pho Bach Mai, quan Hai Ba Trung, Ha Noi</text>
                              
                                
                            </div>
                        </div>
                        <div className="row">
                        <div className="fild BKNK">
                                 <label>
                                    Ảnh chụp CMT/CCCD
                                </label><br/>
                           <img alt="" src={cccd} style={{width: "100px"}}/>
                           </div>
                        </div>
                        <div className="row">
                            <div className=" fild BKNK">
                                <label>
                                    Ảnh chụp các giấy tờ khác cần xác thực
                                </label><br/>
                                <img alt="" src={hk} style={{width: "100px"}}/>
                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button type="submit" color="secondary" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit" color="success" onClick={this.handleXN}>Xác nhận</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.xn} toggle={this.handleXN} >
        <ModalHeader >Xác nhận thanh công</ModalHeader>
        <ModalBody style={{textAlign: "center"}}>
            <img src = {tick} alt="" style={{width: "20%", color: "green", margin: "1rem"}}/>
            {/* <Spinner size="sm" color="primary" /> */}
            <br/>
            <text>Xác thực công dân hợp lệ</text>
        </ModalBody>
        <ModalFooter>
        
        <Button color="secondary" onClick={this.handleXN} >Cancel</Button>
          <Button color="success" onClick={this.handleXNout}>OK</Button>{' '}
        </ModalFooter>
      </Modal>
            </div>
        )
    }
}
