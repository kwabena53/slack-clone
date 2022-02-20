
import '../../App.css'
import './MenuDropdown.css'


const ChannelMenuItem = ({name, ...rest})=>{
    return(
            <button {...rest} className="menuItem">
                <div className="subMenu">
                  <span className="menuIcon"> #</span>
                  {name}
                </div>
            </button>
              
    )
}

export default ChannelMenuItem