import React, { Component } from 'react';
import Header from './Header'
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
            modal: false
        }
    }
    handleCheck = (id)=>{
        console.log(id)
        this.setState({modal: !this.state.modal})
    }
    handleCancel = () => {
        this.setState({modal: !this.state.modal})
    }
    onDelete = (id)=>{
        var x = list.indexOf(id);
        delete list[x];
        console.log(id, x, list)
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
       
      </tbody>
    </Table>
                </div>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Kiểm tra thông tin công dân</ModalHeader>
                    <ModalBody>
                       hello
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
