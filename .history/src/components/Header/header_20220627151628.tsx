import React from "react";
import './style.modeule.css'
import image from '../../assets/logoLaranja.png'
import { WhatsappLogo } from "phosphor-react";

export function Header() {
    return(
        <header> 
            <img src={image} />
            teste Header 
            <a href="">
                <div className="wpp">
                    <WhatsappLogo size={24} color="#34af23" />
                    <span>(27) 98856-9001</span>
                </div>
            </a>
        </header>
    )
}   