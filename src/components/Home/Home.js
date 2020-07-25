import React from 'react';
import '../../assets/css/Home.css'
import banner from '../../assets/image/banner.png'
import ListInfo from './ListInfo';
import '../../assets/css/Home.css'

function Home() {

  return (
    <div className="Home">
        <div className="banner">
            <img src={banner} alt="banner"/>
        </div>
        
        <div className="box">
            <div className="InfoHot">
                <div className="title">
                    <span>Xuất nhập cảnh</span>
                </div>
                <div className="content">
                    <img src="https://xuatnhapcanh.gov.vn/sites/default/files/taphuan-xnc-001_0.jpg" alt="film hot"/>
                    <p>Hội nghị tập huấn chuyên sâu Luật xuất cảnh, nhập cảnh của công dân Việt Nam</p>
                </div>
                
            </div>
            <div className="RightBox">
                <div className="title">
                    <span>Thông tin nổi bật</span>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Tự động gia hạn tạm trú cho người nước ngoài bị ảnh hưởng bởi dịch Covid-19</li>
                    <li class="list-group-item">Chính phủ ban hành nghị quyết triển khai Luật sửa đổi, bổ sung một số điều</li>
                    <li class="list-group-item">Chính phủ Cô-lôm-bi-a triển khai một số biện pháp phòng ngừa và khống chế </li>
                    <li class="list-group-item">Hội nghị tập huấn chuyên sâu Luật xuất cảnh, nhập cảnh của công dân Việt Nam</li>
                    <li class="list-group-item">Hội nghị tập huấn chuyên sâu Luật xuất cảnh, nhập cảnh của công dân Việt Nam</li>
                    <li class="list-group-item">Hội nghị tập huấn chuyên sâu Luật xuất cảnh, nhập cảnh của công dân Việt Nam</li>
                    
                </ul>
            </div>
        </div>
        <ListInfo />
        <div className="footer">
            <p className="text">Nhóm thực hiện: nhóm 5</p>
            <p className="contact">Thông tin liên hệ: sđt - 0346778888</p>
        </div>
    </div>
  );
}

export default Home;
