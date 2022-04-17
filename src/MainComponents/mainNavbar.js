import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import {linkList} from './link_list';


export const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [listData, setListData] = useState(linkList);

  // Get Path Name
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    const newListData = listData.map((e) => {
      if ( e.path === path ) {
        e.active = true;
      } else {
        e.active = false;
      }
      return e;
    })
    setListData(newListData)
  }, [location])


  return (
    <>
    <nav>
      <div className="container">
        <div className="logo"><img src="./space-tourism-website-main/starter-code/assets/favicon-32x32.png" alt="Logo" /></div>
        <ul className={`${isMenuActive ? 'active' : ''}`}>
          <div className="blurOverlay"></div>
          <div className="menu-toggle" onClick={() => {setIsMenuActive(!isMenuActive)}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${isMenuActive ? 'menu active' : 'menu'}`}>
            <span className="closeMenu"  onClick={() => {setIsMenuActive(!isMenuActive)}} >X</span>
            {listData.map((e) => {
              const {id, path, title, active} = e;
              return <li key={id} className={`${active ? 'active' : ''}`}><Link to={path}>{title}</Link></li>
            })}
          </div>
        </ul>
      </div>
    </nav>
    </>
  );
}