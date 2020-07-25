import React from 'react';
import '../../assets/css/Home.css'
import banner from '../../assets/image/banner.png'
import ListInfo from './ListInfo';

function Home() {

  return (
    <div className="Home">
        <div className="banner">
            <img src={banner} alt="banner"/>
        </div>
        <ListInfo />
    </div>
  );
}

export default Home;
