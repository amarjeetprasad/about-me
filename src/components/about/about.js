import React from 'react'
import "./style.css";
export default function about() {
    return (
        <section className="about" id="about">
            <div className="heading">
                <h2>About Me</h2>
            </div>
            <div className="content">
                <div className="contentBx w50">
                    <h3>I'm a Full Stack Developer.</h3>
                    <p>Hello, my name is <i>AMARJEET PRASAD</i> a Full stack web Developer living in Assam, 
                    India (788011). I enjoy building everything from small business sites to rich interactive Web apps.
                     If you are a business seeking a web presence or a intern looking to hire, you can get in touch with me -></p>
                </div>
                <div className="w50">
                    <img src={process.env.PUBLIC_URL+"/img/img1.jpg" } className="img" alt="Work"/>
                </div>
            </div>
        </section>
    )
}
