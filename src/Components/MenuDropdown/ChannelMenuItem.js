
import '../../App.css'
import './MenuDropdown.css'


const ChannelMenuItem = ({title})=>{
    return(
            <button className="menuItem">
                <div className="subMenu">
                  <span className="menuIcon"> #</span>
                  {title}
                </div>
            </button>
              
    )
}

export default ChannelMenuItem