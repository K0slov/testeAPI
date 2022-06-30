import './style.css'
import image from '../../assets/logoLaranja.png'
import { WhatsappLogo } from "phosphor-react";

export function Header() {
    return(
        <header className='header'> 
            <img className='img' src={image} />

            <nav className="menu">
                <a className="menu-item" href=" ">HYPERLINK</a>
                <a className="menu-item" href=" ">DROPDOWN</a>
            </nav>

            <a className="wppLink" href="https://wa.me/+5527988569001" target="_blank">
                <div className="wpp">
                    <WhatsappLogo className="icon" size={24} color="#34af23" />
                    <p className="number">(27) 98856-9001</p>
                </div>
            </a>
        </header>
    )
}   