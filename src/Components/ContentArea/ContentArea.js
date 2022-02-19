import React from "react"
import { AddIcon, CodeIcon, LinkIcon, MicrophoneIcon, SendIcon, TextAlignIcon, TextBoldIcon, TextItalicIcon, VideoIcon } from "../Icons/SlackCloneIcons"
import Message from "../Message/Message"
import "./ContentArea.css"

const ContentArea = () => {
    return (
        <div>
            <div className="centerContent">
                <div className="contentHeader">
                    <h3 className="slack-h3">#general</h3>
                </div>
                <div className="msgContent">
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    {/* <Message/>
           <Message/> */}

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
                        <div className="note-area" placeholder="Message Jenn Rode" contenteditable="true"> <span style={{ color: "gray" }} >Message Jenn Rode</span></div>
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
                            <div className="sl-icon">
                                    <SendIcon width="1em" height="1em" color="gray" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSider">

            </div>
        </div>
    )
}

export default ContentArea