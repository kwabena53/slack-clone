import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getConversation } from "../../duck/actions"
import { AddIcon, CodeIcon, LinkIcon, MicrophoneIcon, SendIcon, TextAlignIcon, TextBoldIcon, TextItalicIcon, VideoIcon } from "../Icons/SlackCloneIcons"
import Message from "../Message/Message"
import RightSider from "../RightSider/RighSider"
import SkeletonLoader from "../SkeletonLoader"
import "./ContentArea.css"

const ContentArea = ({content, ...rest}) => {
   const dispatch =  useDispatch()
   const elementRef = useRef();

   const state = useSelector((state)=>state?.app?.convo)
   const [msg, setMsg] = useState(state?state[content]: "")
   

   const [inputVal, setInputVal] = useState("")

    const handleInputChange = ()=>{
        console.log("vsl",elementRef.current.innerHTML)
    }

   useEffect(()=>{
       if(content){
        dispatch(getConversation(content))
        setMsg(state[content])
       }

   },[dispatch,content])
  
    return (
            <div {...rest} className="centerContent">
                <div className="contentHeader">
                    <h3 className="slack-h3">#general</h3>
                </div>
                <div className="msgContent">
                    {
                        msg ?
                       Object.values(msg).map((item)=>{
                           return(
                            <Message key={item?.date} date={item?.date} messages={item?.messages} />
                           )
                       })
                       :
                      <SkeletonLoader num={2}/>
                    }
                    
                   

                </div>
                <div className="contentFooter">
                    <div className="text-area">
                        <div className="edit-icons">
                            <div className="sl-icon">
                                <TextBoldIcon width="1em" height="1em" color="gray" />
                            </div>
                            <div className="sl-icon">
                                <TextItalicIcon width="1em" height="1em" color="gray" />
                            </div>
                            <div className="sl-icon">
                                <LinkIcon width="1em" height="1em" color="gray" />
                            </div>
                            <div className="sl-icon">
                                <TextAlignIcon width="1em" height="1em" color="gray" />
                            </div>
                            <div className="sl-icon">
                                <CodeIcon width="1em" height="1em" color="gray" />
                            </div>

                        </div>
                        <div className="note-area" placeholder="Message Jenn Rode" val={inputVal} ref={elementRef}  suppressContentEditableWarning={true} contentEditable="true"> {inputVal}</div>
                        <div className="lower-icons">
                            <div className="lower-left-icons">
                                <div className="sl-icon">
                                    <AddIcon width="1em" height="1em" color="gray" />
                                </div>
                                <div className="sl-icon">
                                    <VideoIcon width="1em" height="1em" color="gray" />
                                </div>
                                <div className="sl-icon">
                                    <MicrophoneIcon width="1em" height="1em" color="gray" />
                                </div>
                            </div>
                            <div className="lower-right-icons">
                            <div onClick={handleInputChange} className="sl-icon">
                                    <SendIcon  width="1em" height="1em" color="gray" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               )
}

export default ContentArea