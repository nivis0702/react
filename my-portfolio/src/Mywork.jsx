import React  from "react"


import logo from"./assets/img10.png"
import ice from"./assets/img11.png"
const Mywork =()=>{
    return(
        

         <div id="mywork" className="mywork">
            <div className="mywork-title">
                <h1>My Project</h1>
            </div>
<div className="my-container">
            <div className="mywork-container">
                <img src={logo} alt="" />

            </div>
            <div className="mywork-container">
                <img src={ice} alt="" />

            </div>
            
               </div>
</div>
            
    
    
    )
}
export default Mywork