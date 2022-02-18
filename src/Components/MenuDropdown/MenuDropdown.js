
import '../../App.css'
import './MenuDropdown.css'
import React, {useState} from 'react';
import {ArrowRightBold} from '../../Components/Icons/SlackCloneIcons';
const MenuDropdown = ({title})=>{

    const [show, setShow] = useState(true)

   const handleMenuClick = ()=>{
        setShow(!show)
    }
    
    let active = show ? "" : "close"
    
    return(
        <>
        <div className="menuParent">
              <div className="navItem">
                <div> <button onClick={handleMenuClick}  className="dropdownMenuIcon dpIcon"><ArrowRightBold className="navIcon" height="1em" /> </button> </div>
                <div  >{title}</div>
              </div>
        </div>
        <div className={`subContainer ${active}`} >
        <button className="menuItem">
                <div className="subMenu">
                  <span className="menuIcon"> #</span>
                  Announcement
                </div>
              </button>
              <button className="menuItem">
                <div className="subMenu">
                  <span className="menuIcon"> #</span>
                  community
                </div>
              </button>
              <button className="menuItem">
                <div aria-selected="true" aria-posinset="2" role="treeitem" aria-level="2" className="subMenu">
                  <span className="menuIcon"> #</span>
                  ms-information-technology
                </div>
            </button>
        </div>
                
        </>
    )
}

export default MenuDropdown