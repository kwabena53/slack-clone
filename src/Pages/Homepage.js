import '../App.css'
import React from 'react';
import SearchInput from '../Components/SearchInput/SearchInput';
import { ArrowDown, Clock, EditIcon, HelpIcon, MenuIcon, SlackConnect, ThreadIcon } from '../Components/Icons/SlackCloneIcons';
import MenuDropdown from '../Components/MenuDropdown/MenuDropdown';

const Homepage = () => {

  
  return (
    <div className="container">
      <div className="topHeader">
        <Clock width="1.2em" height="1.2em" color="#ffffff" />
        <SearchInput />
        <HelpIcon width="1.2em" height="1.2em" color="#ffffff" />
      </div>
      <div className="mainArea">
        <div  className="leftSider">
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
                  <span className="menuIcon"> <MenuIcon width="1em" height="1em" /></span>
                  More
                </div>
              </div>
            </div>
            
            <MenuDropdown title="Channels"/>

          </div>
        </div>
        <div className="resizer"> </div>

        <div className="centerContent">
          <div className="contentHeader">
            kay
          </div>
          <div className="msgContent">
            <p style={{ marginTop: "20em" }}>
              Hey everyone:v::skin-tone-5: My name is Sydney (She/Her). I am in my first year for the Master’s in Biology (non thesis) program on Tempe campus. I received my Bachelor’s in Animal Science from Tuskegee University this past May. I have been lately finding myself having the “imposter’s syndrome” mainly because of the culture shock; coming from predominantly black schools my whole life to a PWI takes a lot of adjusting to do. I’ve connected with one other black grad student here so far, so I am very excited to interact and meet with more of y’all!
            </p>
            <p style={{ marginTop: "20em" }}>
              Hey everyone:v::skin-tone-5: My name is Sydney (She/Her). I am in my first year for the Master’s in Biology (non thesis) program on Tempe campus. I received my Bachelor’s in Animal Science from Tuskegee University this past May. I have been lately finding myself having the “imposter’s syndrome” mainly because of the culture shock; coming from predominantly black schools my whole life to a PWI takes a lot of adjusting to do. I’ve connected with one other black grad student here so far, so I am very excited to interact and meet with more of y’all!
            </p>
            <p style={{ marginTop: "20em" }}>
              Hey everyone:v::skin-tone-5: My name is Sydney (She/Her). I am in my first year for the Master’s in Biology (non thesis) program on Tempe campus. I received my Bachelor’s in Animal Science from Tuskegee University this past May. I have been lately finding myself having the “imposter’s syndrome” mainly because of the culture shock; coming from predominantly black schools my whole life to a PWI takes a lot of adjusting to do. I’ve connected with one other black grad student here so far, so I am very excited to interact and meet with more of y’all!
            </p>
            <p style={{ marginTop: "20em" }}>
              Hey everyone:v::skin-tone-5: My name is Sydney (She/Her). I am in my first year for the Master’s in Biology (non thesis) program on Tempe campus. I received my Bachelor’s in Animal Science from Tuskegee University this past May. I have been lately finding myself having the “imposter’s syndrome” mainly because of the culture shock; coming from predominantly black schools my whole life to a PWI takes a lot of adjusting to do. I’ve connected with one other black grad student here so far, so I am very excited to interact and meet with more of y’all!
            </p>
            <p style={{ marginTop: "20em" }}>
              Hey everyone:v::skin-tone-5: My name is Sydney (She/Her). I am in my first year for the Master’s in Biology (non thesis) program on Tempe campus. I received my Bachelor’s in Animal Science from Tuskegee University this past May. I have been lately finding myself having the “imposter’s syndrome” mainly because of the culture shock; coming from predominantly black schools my whole life to a PWI takes a lot of adjusting to do. I’ve connected with one other black grad student here so far, so I am very excited to interact and meet with more of y’all!
            </p>
            <p style={{ marginTop: "20em" }}>
              Hey everyone:v::skin-tone-5: My name is Sydney (She/Her). I am in my first year for the Master’s in Biology (non thesis) program on Tempe campus. I received my Bachelor’s in Animal Science from Tuskegee University this past May. I have been lately finding myself having the “imposter’s syndrome” mainly because of the culture shock; coming from predominantly black schools my whole life to a PWI takes a lot of adjusting to do. I’ve connected with one other black grad student here so far, so I am very excited to interact and meet with more of y’all!
            </p>
            <p style={{ marginTop: "20em" }}>
              Hey everyone:v::skin-tone-5: My name is Sydney (She/Her). I am in my first year for the Master’s in Biology (non thesis) program on Tempe campus. I received my Bachelor’s in Animal Science from Tuskegee University this past May. I have been lately finding myself having the “imposter’s syndrome” mainly because of the culture shock; coming from predominantly black schools my whole life to a PWI takes a lot of adjusting to do. I’ve connected with one other black grad student here so far, so I am very excited to interact and meet with more of y’all!
            </p>
          </div>
          <div className="contentFooter">
            Chale
          </div>
        </div>
        <div className="rightSider">

        </div>
      </div>
    </div>
  )
}

export default Homepage;