
import '../../App.css'
import './MenuDropdown.css'


const DirectMessageMenuItem = ({title})=>{
    return(
            <button className="menuItem">
                <div className="subMenu">
                  <div className="menuIcon">
                      {/* <div className="imgIcon"> */}
                      <div className="dmIcon">
                      <img className="imgIcon" src='https://randomuser.me/api/portraits/women/9.jpg'/>
                        <div className={`online-icon active`}></div>
                      </div>
                      {/* </div> */}
                    </div>
                  {title}
                </div>
            </button>
              
    )
}

export default DirectMessageMenuItem