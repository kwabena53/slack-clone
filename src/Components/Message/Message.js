import { formatDate } from "../../utils/helpers"
import "./Message.css"
import UserMessage from "./UserMessage"

const Message = ({date, messages})=>{
    return(
        <div className="msg-container">
            <div className="msg-date-container">
                <div className="msg-date">
                    {formatDate(date)}
                </div>
            </div>
            {Object.values(messages).map((userMsg)=>{
                return(
                    <UserMessage key={userMsg?.created_at} userMsg={userMsg} />
                )
            })}
           
        </div>
    )
}

export default Message