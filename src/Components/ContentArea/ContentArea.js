import React from "react"
import Message from "../Message/Message"
import "./ContentArea.css"

const ContentArea = ()=>{
    return(
        <div>
             <div className="centerContent">
          <div className="contentHeader">
            <h3 className="slack-h3">#general</h3> 
          </div>
          <div className="msgContent">
           <Message/>
           <Message/>
           <Message/>
           <Message/>
           <Message/>
           {/* <Message/>
           <Message/> */}
            
          </div>
          <div className="contentFooter">
            Chale
          </div>
        </div>
        <div className="rightSider">

        </div>
        </div>
    )
}

export default ContentArea