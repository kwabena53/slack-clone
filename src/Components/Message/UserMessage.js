import { useContext, useEffect } from "react"
import { useSelector } from "react-redux"
import { UserContext } from "../../Pages/Homepage"
import { formatTime } from "../../utils/helpers"
import "./Message.css"

const UserMessage = ({userMsg})=>{
    const state = useSelector((state)=>state?.app?.users)
    const value = useContext(UserContext)
    const {setSider, setUser} = value

   const handleViewUserProfile = (user)=>{
       setUser(state[user])
    setSider(true)
   }

    const appState = useSelector((state)=>state?.app?.users)
    const user = userMsg?.user ? appState[userMsg?.user] : {}
    return(
        <div className="msg-main-content">
                    <img onClick={()=>handleViewUserProfile(user?.id)} className="msg-user-img" src={user?.url} />
                <div className="msg-text-area">
                    <div className="msg-title">
                        <span onClick={()=>handleViewUserProfile(user?.id)} className="msg-user-name">{user?.name}</span> 
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