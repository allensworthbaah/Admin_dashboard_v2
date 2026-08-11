import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';
import './Sidebar.css';
import { SidebarData } from '../../Data/Data';
import { UilSignOutAlt } from '../../Data/Data';
import { UilSetting } from '../../Data/Data';

const Sidebar = () => {

    const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      {/* Sidebar logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span> <span>A</span>llensworth OS</span>
    </div>
    <div className="menu">
        {SidebarData.map((item, index) => {
            return (
                <div className={selected===index ? "menuItem active" : "menuItem" } 
                    key={index} 
                    onClick={()=>setSelected(index)}
                >
                    <item.icon />
                    <span>{item.heading}</span>
                </div>
            );
        })}
        <div className="menuItem">
            <UilSetting />
            <span>Settings</span>
        </div>    
        <div className="menuItem">
            <UilSignOutAlt />
            <span>Logout</span>
        </div>

    </div>
    </div>
  );
};

export default Sidebar;