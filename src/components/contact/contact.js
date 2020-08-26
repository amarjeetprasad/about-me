import React from 'react'
import "./style.css";
export default function contact() {
    return (
        <section className="contact" id="contact">
             <div className="heading white">
                <h2>Contact Me</h2>
                <hr/>
            </div>
            <div className="content">
                <div className="contactInfo">
                    <h3>Contact Info</h3>
                    <div className="contactInfoBx">
                        <div className="box">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>708011 Assam university,<br/>Silchar,<br/>Assam India</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                            <i class="fa fa-github"></i>
                            </div>
                            <div className="text">
                            <a href="https://github.com/amarjeetprasad" target="_blank" rel="noopener noreferrer">
                                    <h3>GitHub</h3>
                            </a>
                            </div>
                        </div>

 
                        <div className="box">
                            <div className="icon">
                            <i className="fa fa-linkedin"></i>
                            </div>
                            <div className="text">
                                <a href="https://www.linkedin.com/in/amarjeet-prasad-39a30a1aa/" target="_blank" rel="noopener noreferrer">
                                    <h3>LinkedIn</h3>
                                </a>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                            <i className="fa fa-phone"></i>
                            </div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>7870974869</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                            <i className="fa fa-envelope-o"></i>
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>amarjeetprasad0202@gmail.com</p>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
                <div className="formBx">
                    <form>
                        <h3>Message Me</h3>
                        <input type="text" name="name" placeholder="Full Name" autoComplete="off"/>
                        <input type="email" name="email" placeholder="Email" autoComplete="off"/>
                        <textarea placeholder="Your Message"></textarea>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
             </div>   
        </section>
    )
}
