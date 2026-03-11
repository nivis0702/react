import React from "react";

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="" alt="" />
                    <p> I am a passionate Frontend Developer Fresher with knowledge of HTML, CSS, JavaScript, and React.js. I enjoy building responsive and user-friendly web interfaces. I have created several practice projects such as portfolio websites and small web applications to improve my development skills</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2025 nivis. </p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Contact with me</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
