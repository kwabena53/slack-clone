
import '../../App.css'
import './MenuDropdown.css'


const ChannelMenuItem = ({name})=>{
    return(
            <button className="menuItem">
                <div className="subMenu">
                  <span className="menuIcon"> #</span>
                  {name}
                </div>
            </button>
              
    )
}

export default ChannelMenuItem