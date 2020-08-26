import React from 'react'
import "./style.css";
export default function services() {
    return (
        <section className="services" id="services">
            <div className="heading white">
                <h2>My Services</h2>
            </div>
            <div className="content">
                <div className="servicesBx">
                    <img src={process.env.PUBLIC_URL+"/img/icon1.png"} alt="Web Design"/>
                    <h2>Web Design</h2>
                    
                </div>
                <div className="servicesBx">
                    <img src={process.env.PUBLIC_URL+"/img/icon2.png"} alt="Web Development"/>
                    <h2>Web Development</h2>
                    
                </div>
                <div className="servicesBx">
                    <img src={process.env.PUBLIC_URL+"/img/icon3.png"} alt="Android App"/>
                    <h2>Android App</h2>
                  
                </div>
                <div className="servicesBx">
                    <img src={process.env.PUBLIC_URL+"/img/icon4.png"} alt="Photography"/>
                    <h2>Photography</h2>
                  
                </div>
                <div className="servicesBx">
                    <img src={process.env.PUBLIC_URL+"/img/icon5.png"} alt="Content Writing"/>
                    <h2>Content Writing</h2>
                  
                </div>
                <div className="servicesBx">
                    <img src={process.env.PUBLIC_URL+"/img/icon6.png"} alt="Video Editing"/>
                    <h2>Video Editing</h2>
                 
                </div>
            </div>
        </section>
    )
}
