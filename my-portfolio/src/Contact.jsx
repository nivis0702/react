import React  from "react";
const Contact =()=>{
    return(
        
            <div id="contact" className="contact">
                <div className="contact-title">
                    <h1>Get in touch</h1>
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's Talk</h1>
                        <p>I'm currently avaliable to take on new projects,so feel free to send me a message about anything that you want me to work on.you can contact anytime</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                               <p>nivisi0702@gmail.com</p>
                            </div>
                              <div className="contact-detail">
                                <p>6379948790</p>
                            </div>
                              <div className="contact-detail">
                                <p>Dindigul</p>
                            </div>
                        </div>
                    </div>
                    <div className="form">
    <form>
       <label>Your Name</label> 
       <input type="text" />
       <label>E-mail</label> 
       <input type="email" />
       <label>Subject</label> 
       <input type="text" />
       <label>Message</label> 
       <textarea rows="6" placeholder="Type your message here" />
  <button className="btn"> Submit</button>
    </form>
</div>
                </div>
            </div>


    )
}
export default Contact