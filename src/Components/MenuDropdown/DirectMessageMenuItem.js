
import '../../App.css'
import './MenuDropdown.css'


const DirectMessageMenuItem = ({user, ...rest})=>{
  const onlineStatus = user?.active? "active": "inactive"
    return(
            <button {...rest} className="menuItem">
                <div className="subMenu">
                  <div className="menuIcon">
                      {/* <div className="imgIcon"> */}
                      <div className="dmIcon">
                      <img className="imgIcon" src={user?.url}/>
                        <div className={`online-icon ${onlineStatus}`}></div>
                      </div>
                      {/* </div> */}
                    </div>
                  {user?.name}
                </div>
            </button>
              
    )
}

export default DirectMessageMenuItem