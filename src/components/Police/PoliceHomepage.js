import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';
import imgLogo from '../../assets/image/logo.png';
import iconSearch from '../../assets/image/search.svg'
import '../../assets/css/Header.css'

export default class PoliceHomepage extends Component {
    render() {
        return (
            <div className="Header">
                <div className="header-title">
            <div className="title">
                <img src= {imgLogo} alt="logo" style={{width: 80, height: 80}} />
                <div className="text">
                    <h2>KHAI BÁO TẠM TRÚ TẠM VẮNG <br /> CHO CÔNG DÂN VIỆT NAM</h2>
                </div>
            </div>
            <div className="search-box">
                <input placeholder="nhập thông tin cần tìm kiếm" type='text'/>
                <img src={iconSearch} alt="icon search" style={{width: 25, height: 25}} />
            </div>
            <div className="acount">
                <p><Link to="/signup" className="signIn">Đăng ký/</Link><Link to="/signin">Đăng nhập</Link></p>
            </div>
        </div>
        <div className="header-navbar">
            <nav className="navbar1">
                <ul className="navbar-nav1">
                        <li className="nav-item">
                            <NavLink 
                                activeStyle={{ background: '#131313'}} 
                                to={"/"}
                                className="nav-link" 
                            >
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                activeStyle={{ background: '#131313'}} 
                                className="nav-link" 
                                to={"/temporary"}
                            >
                                Đăng ký tạm vắng
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                activeStyle={{ background: '#131313'}} 
                                className="nav-link" 
                                to={"/temporary"}
                            >
                                Đăng ký tạm trú
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                activeStyle={{ background: '#131313'}} 
                                className="nav-link" 
                                to={"/"}
                            >
                                Liên hệ
                            </NavLink>
                        </li>
                </ul>
            </nav>   
        </div>
            </div>
        )
    }
}
