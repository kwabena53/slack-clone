import '../App.css'
import React, { createContext, useContext, useState } from 'react';
import SearchInput from '../Components/SearchInput/SearchInput';
import { ArrowDown, Clock, EditIcon, HelpIcon, MenuIcon, SlackConnect, ThreadIcon } from '../Components/Icons/SlackCloneIcons';
import MenuDropdown from '../Components/MenuDropdown/MenuDropdown';
import ContentArea from '../Components/ContentArea/ContentArea';
import RightSider from '../Components/RightSider/RighSider';
import { useSelector } from 'react-redux';
import ChannelMenuItem from '../Components/MenuDropdown/ChannelMenuItem';
import DirectMessageMenuItem from '../Components/MenuDropdown/DirectMessageMenuItem';


export const UserContext = createContext({})


const Homepage = () => {

  const [showSider, setSider] = useState(false)
  const [content, setContent] = useState("")
  const [user, setUser] = useState("")
  const state = useSelector((state) => state?.app)
  const channels = state?.channels ? state?.channels : {}
  const directMsg = state?.recent ? state?.recent : {}


  const handleViewConversation = (val) => {
    setContent(val)
  }

  const rightSiderState = {
    setSider,
    setUser
  }
  return (
    <UserContext.Provider value={rightSiderState}>
      <div className="container">
        <div className="topHeader">
          <Clock width="1.2em" height="1.2em" color="#ffffff" />
          <SearchInput />
          <HelpIcon width="1.2em" height="1.2em" color="#ffffff" />
        </div>
        <div className="mainArea">
          <div className="leftSider">
            <div className="title">
              <span className="titleText">ASU Engineering Students</span>
              <ArrowDown width="1em" height="1em" />
              <div className="circle">
                <EditIcon width="1em" height="1em" classN="editIcon" />
              </div>
            </div>
            <div className="menu">
              <div className="nav">
                <div className="menuItem">
                  <div className="navItem">
                    <span className="menuIcon"> <ThreadIcon width="1em" className="navIcon" height="1em" /> </span>
                    Threads
                  </div>
                </div>
                <div className="menuItem">
                  <div className="navItem">
                    <span className="menuIcon">@</span>
                    Mentions & Reactions
                  </div>
                </div>
                <div className="menuItem">
                  <div className="navItem">
                    <span className="menuIcon"><SlackConnect width="1em" className="navIcon" height="1em" /> </span>
                    Slack Connect
                  </div>
                </div>
                <div className="menuItem">
                  <div className="navItem">
                    <span className="menuIcon"> <MenuIcon width="1em" color="rgb(255, 255, 255, 0.7)" height="1em" /></span>
                    More
                  </div>
                </div>
              </div>


              <MenuDropdown title="Channels"
                children={
                  Object.values(channels).map((channel) => {
                    return (

                      <ChannelMenuItem onClick={() => handleViewConversation(channel?.id)} key={channel?.id} name={channel?.name} />
                    )
                  })
                }
              />

              <MenuDropdown title="Direct Messages"
                children={
                  Object.values(directMsg).map((user) => {
                    return (
                      <DirectMessageMenuItem onClick={() => handleViewConversation(user?.id)} key={user?.id} user={user} />
                    )
                  })
                }
              />



            </div>
          </div>
          <div className="resizer"> </div>

          <ContentArea style={{width: showSider? "auto": "100%"}} content={content} />

          {showSider ? <RightSider  closeSider={setSider} user={user} /> : ""}
        </div>
      </div>
    </UserContext.Provider>

  )
}

export default Homepage;
