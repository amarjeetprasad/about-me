import React,{useState} from 'react'
import "./style.css";
export default function Header() {
    const [classname, setclassName] = useState("toggle");
    const [menuToggle, setmenuToggle] = useState("menu")
    let isOpen=true;
    function toggleMenu(){
        if(isOpen===true){
            setclassName("toggle active");
            setmenuToggle("menu active");
            isOpen=false;
        }
        else{
            setclassName("toggle");
            setmenuToggle("menu");
            isOpen=true;
        }
    }
    return (
        <header>
            <a href="#home" className="logo">Hellooo :)</a>
            <div className={classname} onClick={toggleMenu}></div>
            <ul className={menuToggle}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#services" onClick={toggleMenu} >Services</a></li>
                <li><a href="#work" onClick={toggleMenu} >Work</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </header>
    )
}
