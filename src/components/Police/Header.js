import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';
import imgLogo from '../../assets/image/logo.png';
import iconSearch from '../../assets/image/search.svg'
import '../../assets/css/Header.css';
import Avatar from 'react-avatar';

export default class Header extends Component {
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
            <div className="acount row" style={{textAlign: "center", display: "flex", alignItems: "center",justifyContent: "center" }} >
                <h5 style={{marginRight: "1rem"}}>Hi, police</h5>
            <Avatar  googleId="118096717852922241760" size="35" round={true} />
            </div>
        </div>
        <div className="header-navbar">
            <nav className="navbar1">
                <ul className="navbar-nav1">
                        <li className="nav-item">
                            <NavLink 
                                activeStyle={{ background: '#131313'}} 
                                to={"/admin "}
                                className="nav-link" 
                            >
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                activeStyle={{ background: '#131313'}} 
                                className="nav-link" 
                                to="/ListTV"
                            >
                               Danh sách đăng ký tạm vắng
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                activeStyle={{ background: '#131313'}} 
                                className="nav-link" 
                                to="/listTT"
                            >
                               Danh sách đăng ký tạm trú
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                activeStyle={{ background: '#131313'}} 
                                className="nav-link" 
                                to={"/"}
                            >
                                Quản lý dân cư
                            </NavLink>
                        </li>
                </ul>
            </nav>   
        </div>
            </div>
        )
    }
}
