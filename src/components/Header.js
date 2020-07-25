import React from 'react';
import imgLogo from '../assets/image/logo.png';
import '../assets/css/Header.css'
import iconSearch from '../assets/image/search.svg'
import {
    NavLink
  } from "react-router-dom";


function Header() {
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
                <p><a className="signIn">Đăng ký/</a><a className="login" href="#">Đăng nhập</a></p>
            </div>
        </div>
        <div className="header-navbar">
            <nav className="navbar">
                <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <NavLink activeStyle={{
                                background: '#131313'
                            }} className="nav-link" >Trang chủ</NavLink> */}
                            <a href="#" className="nav-link">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Đăng ký tạm vắng</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Đăng ký tạm trú</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Liên hệ</a>
                        </li>
                </ul>
            </nav>   
        </div>
    </div>
  );
}

export default Header;
