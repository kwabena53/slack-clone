import './App.css'
import React, {useState} from 'react';

const App=() =>{

  const [sideWidth, setSideWidth] = useState(300)
  const handleDrag = ()=>{
    let  newWidth = sideWidth
    newWidth = newWidth + 1
    setSideWidth(newWidth)

    console.log(sideWidth)
  }
  return (
    <div className="container">
      <div className="topHeader">
        header
      </div>
      <div className="mainArea">
        <div onDragOver={handleDrag} style={{width: sideWidth}} className="leftSider"> 
         <div className="title">ASU Engineering Students</div>   
          <div className="menu">
          </div>      
        </div>
        <div   className="resizer"> </div>
        
        <div className="centerContent">
            <div className="contentHeader">
              kay
            </div>
            <div className="msgContent">
              <p>
                  New margin
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

export default App;
