
import '../../App.css'
import './MenuDropdown.css'


const DirectMessageMenuItem = ({user, dark, ...rest})=>{
  const onlineStatus = user?.active? "active": "inactive"
  const type = dark ? "menuItemDark" : "menuItemLight"
    return(
            <button {...rest} className={`menuItem ${type}`}>
                <div className="subMenu">
                  <div className="menuIcon">
                      {/* <div className="imgIcon"> */}
                      <div className="dmIcon">
                      <img className="imgIcon" alt={user.name} src={user?.url}/>
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