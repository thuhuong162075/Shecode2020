import React, { Component } from 'react'
import hanoipic from '../assets/image/hanoi1.jpg'
import '../assets/css/Signup.css'
import {Card,  CardBody, CardTitle, Input, Button, Form, FormGroup, Label} from 'reactstrap';
import DateTimePicker from "react-datetime-picker";
import { Link, withRouter } from 'react-router-dom';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date()
          };
    }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    
    onSignup = ()=>{
        this.props.history.push('/signin')
    }

    render() {
        
        return (
            <div style={{position: "relative"}}>
                <img src={hanoipic} alt="" style={{ width: "100%", height: "718.5px" }}/>
                <div className="center">
                <Card style={{backgroundColor: "rgba(52, 52, 52, 0.8)"}}>
                    <CardBody>
                        <CardTitle style={{fontSize: "2rem", textAlign: "center"}}>Đăng ký</CardTitle>
                        <Form>
                        <div className="row">
                            <div className="col-md-6" >
                            <FormGroup>
                                <Label for="name">Ho va Ten</Label>
                                <Input type="text" name="name" id="suname" placeholder="Nhap ho va ten" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="suemail" placeholder="Nhap email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cmt">CMT/CCCD</Label>
                                <Input type="text" name="CMT" id="suCMT" placeholder="Nhap so CMT/CCCD" />
                            </FormGroup>
                            </div>
                            <div className="col-md-6">
                            <div>
                            <Label>Ngay sinh</Label>
                            <DateTimePicker style={{color: "white"}}
                             value={this.state.startDate} onChange={this.handleChange} format="y/M/d" />
                            </div>
                            
                            <FormGroup>
                                <Label for="password">Mat khau</Label>
                                <Input type="password" name="password" id="supassword" placeholder="Nhap mat khau" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">So dien thoai</Label>
                                <Input type="text" name="phone" id="suphone" placeholder="Nhap so dien thoai" />
                            </FormGroup>
                            </div>
                        </div>
                           
                        <div style={{textAlign: "center", margin: "1rem"}}>
                        <Button onClick={this.onSignup} style={{padding: "2% 7%"}}>Đăng ký</Button>
                        </div>
                        </Form>
                        <div style={{textAlign: "center"}}>
                           <text style={{color: "#878787"}}> Đã có tài khoản? </text>
                           <Link style={{color: "#0077CC"}} to="/signin">Đăng nhập</Link>
                        </div>
                    </CardBody>
                </Card>
                </div>

            </div>
        )
    }
}
export default withRouter(Signup)