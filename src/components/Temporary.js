import React from 'react';

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
                    <h1>Đăng ký tạm vắng </h1>
                    <p>Nhập họ và tên:</p>
                    <input
                        type='text'
                        name='username'
                    />
                    <p>Enter your age:</p>
                    <input
                        type='text'
                        name='age'
                    />
                </form>
            </div>
        
        );
    }
    }
export default Temporary;

