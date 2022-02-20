import { useSelector } from "react-redux"
import { formatTime } from "../../utils/helpers"
import "./Message.css"

const UserMessage = ({userMsg})=>{

    const appState = useSelector((state)=>state?.app?.users)
    const user = userMsg?.user ? appState[userMsg?.user] : {}
    // console.log("Ju: ",appState[userMsg?.user].name)
    return(
        <div className="msg-main-content">
                    <img className="msg-user-img" src={user?.url} />
                <div className="msg-text-area">
                    <div className="msg-title">
                        <span className="msg-user-name">{user?.name}</span> 
                        <span className="msg-time">{formatTime(userMsg?.created_at)}</span>
                    </div>
                    <div className="msg-content">
                        {userMsg?.message}
                    </div>
                </div>
            </div>
    )
}

export default UserMessage