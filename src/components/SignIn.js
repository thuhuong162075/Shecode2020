import React from 'react';
import saigonpic from '../assets/image/signIn.png'
import {Card,  CardBody, CardTitle, Input, Button, Form, FormGroup, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/SignIn.css'

class SignIn extends React.Component {
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

onSignin = ()=>{
    this.props.history.push('/')
}
render(){
  return (
      <div style={{position: "relative"}}>
                <img src={saigonpic} alt="" style={{ width: "100%", height: "718.5px" }}/>
                <div className="centersignin">
                <Card style={{backgroundColor: "rgba(52, 52, 52, 0.8)"}}>
                    <CardBody>
                        <CardTitle style={{fontSize: "2rem", textAlign: "center"}}>Đăng nhập</CardTitle>
                        <div className="Form">
                        <Form>
                            <FormGroup>
                                <Label for="cmt">CMT/CCCD</Label>
                                <Input type="text" name="CMT" id="siCMT" placeholder="Nhap so CMT/CCCD" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Mật khẩu</Label>
                                <Input type="password" name="password" id="sipassword" placeholder="Nhap mat khau" />
                            </FormGroup>

                        <div style={{textAlign: "center", margin: "1rem"}}>
                        <Button onClick={this.onSignin} style={{padding: "2% 10%"}}>Đăng nhập</Button>
                        </div>
                        </Form>
                        </div>
                       
                        <div style={{textAlign: "center"}}>
                           <text style={{color: "#878787"}}> Chưa có tài khoản? </text>
                           <Link style={{color: "#0077CC"}} to="/signup">Đăng ký</Link>
                        </div>
                    </CardBody>
                </Card>
                </div>
            </div>
  ); 
}
}

export default SignIn;
