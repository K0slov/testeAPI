import React from "react";
import './style.modeule.css'
import image from '../../assets/logoLaranja.png'
import { WhatsappLogo } from "phosphor-react";

export function Header() {
    return(
        <header> 
            <img src={image} />

            <nav className="menu">
                <a className="hyperlink" href=" ">
                
                        <span>hyperLink</span>
                    
                </a>
                <a className="dropdown" href=" ">
                
                        <span>dropDown</span>
                    
                </a>
            </nav>

            <a className="wppLink" href="">
                <div className="wpp">
                    <WhatsappLogo size={24} color="#34af23" />
                    <p className="number">(27) 98856-9001</p>
                </div>
            </a>
        </header>
    )
}   