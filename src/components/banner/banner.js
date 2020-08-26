import React from "react";
import "./style.css";
export default function Banner(){
    return(
        <section className="banner" id="home">
            <div className="textBx">
                <h2>Hello, I'm<br/><span>Amarjeet Prasad.</span></h2>
                <h3 >I'm a Full Stack Developer.</h3>
                <a  class="myButton" href={process.env.PUBLIC_URL+"/img/CV.pdf"}>GET CV</a>
            </div>
        </section>
    );
}
