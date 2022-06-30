import React from "react";
import './style.modeule.css'
import image from '../../assets/logoLaranja.png'
import { WhatsappLogo } from "phosphor-react";

export function Header() {
    return(
        <header> 
            <img src={image} />

            <nav className="menu">
                <a className="munu-item" href=" ">hyperLink</a>
            </nav>
            <nav className="menu">
                <a className="munu-item" href=" ">dropDown</a>
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