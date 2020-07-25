import React, { Component } from 'react';
import Header from './Header'
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

export default class ListTV extends Component {
    constructor(props){
        super(props);
        this.state={
            modal: false
        }
    }
    handleCheck = ()=>{
        this.setState({modal: !this.state.modal})
    }
    handleCancel = () => {
        this.setState({modal: !this.state.modal})
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid" style={{marginTop: "3%"}}>
               <center>
                <h3>DANH SÁCH CÔNG DÂN ĐĂNG KÝ TẠM VẮNG</h3>
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>123567765</td>
          <td className="row" style={{ display: "inline-block"}}>
                <Button onClick={this.handleCheck} color="success" style={{marginRight: "1rem  "}}>Kiểm tra</Button> 
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Create a new Project</ModalHeader>
                    <ModalBody>
                       hello
                    </ModalBody>
                    <ModalFooter>
                    <Button type="submit" color="secondary" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit" color="success" onClick={this.fetchSubmit}>Xác nhận</Button>
                    </ModalFooter>
                </Modal>
                <Button color="danger">Hủy</Button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>0332322122</td>
          <td className="row"  style={{ display: "inline-block"}}>
                <Button color="success" style={{marginRight: "1rem  "}}>Kiểm tra</Button> 
                <Button color="danger">Hủy</Button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>1223221983</td>
          <td className="row"  style={{ display: "inline-block"}}>
                <Button color="success" style={{marginRight: "1rem  "}}>Kiểm tra</Button> 
                <Button color="danger">Hủy</Button>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Haru</td>
          <td>122345543</td>
          <td className="row"  style={{ display: "inline-block"}}>
                <Button color="success" style={{marginRight: "1rem  "}}>Kiểm tra</Button> 
                <Button color="danger">Hủy</Button>
          </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Harry</td>
          <td>037187777666</td>
          <td className="row"  style={{ display: "inline-block"}}>
                <Button color="success" style={{marginRight: "1rem  "}}>Kiểm tra</Button> 
                <Button color="danger">Hủy</Button>
          </td>
        </tr>
      </tbody>
    </Table>
                </div>

            </div>
        )
    }
}
