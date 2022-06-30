import React from "react";
import './style.modeule.css'
import image from '../../assets/logoAmarelo.png'
import { WhatsappLogo } from "phosphor-react";

export function Header() {
    return(
        <header> 
            <img src={image} />
            teste Header 
            <div className="wpp">
                <WhatsappLogo size={32} color="#fd8402" />
                <a href="">
                    (27) 98856-9001
                </a>
            </div>
        </header>
    )
}   