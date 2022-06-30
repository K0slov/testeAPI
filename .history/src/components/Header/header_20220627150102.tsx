import React from "react";
import './style.modeule.css'
import image from '../../assets/logoLaranja.png'
import { WhatsappLogo } from "phosphor-react";

export function Header() {
    return(
        <header> 
            <img src={image} />
            teste Header 
            <div className="wpp">
                <WhatsappLogo size={32} color="#34af23" />
                <p>(27) 98856-9001</p>
            </div>
        </header>
    )
}   