import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getConversation, startConvo, _addConvo } from "../../duck/actions"
import { AddIcon, CodeIcon, LinkIcon, MicrophoneIcon, SendIcon, TextAlignIcon, TextBoldIcon, TextItalicIcon, VideoIcon } from "../Icons/SlackCloneIcons"
import DirectMessageMenuItem from "../MenuDropdown/DirectMessageMenuItem"
import Message from "../Message/Message"
import RightSider from "../RightSider/RighSider"
import SkeletonLoader from "../SkeletonLoader"
import "./ContentArea.css"

const ContentArea = ({content, setContent, ...rest}) => {
   const dispatch =  useDispatch()
   const elementRef = useRef();
   const state = useSelector((state)=>state?.app?.convo)

   const users = useSelector((state)=>state?.app?.users)

   let user = users ? users[content] :""
   

   const [inputVal, setInputVal] = useState("")
   const [searchInput, setSearch] = useState("")
   

  const scrollToBottom = () => {
    elementRef.current.scrollIntoView(false);
  }
    const handleInputChange = (e)=>{
        e.preventDefault()
        setInputVal(e.target.value)
    }

   useEffect(()=>{
       if(content){
        dispatch(getConversation(content))
       }

   },[dispatch,content])

   const clearInputField = ()=>{
     setInputVal("")
   }

   const handleSearch = (e)=>{
       e.preventDefault()
       setSearch(e.target.value)
   }
  
   const sendMessage =()=>{
       dispatch(_addConvo("dm", content, inputVal))
       clearInputField()
       scrollToBottom()
   }

   const startConversation = (user)=>{
       dispatch(startConvo(user))
       setContent(user)
   }
  let msg_ = state?state[content]: ""
  let recepient = content? user?.name: ""

 
  const userFilter = searchInput === ""? {} : Object.values(users).filter((user)=>(
    user.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
  ))

    return (
            <div ref={elementRef}  {...rest} className="centerContent">
                <div className="contentHeader">
                    <h3 className="slack-h3">{content? user?.name: "All direct messages"}</h3>
                </div>
                {
                    !content?(
                        <div className="contentHeader">
                        <input prefix="To:" value={searchInput} onChange={handleSearch} placeholder="Search for somebody to message" className="search-input"  />
                        </div>
                    ):
                    ""
                }
                

                <div  className="msgContent">
                    {
                        msg_ ?
                       Object.values(msg_).map((item)=>{
                           return(
                            <Message key={item?.date} date={item?.date} messages={item?.messages} />
                           )
                       })
                       :
                    <div>
                       { Object.values(userFilter).map((user)=>{
                           return(
                               
                               <DirectMessageMenuItem key={user.id} onClick={()=>startConversation(user)} dark user={user}/>
                           )
                       }) }
                    </div>
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
                        <input onChange={handleInputChange} className="note-area" value={inputVal} placeholder={`Message ${recepient}`} />
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
                            <div onClick={sendMessage} className="sl-icon">
                                    <SendIcon   width="1em" height="1em" color="gray" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               )
}

export default ContentArea