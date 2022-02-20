
import { CloseIcon, HeadphoneIcon, MenuIcon, MessageIcon, VideoIcon } from "../Icons/SlackCloneIcons"
import "./RightSider.css"




const RightSider = ({closeSider})=>{
    return(
        <div className="rightSider">
            <div className="contentHeader h-line">
                <h3 className="slack-h3">Profile</h3>
                <div onClick={()=>closeSider(false)} className="sl-icon">
                    <CloseIcon width="2em" height="2em" color="black" />
                </div>
            </div>
            <div className="rightsider-content">
                <div className="profile-details">

              
                <div>
                    <img className="profile-pic" src="https://randomuser.me/api/portraits/women/9.jpg" />
                </div>
                <div>
                    <div className="user-name">
                        <h3 className="slack-h3">Jenn Rode</h3> 
                        </div>
                    <div className="online-status"></div>
                </div>
                <div className="profile-action-icons">
                    <div className="profile-icon-section">
                        <div className="round-circle">
                            <MessageIcon width="1em" height="1em" color="black"/>
                        </div>
                        <div className="profile-icon-name">Message</div>
                    </div>
                    <div className="profile-icon-section">
                        <div className="round-circle">
                        <HeadphoneIcon width="1em" height="1em" color="black"/>
                        </div>
                        <div className="profile-icon-name">Huddle</div>
                    </div>
                    <div className="profile-icon-section">
                        <div className="round-circle">
                        <MenuIcon width="1em" height="1em" color="black"/>
                        </div>
                        <div className="profile-icon-name">More</div>
                    </div>
                </div>
                </div>
                <div>
                <div className="personal-section">
                    <div className="details-title">
                        Display name
                    </div>
                    <div className="details-res">
                        jbsarfo
                    </div>
                </div>
                <div>
                    <div className="details-title">
                        Local time
                    </div>
                    <div className="details-res">
                        6:09 PM
                    </div>
                </div>
                <div>
                    <div className="details-title">
                        Email address
                    </div>
                    <div className="details-res">
                        jbsarfo@asu.edu
                    </div>
                </div>
                <div>
                    <div className="details-title">
                    Shared Workspaces
                    </div>
                    <div className="details-res">
                    EdPlus at ASU
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default RightSider