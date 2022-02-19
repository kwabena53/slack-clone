import "./Message.css"

const Message = ()=>{
    return(
        <div className="msg-container">
            <div className="msg-date-container">
                <div className="msg-date">
                Monday, February 14th
                </div>
            </div>
            <div className="msg-main-content">
                {/* <div className="msg-user-img"> */}
                    <img className="msg-user-img" src="https://randomuser.me/api/portraits/women/9.jpg" />
                {/* </div> */}
                <div className="msg-text-area">
                    <div className="msg-title">
                        <span className="msg-user-name">Kwabena Adu-Darkwa</span> 
                        <span className="msg-time">10:05 PM</span>
                    </div>
                    <div className="msg-content">
                    Hello EdPlus Colleagues,
                    On Tuesday, February 22, EdPlus will be co-hosting the Future of Open Learning Summit in the large meeting space (Synergy) on the first floor of SkySong 3. We have several of our large EdPlus conference rooms held for private breakout meetings during the Summit.  Also on that day, Dean Regier and other members of the leadership team will be meeting with visitors from King’s College London and the University of Illinois. There may be several tours of our space taking place during the day. We would like to see as many EdPlus employees in the office on this day if you meet the daily health check requirements. Please be sure your areas are clean and tidy. Thank you for all you do to welcome our visitors.
                    </div>
                </div>
            </div>
            <div className="msg-main-content">
                {/* <div className="msg-user-img"> */}
                    <img className="msg-user-img" src="https://randomuser.me/api/portraits/women/9.jpg" />
                {/* </div> */}
                <div className="msg-text-area">
                    <div className="msg-title">
                        <span className="msg-user-name">Kwabena Adu-Darkwa</span> 
                        <span className="msg-time">10:05 PM</span>
                    </div>
                    <div className="msg-content">
                    Hello EdPlus Colleagues,
                    On Tuesday, February 22, EdPlus will be co-hosting the Future of Open Learning Summit in the large meeting space (Synergy) on the first floor of SkySong 3. We have several of our large EdPlus conference rooms held for private breakout meetings during the Summit.  Also on that day, Dean Regier and other members of the leadership team will be meeting with visitors from King’s College London and the University of Illinois. There may be several tours of our space taking place during the day. We would like to see as many EdPlus employees in the office on this day if you meet the daily health check requirements. Please be sure your areas are clean and tidy. Thank you for all you do to welcome our visitors.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message