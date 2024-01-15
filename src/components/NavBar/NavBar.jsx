/* eslint-disable react/prop-types */
// import { useState } from 'react'
import { useState } from 'react';
import './NavBarStyle.css'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import { IoClose } from "react-icons/io5";
const NavBar = ({ menu, logo, btn }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [FiMenuActive, FiMenuSetActive] = useState(false)
 
  const SetActiveFiMenu = () => {
    FiMenuSetActive(!FiMenuActive)
  }

  const setActive=(index)=> {
    setActiveIndex(index);
    console.log("activeIndex" + index);
  }

  return (
    <nav>
      <div className='logo'>
        <h1>{logo}</h1>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="125" height="18" viewBox="0 0 125 18" fill="none">
          <path d="M0.763619 6.24047C7.88694 12.3047 38.8787 18.3409 59.7244 17.962C82.2564 17.5829 94.5954 14.9312 118.617
          5.18031C118.548 6.24793 118.336 7.11675 118.37 7.90929C118.346 8.81349 118.335 9.76944 118.656 10.6409C118.725 10.8996
          119.629 11.2917 120.162 11.2943C120.696 11.297 121.465 10.8529 121.569 10.5778C122.463 7.94682 123.185 5.33217 123.979
          2.65758C124.191 1.78876 123.505 1.21692 121.964 1.09731C116.116 0.801298 110.254 0.453539 104.333 0.217453C102.993 0.184965
          101.49 0.539236 99.7582 0.702896C101.738 2.79698 104.785 2.24367 107.188 2.6001C109.692 3.00009 112.299 3.12499 115.495
          3.45952C109.084 7.03639 102.296 9.53481 94.8949 11.4015C67.8062 18.3122 40.8946 17.2485 14.3979 10.0977C10.9495 9.15041
          7.70553 7.97161 4.32988 6.9644C3.30846 6.79569 2.3736 6.6188 0.763619 6.24047Z" fill="#DF6951" />
        </svg>
        </div>
      </div>

      <ul className='NavBarElement'>
        {menu.map((element) => {
          return (
            <Link className={(activeIndex === element.id) ? "activeTab" : "notActiveTab"} onClick={() => { setActive(element.id); console.log("Index" + element.id); console.log(activeIndex == element.id); }} key={element.id} to={element.path}>{element.title}</Link>
          )
        })}
      </ul>
      <button className='NavBtn'>{btn}</button>

      <div className="toggle">

        <FiMenu onClick={() => {SetActiveFiMenu()}} className='FiMenu' />
        
          <div className={FiMenuActive ? "ActiveSideBarmenu" : "SideBarmenu"}>
            <IoClose className='IoClose' onClick={()=>SetActiveFiMenu()} />
            <div className='NavElementsBtn'>
              <ul className='ColumnNav'>
                {menu.map((element) => {
                  return (
                    <Link key={element.id} to={element.path} className='ColumnNavElement'>{element.title}</Link>
                  )
                })}
              </ul>
              <button className='NavBtnColumn'>{btn}</button>
            </div>
          </div>
      
      </div>
    </nav>
  )
}
export default NavBar