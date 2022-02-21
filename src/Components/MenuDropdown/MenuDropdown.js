
import '../../App.css'
import './MenuDropdown.css'
import React, { useState} from 'react';
import {AddIcon, ArrownDownBold, MenuIcon} from '../../Components/Icons/SlackCloneIcons';

const MenuDropdown = ({title, children})=>{

    const [show, setShow] = useState(true)

   const handleMenuClick = ()=>{
        setShow(!show)
    }
    
    let active = show ? "" : "close"
    let rotate = show ? "" : "rotate"

    return(
        <>
        <div className="menuParent">
              <div className="navItem">
                <div className="navHeader"> <button onClick={handleMenuClick}  className={`dropdownMenuIcon dpIcon ${rotate}`}><ArrownDownBold className="navIcon" height="1em" /> </button> </div>
                <div className="menuTitle" >{title}</div>
                <div className="leftIcons">
                    <div className="leftIcon dropdownMenuIcon dpIcon"> <MenuIcon color="white" width="1em" className="navIcon" height="1em"/> </div>
                    <div className="leftIcon dropdownMenuIcon dpIcon"><AddIcon width="1.2em" color="#ffffff" className="navIcon" height="1.2em" /></div>
                </div>
              </div>
        </div>
        <div className={`subContainer ${active}`} >
            {/* {users? } */}
            {children}
            {/* <DirectMessageMenuItem title="Jenifer" />
            <ChannelMenuItem title="Announcement" /> */}
        </div>
                
        </>
    )
}

export default MenuDropdown