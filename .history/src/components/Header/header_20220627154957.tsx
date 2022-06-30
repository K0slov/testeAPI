import React from "react";
import './style.modeule.css'
import image from '../../assets/logoLaranja.png'
import { WhatsappLogo } from "phosphor-react";

export function Header() {
    return(
        <header> 
            <img src={image} />

            <div className="menu">
                <a className="hyperlink" href=" ">
                    <div>
                        <span>hyperLink</span>
                    </div>
                </a>
                <a className="dropdown" href=" ">
                    <div>
                        <span>dropDown</span>
                    </div>
                </a>
            </div>
            
            <a className="wppLink" href="">
                <div className="wpp">
                    <WhatsappLogo size={24} color="#34af23" />
                    <p className="number">(27) 98856-9001</p>
                </div>
            </a>
        </header>
    )
}   